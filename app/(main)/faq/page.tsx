import { Faq } from "@/components/landing/faq";
import { getFaqSection } from "@/cms/helpers/faq";

export default async function FaqPage() {
  const faqData = await getFaqSection();

  return (
    <main className="flex-1 flex flex-col">
      <Faq data={faqData} />
    </main>
  );
}
