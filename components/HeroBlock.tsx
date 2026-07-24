import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import LeadForm from "./LeadForm";
import styles from "./HeroBlock.module.css";

const STATS = [
  { value: "From $599,990", label: "Starting price" },
  { value: "$0", label: "Monthly maintenance" },
  { value: "15", label: "Floor plans" },
  { value: "2027", label: "Occupancy" },
];

export default function HeroBlock() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.shell}`}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>The Enclave · Milton, Ontario · Now selling</p>
            <h1 id="hero-heading">
              The Enclave Milton Townhomes
              <span className={styles.byline}>by Sundial Homes</span>
            </h1>
            <p className={styles.support}>
              Freehold townhomes on Britannia Road — Village back-to-back and Park traditional
              layouts with $0 monthly maintenance.
            </p>
            <ul className={styles.stats} aria-label="Key facts">
              {STATS.map((s) => (
                <li key={s.label}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </li>
              ))}
            </ul>
            <div className={styles.links}>
              <Link href="/floor-plans" className="btn btn--outline btn--sm">
                All 15 floor plans
              </Link>
              <Link href="/schools-and-area" className={styles.inlineLink}>
                Schools &amp; area guide
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <Image
                src={IMAGES.hero}
                alt="The Enclave Milton Townhomes by Sundial Homes — community rendering"
                fill
                priority
                sizes="(max-width: 960px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
            <aside id="register" className={styles.formCard} aria-labelledby="hero-form-title">
              <h2 id="hero-form-title" className={styles.formTitle}>
                Get floor plans &amp; pricing
              </h2>
              <LeadForm idPrefix="hero" compact />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
