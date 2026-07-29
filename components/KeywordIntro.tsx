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
            <p className={styles.kicker}>Welcome to The Enclave Milton</p>
            <h2 id="about-enclave-heading">
              The Enclave · The Enclave Milton Townhomes by Sundial Homes
            </h2>
            <p className={styles.body}>
              <strong>The Enclave</strong> is a master-planned freehold townhome community in
              southeast Milton. Buyers search <strong>The Enclave Milton</strong>,{" "}
              <strong>The Enclave Milton Townhomes</strong>, and{" "}
              <strong>The Enclave Milton Sundial Homes</strong> for this Sundial Homes address on
              Britannia Road between James Snow Parkway and Fourth Line — starting from $599,990 with
              occupancy anticipated for 2027.
            </p>
            <p className={styles.body}>
              The Enclave Milton offers two collections in one community: Village back-to-back
              freehold towns and Park traditional two- and three-storey layouts. Register today for
              priority access to the price list, floor plans, and upcoming releases.
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
