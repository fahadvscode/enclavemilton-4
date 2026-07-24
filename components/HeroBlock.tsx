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
            Freehold homes from $599,990 on Britannia Road in southeast Milton — $0 monthly
            maintenance, 15 layouts, 2027 occupancy.
          </p>
          <div className={styles.actions}>
            <a href="#register" className="btn btn--primary">
              Get floor plans &amp; pricing
            </a>
            <Link href="/floor-plans" className="btn btn--ghost">
              View all 15 models
            </Link>
          </div>
        </div>
        <aside id="register" className={styles.card} aria-labelledby="hero-form-title">
          <h2 id="hero-form-title" className={styles.cardTitle}>
            Register for The Enclave Milton floor plans &amp; pricing
          </h2>
          <LeadForm idPrefix="hero" />
        </aside>
      </div>
    </section>
  );
}
