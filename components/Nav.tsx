import Link from "next/link";

/** The sticky top bar, shared by every page on the site. */
export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/86 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-[clamp(20px,5vw,64px)] py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[19px] font-bold tracking-[-0.01em] text-primary"
        >
          <svg className="h-[26px] w-[26px] flex-none" viewBox="0 0 32 32" fill="none">
            <path
              d="M3 18c3-8 6-8 9 0s6 8 9 0 6-8 8 0"
              stroke="#007C92"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </svg>
          AVELISSE
        </Link>
        <div className="flex items-center gap-5">
          <Link
            href="/about"
            className="text-[13px] font-semibold text-primary hover:underline"
          >
            About
          </Link>
          <div className="hidden text-[13px] font-medium text-text-secondary sm:block">
            A voice journal, not an app to manage
          </div>
        </div>
      </div>
    </nav>
  );
}
