import Link from "next/link";
import { siteData } from "@/lib/floor-plans";
import styles from "./BentoCollections.module.css";

export default function BentoCollections() {
  const village = siteData.collections.find((c) => c.id === "village")!;
  const park = siteData.collections.find((c) => c.id === "park")!;

  return (
    <section className="section" aria-labelledby="collections-heading">
      <div className="container">
        <h2 id="collections-heading">
          The Enclave Milton Townhomes — Village vs Park collections
        </h2>
        <p className="lead">
          Both collections at The Enclave Milton are freehold with $0 monthly maintenance. Village is
          back-to-back; Park is traditional two- and three-storey Sundial Homes townhomes.
        </p>
        <div className={styles.bento}>
          <article className={`${styles.tile} ${styles.tileLarge}`}>
            <span className={styles.tag}>5 models</span>
            <h3>{village.name}</h3>
            <p>{village.type}</p>
            <p className={styles.desc}>
              Compact back-to-back freehold townhomes at The Enclave from about 953 to 1,732 sq ft —
              ideal for first-time buyers, investors, and low-footprint living without condo fees.
            </p>
            <Link href="/floor-plans#village">Explore Village Collection townhomes</Link>
          </article>
          <article className={`${styles.tile} ${styles.tileLarge}`}>
            <span className={styles.tag}>10 models</span>
            <h3>{park.name}</h3>
            <p>{park.type}</p>
            <p className={styles.desc}>
              Traditional two- and three-storey The Enclave Milton townhomes from about 1,240 to
              2,843 sq ft — family-scale layouts including end and corner units on select plans.
            </p>
            <Link href="/floor-plans#park">Explore Park Collection traditional townhomes</Link>
          </article>
          <article className={styles.tile}>
            <h3>All 15 The Enclave floor plans</h3>
            <p>Compare every The Enclave Milton model, size, and collection in one place.</p>
            <Link href="/floor-plans" className="btn btn--outline">
              See all 15 layouts
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
