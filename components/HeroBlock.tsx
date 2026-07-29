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
          alt="The Enclave Milton freehold townhomes by Sundial Homes on Britannia Road, Milton Ontario"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>The Enclave Milton · Now Available · Occupancy 2027</p>
          <h1 id="hero-heading">
            The Enclave Milton
            <span className={styles.byline}>
              Freehold Townhomes by Sundial Homes — from $599,990
            </span>
          </h1>
          <p className={styles.support}>
            The Enclave Milton Townhomes on Britannia Road near James Snow Parkway — Village
            back-to-back and Park traditional freehold layouts. Register now for the price list and
            floor plans.
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
            Get price list &amp; floor plans
          </h2>
          <LeadForm idPrefix="hero" compact />
        </aside>
      </div>
    </section>
  );
}
