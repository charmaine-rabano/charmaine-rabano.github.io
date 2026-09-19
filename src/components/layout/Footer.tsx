import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-4.5 rule border-x-0 border-b-0 px-(--pad) pt-6.5 pb-8 text-sm font-semibold text-ink-2 max-[521px]:pb-[calc(32px+env(safe-area-inset-bottom))]">
      <span>
        &copy; {new Date().getFullYear()} {site.footer.copyrightName}
      </span>
      <span>{site.footer.location}</span>
    </footer>
  );
}
