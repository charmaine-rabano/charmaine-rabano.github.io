import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { Sparkle } from "@/components/icons/Sparkle";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative m-(--pad) overflow-hidden rounded-[22px] rule bg-rose px-(--contact-x) py-(--contact-y) text-center shadow-lift-3"
    >
      <Sparkle
        size={84}
        fill="#F3D7DB"
        strokeWidth={3.5}
        className="absolute top-[14%] left-[5%] max-[1081px]:-top-8.5 max-[1081px]:-left-5.5"
      />
      <Sparkle
        size={64}
        fill="#D2CBCE"
        strokeWidth={4}
        className="absolute right-[6%] bottom-[12%] max-[1081px]:-right-4 max-[1081px]:-bottom-5.5"
      />

      <h2 className="mx-auto max-w-[16ch] text-[clamp(34px,5vw,62px)] leading-[1.04] tracking-[-0.035em]">
        {contact.heading}
      </h2>
      <p className="mx-auto mt-5.5 max-w-[48ch] text-[clamp(16px,1.4vw,18.5px)] leading-[1.55] text-on-contact">
        {contact.body}
      </p>

      <div className="mt-8.5 flex flex-wrap justify-center gap-3.5">
        <Button variant="blush" size="lg" href={`mailto:${site.email}`}>
          Email me
        </Button>
        <Button size="lg" href={site.upworkUrl}>
          Hire me on Upwork ↗
        </Button>
      </div>
    </section>
  );
}
