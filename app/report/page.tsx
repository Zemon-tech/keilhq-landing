import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ReportBugPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
      <Navbar />
      <main className="flex-1 flex flex-col pt-32 pb-24 px-5 sm:px-8 lg:px-12 items-center">
        <div className="w-full max-w-xl">
          <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 w-fit">
              <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
                Support
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.08] text-foreground tracking-tight">
              Report a bug
            </h1>
            <p className="text-[15px] font-medium text-muted-foreground leading-relaxed max-w-[600px]">
              Found something that isn't working right? Let us know the details so we can fix it.
            </p>
          </div>

          <form className="flex flex-col gap-6 w-full p-6 sm:p-8 rounded-lg border border-border/50 bg-secondary/20 shadow-sm">
            
            <div className="flex flex-col gap-2">
              <Label htmlFor="title" className="text-sm font-semibold text-foreground">Title</Label>
              <Input id="title" placeholder="e.g. Calendar sync is failing" className="bg-background/50" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="page" className="text-sm font-semibold text-foreground">Page</Label>
              <Input id="page" placeholder="e.g. /dashboard or Settings &gt; Integrations" className="bg-background/50" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="description" className="text-sm font-semibold text-foreground">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Please describe the issue, what you expected to happen, and steps to reproduce..." 
                className="min-h-[150px] bg-background/50 resize-y" 
              />
            </div>

            <Button type="button" className="w-full sm:w-auto self-end mt-2">
              Submit report
            </Button>
            
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
