import { AREA_FAQ, type FaqItem } from "@/data/area-faq";

export type { FaqItem };

export const PRODUCT_FAQ: FaqItem[] = [
  {
    question: "What is The Enclave?",
    answer:
      "The Enclave is a new freehold townhome community by Sundial Homes in Milton, Ontario — officially marketed as The Enclave Milton / The Enclave Milton Townhomes — starting from $599,990 with occupancy planned for 2027.",
  },
  {
    question: "What is The Enclave Milton?",
    answer:
      "The Enclave Milton is Sundial Homes' freehold townhome address on Britannia Road between James Snow Parkway and Fourth Line in southeast Milton. Buyers also search it as The Enclave Milton Townhomes and The Enclave Milton Sundial Homes. Homes are now selling from $599,990.",
  },
  {
    question: "What are The Enclave Milton Townhomes?",
    answer:
      "The Enclave Milton Townhomes are freehold layouts across two collections: Village (back-to-back models) and Park (traditional 2- and 3-storey models) with no monthly maintenance fees, marketed from $599,990.",
  },
  {
    question: "Are The Enclave Milton townhomes by Sundial Homes?",
    answer:
      "Yes. The Enclave Milton Sundial Homes community is developed by Sundial Homes, an established Ontario new-home builder. Confirm official pricing and availability with the builder or an authorized sales representative.",
  },
  {
    question: "Who builds The Enclave Milton?",
    answer:
      "Sundial Homes develops The Enclave's Village and Park townhome collections in southeast Milton — the same builder buyers mean when they search The Enclave Milton Sundial Homes.",
  },
  {
    question: "Where exactly is The Enclave in Milton?",
    answer:
      "Britannia Road between James Snow Parkway and Fourth Line in southeast Milton, Halton Region, Ontario, Canada. The site offers quick ties to Highway 401, Highway 407, and Milton GO for GTA commuters.",
  },
  {
    question: "What are prices at The Enclave Milton?",
    answer:
      "The Enclave Milton Townhomes by Sundial Homes are marketed from $599,990 before upgrades and closing costs. Model-specific pricing, elevations, and lot premiums are shared when you register for the price list and floor plans on this site.",
  },
  {
    question: "Do Enclave townhomes charge monthly maintenance fees?",
    answer:
      "No monthly maintenance fees are marketed on either collection — these are freehold townhomes, so you hold title without the recurring condo-style common-element charges typical of condominium towns.",
  },
  {
    question: "How do Village and Park collections differ?",
    answer:
      "Village delivers back-to-back freehold layouts — efficient footprints for first-time buyers and investors. Park offers traditional two- and three-storey designs, including select end and corner units.",
  },
  {
    question: "When can buyers move in?",
    answer:
      "Occupancy at The Enclave Milton is communicated for 2027. Exact closing dates depend on model, phase, and your agreement of purchase and sale — confirm timing when you register.",
  },
  {
    question: "Is ownership freehold or condominium?",
    answer:
      "Freehold. You own your unit and land interest without a condo corporation fee structure.",
  },
  {
    question: "How are pre-construction deposits structured?",
    answer:
      "Deposits are usually paid in installments tied to agreement milestones rather than one lump sum at signing. Request the current schedule from the builder when you register.",
  },
  {
    question: "What is Tarion warranty coverage?",
    answer:
      "New Ontario homes from enrolled builders carry Tarion's statutory warranty — defined periods for defects, delays, and other protections. Confirm enrollment in your purchase agreement.",
  },
  {
    question: "Is there a cooling-off period on freehold townhomes?",
    answer:
      "Statutory condominium rescission rights do not automatically apply to freehold townhome contracts. Your agreement of purchase and sale governs any rescission — review it with a lawyer before signing.",
  },
  {
    question: "Can buyers claim HST rebates on new homes?",
    answer:
      "Eligible purchasers may qualify for federal and provincial new housing HST rebates subject to price caps and occupancy rules. Ask your accountant or lawyer about your situation.",
  },
  {
    question: "What are occupancy fees before final closing?",
    answer:
      "If you occupy before title transfer, the builder may charge occupancy fees covering interest, taxes, and defined common elements per your agreement — separate from post-closing freehold ownership costs.",
  },
  {
    question: "Are builder incentives available?",
    answer:
      "Incentives vary by phase and inventory. Register for the current sheet; first-time buyers should also review federal programs such as the First Home Savings Account where applicable.",
  },
  {
    question: "How do I receive floor plans and pricing for The Enclave Milton Townhomes?",
    answer:
      "Submit the registration form with your contact details and model interest. Floor plan PDFs and pricing for The Enclave Milton typically arrive by email — check spam if nothing appears within a few minutes.",
  },
  {
    question: "Is this Sundial Homes' official website?",
    answer:
      "No. This is an independent information and marketing site about The Enclave Milton Sundial Homes community, not Sundial's official sales office. Confirm pricing, features, and availability at sundialhomes.com or with an authorized representative.",
  },
];

/** Full FAQ for homepage schema and /schools-and-area page */
export const HOME_FAQ: FaqItem[] = [...PRODUCT_FAQ, ...AREA_FAQ];
