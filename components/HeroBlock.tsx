import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import LeadForm from "./LeadForm";
import styles from "./HeroBlock.module.css";

export default function HeroBlock() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.media}>
        <Image
          src={IMAGES.hero}
          alt="The Enclave Milton Townhomes by Sundial Homes — community rendering in Milton, Ontario"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <p className={styles.brand} aria-label="The Enclave">
            The Enclave
          </p>
          <h1 id="hero-heading" className={styles.headline}>
            The Enclave Milton Townhomes by Sundial Homes
          </h1>
          <p className={styles.support}>
            Freehold from $599,990 · $0 monthly maintenance · 15 layouts · 2027 occupancy
          </p>
          <div className={styles.actions}>
            <Link href="/floor-plans" className="btn btn--ghost btn--sm">
              View floor plans
            </Link>
            <Link href="/schools-and-area" className={styles.textLink}>
              Schools &amp; area
            </Link>
          </div>
        </div>

        <aside id="register" className={styles.card} aria-labelledby="hero-form-title">
          <h2 id="hero-form-title" className={styles.cardTitle}>
            Get floor plans &amp; pricing
          </h2>
          <LeadForm idPrefix="hero" compact />
        </aside>
      </div>
    </section>
  );
}
