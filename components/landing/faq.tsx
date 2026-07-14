import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes KeilHQ different from other tools?",
    answer: "KeilHQ unifies tasks, docs, chat, and your calendar in one seamless workspace. Instead of switching between five different apps, everything is connected. Plus, our built-in AI reads your actual data to help prioritize work and unblock your team."
  },
  {
    question: "Do I need a credit card to sign up?",
    answer: "No! You can get started with KeilHQ for completely free without a credit card. We offer a generous free plan perfect for individuals and small teams to experience the unified workspace."
  },
  {
    question: "Can I import my existing data from Notion or Jira?",
    answer: "Yes, absolutely. We provide seamless one-click importers for major platforms like Notion, Jira, Asana, and Linear so you can bring your context over without missing a beat."
  },
  {
    question: "How does the AI Assistant actually help?",
    answer: "Unlike generic AI chat bots, KeilHQ's AI is deeply integrated into your workflow. It cross-references your calendar, scans your assigned tasks, and identifies blockers automatically so you always know exactly what to tackle next."
  },
  {
    question: "Is my team's data secure?",
    answer: "Security is our top priority. All data is encrypted in transit and at rest using enterprise-grade standards. We also ensure your private company data is never used to train public AI models."
  }
];

export function Faq() {
  return (
    <section className="w-full bg-background pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24 flex justify-center">
      <div className="max-w-3xl w-full mx-auto px-5 sm:px-8">
        <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 w-fit mx-auto md:mx-0">
            <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
              Common Questions
            </span>
          </div>
          <h2 className="font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.1] text-foreground tracking-[-0.03em]">
            Frequently Asked Questions
          </h2>
          <p className="text-[17px] lg:text-[18px] font-normal text-muted-foreground leading-[1.55] max-w-[500px]">
            Everything you need to know about KeilHQ, our pricing, and how we handle your data.
          </p>
        </div>

        <div className="w-full">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 bg-secondary/20 rounded-lg px-5 data-[state=open]:bg-secondary/40 transition-colors"
              >
                <AccordionTrigger className="text-[15px] font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
