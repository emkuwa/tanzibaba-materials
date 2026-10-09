import { fmtPrice, concreteGrades } from './locations';

// Homepage FAQs — rendered visibly in HomeClient AND used for FAQPage
// JSON-LD in src/app/page.tsx. Keep both in sync by editing here only.
// All answers use facts already present in the codebase (no invented claims).
const c25 = concreteGrades.find((g) => g.grade === 'C25');
const c10 = concreteGrades.find((g) => g.grade === 'C10');
const c50 = concreteGrades.find((g) => g.grade === 'C50');

export interface HomeFaq {
  q: string;
  a: string;
}

export const homeFaqs: HomeFaq[] = [
  {
    q: 'How much does ready-mix concrete cost in Dar es Salaam?',
    a: `Tanzibaba ready-mix concrete costs from ${fmtPrice(c10?.price || 130000)} per m³ (C10) to ${fmtPrice(c50?.price || 400000)} per m³ (C50), including 18% VAT. The most common residential grade, C25, costs approximately ${fmtPrice(c25?.price || 210000)} per m³. The final price depends on grade, volume and delivery distance — request a quote for an exact price.`,
  },
  {
    q: 'What concrete grades does Tanzibaba supply?',
    a: 'Tanzibaba supplies ready-mix concrete in grades C10 through C50. C20 and C25 are the most common grades for residential foundations, slabs and columns, while commercial and multi-storey projects typically use C30 or higher. The team can help select the right grade for each project.',
  },
  {
    q: 'Where does Tanzibaba deliver construction materials?',
    a: 'Tanzibaba delivers across Dar es Salaam — Kinondoni, Ubungo, Ilala, Temeke and Kigamboni — as well as Zanzibar, Dodoma and surrounding areas. Contact the team on WhatsApp at +255 716 002 790 to confirm delivery availability for a specific site.',
  },
  {
    q: 'How fast is delivery to my construction site?',
    a: 'Standard delivery in Dar es Salaam is within 2–4 hours of order confirmation. Delivery to Zanzibar and upcountry locations is typically scheduled within 24–48 hours. Ordering 24–48 hours in advance is recommended, and specific delivery windows can be scheduled.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'For ready-mix concrete, the minimum order is typically 5 cubic metres. For aggregates, blocks and other materials, minimums depend on the product and delivery location — contact Tanzibaba for specific minimums.',
  },
  {
    q: 'How do I request a quote?',
    a: 'Request a quote on the Get a Quote page, through the Request Quote button, or directly via WhatsApp at +255 716 002 790. Same-day quotes are provided for standard orders.',
  },
];
