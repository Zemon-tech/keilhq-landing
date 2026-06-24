import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Faq } from "@/components/landing/faq";

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
      <Navbar />
      <main className="flex-1 flex flex-col pt-20">
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
