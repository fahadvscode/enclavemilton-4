import styles from "./WhySection.module.css";

const POINTS = [
  {
    title: "The Enclave Milton freehold advantage",
    body: "The Enclave Milton Townhomes are marketed as freehold — a direct answer for buyers comparing Enclave Milton vs condo towns in Halton.",
  },
  {
    title: "Sundial Homes layouts",
    body: "The Enclave Milton Sundial Homes lineup spans multiple models — rare breadth in one southeast Milton address.",
  },
  {
    title: "Village & Park townhome collections",
    body: "Village owns the back-to-back niche. Park adds traditional two- and three-storey The Enclave townhomes for growing families.",
  },
  {
    title: "Britannia Road location in Milton",
    body: "The Enclave sits between James Snow Parkway and Fourth Line with fast ties to Highways 401 and 407 and Milton GO — plus planned trails and a future on-site elementary school in the master plan.",
  },
];

export default function WhySection() {
  return (
    <section className={`section ${styles.whySection}`} aria-labelledby="why-heading">
      <div className="container">
        <h2 id="why-heading">Why buyers choose The Enclave Milton Townhomes</h2>
        <p className="lead">
          The Enclave Milton by Sundial Homes pairs freehold ownership, two distinct collections, and
          a southeast Milton commute story.
        </p>
        <ul className={styles.list}>
          {POINTS.map((p, i) => (
            <li key={p.title} style={{ animationDelay: `${0.05 * i}s` }}>
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
