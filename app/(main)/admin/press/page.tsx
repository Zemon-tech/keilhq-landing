"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Copy, Check, ExternalLink } from "lucide-react";
import { PRESS_PLATFORMS, PLATFORM_LABELS, guessPlatform } from "@/lib/unfurl";

interface UnfurlResult {
  url: string;
  title?: string;
  image?: string;
  description?: string;
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="shrink-0 p-1.5 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer active:scale-95"
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </button>
  );
}

const inputClass =
  "w-full px-3.5 py-2.5 rounded-md bg-card border border-border text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors";

export default function PressUnfurlTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<UnfurlResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Editable draft fields, prefilled from the fetch.
  const [headline, setHeadline] = useState("");
  const [slug, setSlug] = useState("");
  const [platform, setPlatform] = useState<string>("news");
  const [excerpt, setExcerpt] = useState("");
  const [withThumbnail, setWithThumbnail] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedUrl, setSavedUrl] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  const fetchPreview = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const target = url.trim();
    if (!target) return;
    setLoading(true);
    setResult(null);
    setError(null);
    setSavedUrl(null);
    setSaveError(null);
    try {
      const res = await fetch(`/api/press/unfurl?url=${encodeURIComponent(target)}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not read this link.");
      } else {
        setResult(data);
        setHeadline(data.title || "");
        setSlug("");
        setExcerpt(data.description || "");
        setPlatform(guessPlatform(data.url));
      }
    } catch {
      setError("Network error — try again.");
    } finally {
      setLoading(false);
    }
  };

  const saveDraft = async () => {
    if (!result) return;
    setSaving(true);
    setSaveError(null);
    setSavedUrl(null);
    try {
      const res = await fetch("/api/press/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: result.url,
          headline,
          slug: slug.trim() || undefined,
          platform,
          excerpt,
          withThumbnail: withThumbnail && !!result.image,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSaveError(data.error || "Could not save the draft.");
      } else {
        setSavedUrl(data.editUrl);
      }
    } catch {
      setSaveError("Network error — try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="flex-1 flex flex-col">
      <section className="w-full max-w-3xl mx-auto px-5 sm:px-8 pt-32 md:pt-40 pb-24 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[12px] tracking-widest text-muted-foreground">
            ADMIN · PRESS
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-tight text-foreground">
            Link to entry
          </h1>
          <p className="text-[15px] leading-relaxed text-muted-foreground max-w-[60ch]">
            Paste a post URL. We fetch its title, description, and thumbnail —
            review each field below, then save straight into Press as a draft.
            Open it in Keystatic to publish.
          </p>
        </div>

        <form onSubmit={fetchPreview} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://…"
              aria-label="Post URL"
              className="w-full pl-11 pr-5 py-2.5 rounded-md bg-card border border-border text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition-all cursor-pointer disabled:opacity-60"
          >
            {loading ? "Fetching…" : "Fetch"}
          </button>
        </form>

        {error && (
          <div className="rounded-md border border-border bg-card px-4 py-3.5 text-sm text-muted-foreground">
            {error}
          </div>
        )}

        {result && (
          <div className="flex flex-col gap-5 rounded-lg border border-border bg-card/50 p-5 sm:p-6">
            {result.image && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border border-border bg-card">
                <Image
                  src={result.image}
                  alt={result.title || "Link preview"}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="press-headline" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Display headline (saved to the entry)
              </label>
              <div className="flex items-start gap-2">
                <input
                  id="press-headline"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className={`flex-1 ${inputClass}`}
                />
                <CopyButton value={headline} label="headline" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="press-slug" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Entry name (leave empty to derive it)
                </label>
                <input
                  id="press-slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="acme-launch-post"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="press-platform" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Platform
                </label>
                <select
                  id="press-platform"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className={inputClass}
                >
                  {PRESS_PLATFORMS.map((p) => (
                    <option key={p} value={p}>
                      {PLATFORM_LABELS[p]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="press-excerpt" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Excerpt / caption
              </label>
              <div className="flex items-start gap-2">
                <textarea
                  id="press-excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className={`flex-1 resize-y ${inputClass}`}
                />
                <CopyButton value={excerpt} label="excerpt" />
              </div>
            </div>

            <label className="flex items-center gap-2.5 text-sm text-muted-foreground cursor-pointer w-fit">
              <input
                type="checkbox"
                checked={withThumbnail}
                onChange={(e) => setWithThumbnail(e.target.checked)}
                disabled={!result.image}
                className="size-4 accent-current"
              />
              Download thumbnail into the entry
              {!result.image && " (no image found at this link)"}
            </label>

            {saveError && (
              <div className="rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                {saveError}
              </div>
            )}

            {savedUrl ? (
              <Link
                href={savedUrl}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:underline w-fit"
              >
                Draft saved — review it in Keystatic
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </Link>
            ) : (
              <button
                onClick={saveDraft}
                disabled={saving}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition-all cursor-pointer disabled:opacity-60 w-fit"
              >
                {saving ? "Saving…" : "Save as Press draft"}
              </button>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
