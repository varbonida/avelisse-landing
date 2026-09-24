import Link from "next/link";

/** The bottom bar, shared by every page on the site. */
export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-[clamp(20px,5vw,64px)] text-[13.5px] text-text-secondary">
        <span>
          © 2026 AVELISSE. Nothing about you leaves this page, either -
          there&apos;s no analytics here.
        </span>
        <div className="flex gap-5">
          <Link href="/technical" className="font-semibold text-primary hover:underline">
            How it&apos;s built
          </Link>
          <Link href="/privacy" className="font-semibold text-primary hover:underline">
            Privacy
          </Link>
        </div>
        {/* Contact address intentionally omitted: no confirmed address
            exists yet. Add one here once it's decided, rather than
            inventing a placeholder. */}
      </div>
    </footer>
  );
}
