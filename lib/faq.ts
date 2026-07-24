import { AREA_FAQ, type FaqItem } from "@/data/area-faq";

export type { FaqItem };

export const PRODUCT_FAQ: FaqItem[] = [
  {
    question: "What is The Enclave?",
    answer:
      "The Enclave is a new freehold townhome community by Sundial Homes in Milton, Ontario — officially marketed as The Enclave Milton / The Enclave Milton Townhomes — with 15 floor plans from $599,990, $0 monthly maintenance, and 2027 occupancy.",
  },
  {
    question: "What is The Enclave Milton?",
    answer:
      "The Enclave Milton is Sundial Homes' freehold townhome address on Britannia Road between James Snow Parkway and Fourth Line in southeast Milton. Buyers also search it as The Enclave Milton Townhomes and The Enclave Milton Sundial Homes.",
  },
  {
    question: "What are The Enclave Milton Townhomes?",
    answer:
      "The Enclave Milton Townhomes are 15 freehold layouts across two collections: Village (5 back-to-back models, ~953–1,732 sq ft) and Park (10 traditional 2- and 3-storey models, ~1,240–2,843 sq ft). Marketing starts from $599,990 with no monthly maintenance fees.",
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
      "Marketing lists The Enclave Milton Townhomes from $599,990 before upgrades and closing costs. Model-specific pricing, elevations, and lot premiums are shared when you register on this site.",
  },
  {
    question: "Do Enclave townhomes charge monthly maintenance fees?",
    answer:
      "No monthly maintenance fees are marketed on either collection — these are freehold townhomes, so you hold title without the recurring condo-style common-element charges typical of condominium towns.",
  },
  {
    question: "How do Village and Park collections differ?",
    answer:
      "Village delivers five back-to-back freehold layouts from about 953 to 1,732 sq ft — efficient footprints for first-time buyers and investors. Park offers ten traditional two- and three-storey designs from about 1,240 to 2,843 sq ft, including select end and corner units.",
  },
  {
    question: "How many models can I choose from?",
    answer: "Fifteen in total at The Enclave Milton: five Village models and ten Park models.",
  },
  {
    question: "When can buyers move in?",
    answer:
      "Occupancy at The Enclave Milton is communicated for 2027. Exact closing dates depend on model, phase, and your agreement of purchase and sale — confirm timing when you register.",
  },
  {
    question: "What square footage and storey options exist?",
    answer:
      "Village spans roughly 953–1,732 sq ft in back-to-back form. Park spans roughly 1,240–2,843 sq ft across two- and three-storey traditional townhome designs.",
  },
  {
    question: "Is ownership freehold or condominium?",
    answer:
      "Freehold. You own your unit and land interest without a condo corporation fee structure — marketing highlights $0 monthly maintenance on both The Enclave Milton collections.",
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
