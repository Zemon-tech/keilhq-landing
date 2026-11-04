import { generateLlmsText } from "@/lib/llms";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = await generateLlmsText();

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

