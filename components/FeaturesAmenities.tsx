import styles from "./FeaturesAmenities.module.css";

const FEATURES = [
  "Freehold townhomes — no monthly condo fees",
  "Village Collection back-to-back layouts",
  "Park Collection traditional 2 & 3 storey towns",
  "Contemporary exterior architecture by Sundial Homes",
  "Open-concept living spaces",
  "Modern kitchens & designer finishes",
  "Bright interiors with large windows",
  "Energy-efficient construction features",
  "Family-friendly floor plans",
  "Premium flooring & quality materials",
  "Stylish bathrooms & modern fixtures",
  "Master-planned community design",
  "Planned green spaces & walking trails",
  "Future on-site elementary school in the master plan",
  "Quick access to Highway 401, 407 & Milton GO",
];

const SHOPPING = [
  "Toronto Premium Outlets",
  "Milton Mall",
  "Sobeys",
  "Longo's",
  "Walmart",
  "Real Canadian Superstore",
  "Home Depot",
  "Canadian Tire",
  "LCBO",
  "Starbucks",
];

const RECREATION = [
  "Mattamy National Cycling Centre",
  "Milton Sports Centre",
  "Kelso Conservation Area",
  "Rattlesnake Point Conservation Area",
  "Milton Leisure Centre",
  "Community parks & trails",
  "Cycling networks",
  "Nearby golf courses",
];

const SCHOOLS = [
  "Future planned elementary school (master plan)",
  "Craig Kielburger Secondary School",
  "Bishop P.F. Reding Catholic Secondary",
  "Tiger Jeet Singh Public School",
  "Sam Sherratt Public School",
  "Hawthorne Village Public School",
  "Nearby childcare centres",
];

const TRANSIT = [
  "Highway 401 (~3–5 min)",
  "Highway 407 (~8–10 min)",
  "Milton GO Station (~8–10 min)",
  "James Snow Parkway",
  "Britannia Road frontage",
  "Pearson International Airport access",
];

export default function FeaturesAmenities() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="features-heading">
      <div className="container">
        <p className={styles.eyebrow}>The Enclave Milton · Now selling</p>
        <h2 id="features-heading">Features &amp; nearby amenities at The Enclave Milton</h2>
        <p className="lead">
          The Enclave Milton Townhomes by Sundial Homes combine freehold ownership, two collections,
          and a southeast Milton location with shopping, schools, recreation, and GTA transit nearby.
        </p>

        <div className={styles.featuresBlock}>
          <h3>Available features of The Enclave</h3>
          <ul className={styles.featureGrid}>
            {FEATURES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.amenityGrid}>
          <article>
            <h3>Shopping &amp; convenience</h3>
            <ul>
              {SHOPPING.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Recreation</h3>
            <ul>
              {RECREATION.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Schools</h3>
            <ul>
              {SCHOOLS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Transit &amp; connectivity</h3>
            <ul>
              {TRANSIT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
