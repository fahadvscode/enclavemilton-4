import styles from "./KeywordIntro.module.css";

export default function KeywordIntro() {
  return (
    <section
      className={`section section--dark ${styles.section}`}
      aria-labelledby="about-enclave-heading"
    >
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={styles.kicker}>About The Enclave Milton</p>
            <h2 id="about-enclave-heading">
              The Enclave, The Enclave Milton Townhomes &amp; Sundial Homes
            </h2>
            <p className={styles.body}>
              <strong>The Enclave</strong> is the community name.{" "}
              <strong>The Enclave Milton</strong> is the full local identity — a Sundial Homes
              freehold townhome address on Britannia Road between James Snow Parkway and Fourth
              Line. Buyers also search <strong>The Enclave Milton Townhomes</strong> and{" "}
              <strong>The Enclave Milton Sundial Homes</strong> when comparing new homes in
              southeast Milton, Halton Region.
            </p>
            <p className={styles.body}>
              Two collections share one master plan: Village back-to-back towns and Park traditional
              two- and three-storey layouts — fifteen models from about 953 to 2,843 sq ft, marketed
              from $599,990 with $0 monthly maintenance and 2027 occupancy.
            </p>
          </div>
          <aside className={styles.aside} aria-label="Quick facts about The Enclave Milton">
            <h3 className={styles.asideTitle}>At a glance</h3>
            <dl className={styles.dl}>
              <div>
                <dt>Builder</dt>
                <dd>Sundial Homes</dd>
              </div>
              <div>
                <dt>Product</dt>
                <dd>Freehold townhomes</dd>
              </div>
              <div>
                <dt>Starting from</dt>
                <dd>$599,990</dd>
              </div>
              <div>
                <dt>Maintenance</dt>
                <dd>$0 monthly</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Britannia Rd, Milton ON</dd>
              </div>
              <div>
                <dt>Occupancy</dt>
                <dd>2027</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
