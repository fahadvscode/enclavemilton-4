import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import LeadForm from "./LeadForm";
import styles from "./HeroBlock.module.css";

export default function HeroBlock() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.bg}>
        <Image
          src={IMAGES.hero}
          alt="The Enclave Milton Townhomes by Sundial Homes — community rendering"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>The Enclave · Milton, Ontario</p>
          <h1 id="hero-heading">
            The Enclave Milton
            <span className={styles.byline}>Freehold Townhomes by Sundial Homes</span>
          </h1>
          <p className={styles.support}>
            Freehold townhomes on Britannia Road — Village back-to-back and Park traditional
            layouts. Register for exclusive updates.
          </p>
          <div className={styles.links}>
            <Link href="/floor-plans" className="btn btn--primary">
              View floor plans
            </Link>
            <Link href="/schools-and-area" className={styles.inlineLink}>
              Schools &amp; area guide
            </Link>
          </div>
        </div>

        <aside id="register" className={styles.formCard} aria-labelledby="hero-form-title">
          <h2 id="hero-form-title" className={styles.formTitle}>
            Get floor plans &amp; details
          </h2>
          <LeadForm idPrefix="hero" compact />
        </aside>
      </div>
    </section>
  );
}
