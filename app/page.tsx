import Image from "next/image";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PauseWave from "@/components/PauseWave";
import Reveal from "@/components/Reveal";
import WaveHero from "@/components/WaveHero";

/*
THESIS: continuity is the product; the page structures itself as one
waveform that never stops, refusing the generic hero-then-feature-grid
health-app template.
OWN-WORLD: Mediterranean Coastal — sea teal/terracotta/sun amber over
whitewash, flat 1px-bordered cards (no shadow), DM Sans, the app's own
animated waveform as signature motif.
STORY: a tired visitor understands in one viewport that this is two
buttons and nothing else, believes it via real screenshots and the
no-timeout proof, and is asked to do nothing — no store listing exists yet.
FIRST VIEWPORT: a breathing three-layer waveform settles behind the real
two-button home screen, one headline, one line of support copy.
FORM: waveform-as-throughline, dealt lead (index 5 of 7 grounded
candidates), seed key 12e6f1c9. Ported from the static HTML build to
Next.js + Tailwind, same content and direction, at the user's request.
FINISH: unreviewed and undocumented is unfinished; this build ends with
the finish review, the verdict, DESIGN.md, and every shipping raster
carrying its provenance.
*/

export default function Home() {
  return (
    <>
      <Nav />

      <header className="relative z-0 overflow-clip py-[clamp(56px,9vw,108px)] pb-[clamp(40px,7vw,72px)] text-center">
        <WaveHero />

        <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <h1 className="mx-auto mb-[18px] max-w-[18ch] text-[clamp(34px,6vw,60px)] leading-[1.06] font-bold tracking-[-0.02em] text-text-primary">
              Say what happened.{" "}
              <em className="text-primary not-italic">That&apos;s the whole app.</em>
            </h1>
          </Reveal>

          <Reveal>
            <p className="mx-auto mb-[clamp(32px,5vw,48px)] max-w-[46ch] text-[clamp(17px,2.1vw,20px)] text-text-secondary">
              AVELISSE is a voice journal for people managing a long-term illness -
              built for the days when typing, remembering, and forms all cost more
              than you have.
            </p>
          </Reveal>

          <Reveal>
            <div
              className="mx-auto w-[min(320px,84vw)] rounded-[28px] border border-border bg-surface px-4 pt-5 pb-6 text-left"
              role="img"
              aria-label="The AVELISSE home screen: two buttons, Symptom log and After an appointment"
            >
              <div className="mb-3.5 flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.04em] text-text-secondary uppercase">
                Home screen · nothing else on it
              </div>
              <div className="mb-3 flex items-center gap-3.5 rounded-2xl bg-linear-to-br from-primary to-primary-dark p-[18px] text-white">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[11px] bg-white/18">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-white stroke-2 fill-none [stroke-linecap:round] [stroke-linejoin:round]">
                    <path d="M3 12h4l2 7 4-14 2 7h6" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[16px] font-bold tracking-[-0.01em]">
                    Symptom log
                  </span>
                  <span className="mt-0.5 block text-[12.5px] opacity-90">
                    Something happened. Press, talk, done.
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3.5 rounded-2xl bg-linear-to-br from-secondary to-secondary-dark p-[18px] text-white">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[11px] bg-white/18">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-white stroke-2 fill-none [stroke-linecap:round] [stroke-linejoin:round]">
                    <rect x="4" y="8" width="16" height="12" rx="2" />
                    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                    <path d="M12 12v4M10 14h4" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[16px] font-bold tracking-[-0.01em]">
                    After an appointment
                  </span>
                  <span className="mt-0.5 block text-[12.5px] opacity-90">
                    What was said, while it is fresh.
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-5 text-[14px] text-text-secondary">
              Nothing to fill in, nothing to decide -{" "}
              <strong className="font-semibold text-text-primary">
                which is the point
              </strong>
              , on a day when deciding is the hard part.
            </p>
          </Reveal>
        </div>
      </header>

      <Divider />

      {/* ---------- The problem ---------- */}
      <section className="border-t border-border bg-surface py-[clamp(52px,8vw,96px)]">
        <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,64px)]">
          <div className="grid grid-cols-1 items-center gap-[clamp(24px,4vw,56px)] md:grid-cols-2">
            <Reveal>
              <div className="flex justify-center">
                <div
                  className="relative flex h-[min(260px,72vw)] w-[min(260px,72vw)] items-center justify-center rounded-full border-[3px] border-border"
                  style={{
                    background:
                      "conic-gradient(#D85C27 0deg 36deg, transparent 36deg 360deg)",
                  }}
                  role="img"
                  aria-label="A twelve minute appointment shown as a small slice of a clock face"
                >
                  <div className="absolute inset-3.5 rounded-full bg-surface" />
                  <div className="relative text-center">
                    <span className="text-[34px] font-extrabold tracking-[-0.02em] text-secondary-dark">
                      12
                    </span>
                    <span className="mt-0.5 block text-[12px] font-semibold tracking-[0.04em] text-text-secondary uppercase">
                      minutes
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="mb-3.5 text-[clamp(26px,3.4vw,38px)] leading-[1.15] font-bold tracking-[-0.015em]">
                  Twelve minutes to explain months
                </h2>
                <blockquote className="mb-5 text-[22px] leading-[1.4] font-semibold tracking-[-0.01em] text-secondary-dark">
                  &quot;It&apos;s been about the same.&quot;
                </blockquote>
                <p className="text-[16px] text-text-secondary">
                  That&apos;s what most people say in an appointment, because
                  nobody can hold weeks of symptoms in their head under
                  pressure. The doctor gets nothing useful. Then you walk out
                  and forget half of what was just said before you reach the
                  car.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Divider flip />

      {/* ---------- Two logs ---------- */}
      <section className="bg-background py-[clamp(52px,8vw,96px)]">
        <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <div className="mx-auto mb-[clamp(32px,5vw,52px)] max-w-[640px] text-center">
              <h2 className="mx-auto mb-3.5 text-[clamp(26px,3.4vw,38px)] leading-[1.15] font-bold tracking-[-0.015em]">
                Two moments. Two buttons.
              </h2>
              <p className="mx-auto max-w-[52ch] text-[17px] text-text-secondary">
                Nothing to fill in, nothing to categorize. You talk, AVELISSE
                dates it, titles it, and files it.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-[clamp(20px,3vw,32px)] md:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-[20px] border border-border bg-surface">
                <div className="relative aspect-9/12 border-b border-border bg-background">
                  <Image
                    src="/assets/screen-recording.jpg"
                    alt="AVELISSE mid-recording, showing the live waveform and a Stop button"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="px-[22px] pt-[22px] pb-[26px]">
                  <span className="mb-3.5 inline-flex items-center gap-[7px] rounded-full bg-primary-container px-3 py-1.5 text-[12.5px] font-bold tracking-[0.03em] text-primary-dark uppercase">
                    <span className="h-[7px] w-[7px] rounded-full bg-current" />
                    Symptom log
                  </span>
                  <h3 className="mb-2 text-[21px] tracking-[-0.01em]">
                    For whenever something happens
                  </h3>
                  <p className="text-[15.5px] text-text-secondary">
                    A bad night. New pain. A medication that made you feel
                    strange. Open the app, one button, talk. Ramble if you
                    need to - when you stop, it&apos;s already saved.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-[20px] border border-border bg-surface">
                <div className="relative aspect-9/12 border-b border-border bg-background">
                  <Image
                    src="/assets/screen-entries.jpg"
                    alt="AVELISSE's entry list, showing dated and titled symptom and appointment entries"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="px-[22px] pt-[22px] pb-[26px]">
                  <span className="mb-3.5 inline-flex items-center gap-[7px] rounded-full bg-secondary-container px-3 py-1.5 text-[12.5px] font-bold tracking-[0.03em] text-secondary-dark uppercase">
                    <span className="h-[7px] w-[7px] rounded-full bg-current" />
                    After an appointment
                  </span>
                  <h3 className="mb-2 text-[21px] tracking-[-0.01em]">
                    For the five minutes after, in the car
                  </h3>
                  <p className="text-[15.5px] text-text-secondary">
                    What was said, what got prescribed, what to do next, what
                    you forgot to ask. Same thing: one button, talk, done -
                    while it&apos;s still fresh.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- No timeout ---------- */}
      <section className="py-[clamp(52px,8vw,96px)]">
        <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,64px)]">
          <div className="mx-auto max-w-[1120px] rounded-[28px] bg-text-primary px-[clamp(24px,6vw,72px)] py-[clamp(40px,6vw,72px)] text-white">
            <div className="grid grid-cols-1 items-center gap-[clamp(28px,5vw,64px)] md:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <div>
                  <h2 className="mb-3.5 max-w-[14ch] text-[clamp(26px,3.4vw,38px)] leading-[1.15] font-bold tracking-[-0.015em] text-white">
                    No timeout. Not once, not ever.
                  </h2>
                  <p className="max-w-[46ch] text-[17px] text-white/68">
                    Pause for thirty seconds because you lost the thread.
                    Nothing is lost with it. This is the one thing that will
                    make you choose AVELISSE over the free keyboard already on
                    your phone.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="rounded-[20px] border border-white/16 bg-white/4 px-6 py-[26px]">
                  <PauseWave />
                  <div className="flex items-center justify-between text-[14px] text-white/60">
                    <span>0:41 recorded</span>
                    <span className="inline-flex items-center gap-[7px] font-semibold text-accent">
                      <span className="animate-pulse-dot h-[7px] w-[7px] rounded-full bg-accent" />
                      still listening
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ---------- Medical words ---------- */}
      <section className="bg-surface py-[clamp(52px,8vw,96px)]">
        <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,64px)]">
          <div className="grid grid-cols-1 items-center gap-[clamp(28px,4vw,56px)] md:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-[20px] border border-border bg-background">
                <Image
                  src="/assets/screen-fixword.jpg"
                  alt="Fixing a mis-heard word in an AVELISSE entry by tapping it and typing the correction"
                  width={576}
                  height={1280}
                  className="block w-full"
                />
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="mb-3.5 text-[clamp(26px,3.4vw,38px)] leading-[1.15] font-bold tracking-[-0.015em]">
                  Medication names, said your way
                </h2>
                <p className="text-[17px] text-text-secondary">
                  Dictation apps mangle drug names - that alone makes people
                  give up. AVELISSE starts with a built-in medical word list,
                  and when it still gets one wrong, you fix it once.
                </p>
                <div className="mt-7">
                  <div className="flex gap-3.5 py-3.5">
                    <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[9px] bg-primary-container text-primary-dark">
                      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] stroke-current stroke-2 fill-none [stroke-linecap:round] [stroke-linejoin:round]">
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="mb-[3px] text-[16px] font-bold">
                        Tap the word that came out wrong
                      </h4>
                      <p className="text-[15px] text-text-secondary">
                        Every word in an entry becomes its own large, tappable
                        target.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 border-t border-border py-3.5">
                    <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[9px] bg-primary-container text-primary-dark">
                      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] stroke-current stroke-2 fill-none [stroke-linecap:round] [stroke-linejoin:round]">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="mb-[3px] text-[16px] font-bold">
                        Type what you actually said
                      </h4>
                      <p className="text-[15px] text-text-secondary">
                        It corrects that entry immediately, right in front of
                        you.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 border-t border-border py-3.5">
                    <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[9px] bg-primary-container text-primary-dark">
                      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] stroke-current stroke-2 fill-none [stroke-linecap:round] [stroke-linejoin:round]">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="mb-[3px] text-[16px] font-bold">
                        It sticks - from now on
                      </h4>
                      <p className="text-[15px] text-text-secondary">
                        Every recording after that gets it right. You fix a
                        word once, ever.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Bad hands ---------- */}
      <section className="border-t border-border bg-background py-[clamp(52px,8vw,96px)]">
        <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <div className="mb-[clamp(32px,5vw,52px)] max-w-[640px]">
              <h2 className="mb-3.5 text-[clamp(26px,3.4vw,38px)] leading-[1.15] font-bold tracking-[-0.015em]">
                Built for bad hands and no energy
              </h2>
              <p className="max-w-[52ch] text-[17px] text-text-secondary">
                This is an assistive app, designed that way from the start -
                not adjusted for accessibility afterward.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <div className="rounded-[18px] border border-border bg-surface px-[22px] py-6">
                <div className="mb-4 flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-text-primary text-[13px] font-bold text-accent">
                  1
                </div>
                <h4 className="mb-2 text-[16.5px] tracking-[-0.005em]">
                  Usable one-handed
                </h4>
                <p className="text-[14.5px] text-text-secondary">
                  Every control sits within thumb&apos;s reach, sized for a
                  hand that isn&apos;t steady.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[18px] border border-border bg-surface px-[22px] py-6">
                <div className="mb-4 flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-text-primary text-[13px] font-bold text-accent">
                  2
                </div>
                <h4 className="mb-2 text-[16.5px] tracking-[-0.005em]">
                  Usable lying down
                </h4>
                <p className="text-[14.5px] text-text-secondary">
                  Record symptoms from bed. Nothing about this app assumes
                  you&apos;re sitting up at a desk.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[18px] border border-border bg-surface px-[22px] py-6">
                <div className="mb-4 flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-text-primary text-[13px] font-bold text-accent">
                  3
                </div>
                <h4 className="mb-2 text-[16.5px] tracking-[-0.005em]">
                  Works with a screen reader
                </h4>
                <p className="text-[14.5px] text-text-secondary">
                  Every state - expanded, on, off, recording - is announced,
                  not just guessed at.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="col-span-full flex flex-wrap items-center gap-6 rounded-[18px] border border-border bg-surface px-6 py-[26px]">
                <div className="flex flex-none flex-col items-center">
                  <div className="h-14 w-14 rounded-[14px] border-2 border-primary bg-primary-container" />
                  <span className="mt-2 text-[13px] text-text-secondary">
                    64dp
                  </span>
                </div>
                <div className="flex flex-none flex-col items-center">
                  <div className="h-12 w-12 rounded-[14px] border-2 border-dashed border-border bg-border" />
                  <span className="mt-2 text-[13px] text-text-secondary">
                    48dp (typical app minimum)
                  </span>
                </div>
                <div className="min-w-[220px] flex-1">
                  <h4 className="mb-1.5 text-[16px]">
                    Buttons bigger than the platform asks for
                  </h4>
                  <p className="text-[14.5px] text-text-secondary">
                    Android&apos;s own floor assumes a steady fingertip.
                    AVELISSE&apos;s primary actions are deliberately larger,
                    because the cost of a missed tap here is a lost thought -
                    or a lost entry.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Privacy ---------- */}
      <section className="border-t border-border bg-surface py-[clamp(52px,8vw,96px)]">
        <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,64px)]">
          <div className="grid grid-cols-1 items-center gap-[clamp(28px,4vw,64px)] md:grid-cols-2">
            <Reveal>
              <div className="relative overflow-visible rounded-[22px] border border-border bg-background px-[clamp(48px,7vw,72px)] py-[clamp(48px,7vw,72px)]">
                <div className="mx-auto flex aspect-[9/17.5] w-[min(220px,60vw)] items-center justify-center rounded-[34px] border-6 border-text-primary bg-surface">
                  <svg viewBox="0 0 24 24" fill="none" className="h-[52px] w-[52px] text-primary">
                    <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-0 sm:block sm:gap-0">
                  <span className="static inline-block rounded-full border border-border bg-surface px-[11px] py-1.5 text-[12.5px] font-semibold whitespace-nowrap text-text-secondary sm:absolute sm:top-[8%] sm:-left-[4%]">
                    <span className="font-extrabold text-secondary">✕ </span>
                    account
                  </span>
                  <span className="static inline-block rounded-full border border-border bg-surface px-[11px] py-1.5 text-[12.5px] font-semibold whitespace-nowrap text-text-secondary sm:absolute sm:top-[38%] sm:-right-[10%]">
                    <span className="font-extrabold text-secondary">✕ </span>
                    cloud sync
                  </span>
                  <span className="static inline-block rounded-full border border-border bg-surface px-[11px] py-1.5 text-[12.5px] font-semibold whitespace-nowrap text-text-secondary sm:absolute sm:bottom-[16%] sm:-left-[8%]">
                    <span className="font-extrabold text-secondary">✕ </span>
                    analytics
                  </span>
                  <span className="static inline-block rounded-full border border-border bg-surface px-[11px] py-1.5 text-[12.5px] font-semibold whitespace-nowrap text-text-secondary sm:absolute sm:right-[-4%] sm:bottom-[44%]">
                    <span className="font-extrabold text-secondary">✕ </span>
                    ads
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="mb-1 text-[clamp(26px,3.4vw,38px)] leading-[1.15] font-bold tracking-[-0.015em]">
                  Nothing leaves your phone
                </h2>
                <p className="text-[17px] text-text-secondary">
                  Speech is turned into text on your device, by a speech
                  model stored there - not sent anywhere to be understood.
                  Most voice apps do the opposite.
                </p>
                <div className="mt-[22px]">
                  <div className="flex gap-3.5 py-3.5">
                    <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[9px] bg-secondary-container text-secondary-dark">
                      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] stroke-current stroke-2 fill-none [stroke-linecap:round] [stroke-linejoin:round]">
                        <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="mb-[3px] text-[16px] font-bold">
                        No account, no sign-in
                      </h4>
                      <p className="text-[15px] text-text-secondary">
                        There&apos;s nothing to create and nothing to lose the
                        password to.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 border-t border-border py-3.5">
                    <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[9px] bg-secondary-container text-secondary-dark">
                      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] stroke-current stroke-2 fill-none [stroke-linecap:round] [stroke-linejoin:round]">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="mb-[3px] text-[16px] font-bold">
                        No analytics, no crash reports
                      </h4>
                      <p className="text-[15px] text-text-secondary">
                        Nothing counts your taps. If it crashes, we
                        don&apos;t find out.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5 border-t border-border py-3.5">
                    <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[9px] bg-secondary-container text-secondary-dark">
                      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] stroke-current stroke-2 fill-none [stroke-linecap:round] [stroke-linejoin:round]">
                        <path d="m3 3 18 18M10.6 5.1A9 9 0 0 1 21 12M6.3 6.3A9 9 0 0 0 3 12" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="mb-[3px] text-[16px] font-bold">
                        One connection, one purpose
                      </h4>
                      <p className="text-[15px] text-text-secondary">
                        The only time this app uses the internet is to
                        download a speech model - and after that, it never
                        needs to again.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-[22px] border-t border-border pt-5 text-[14px] text-text-secondary">
                  This app is <strong className="text-text-primary">not HIPAA compliant</strong>,
                  and doesn&apos;t claim to be. But your notes are handled as
                  if they were - because nothing transmitted means nothing to
                  intercept, and nothing stored off the device means nothing
                  to breach.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Close ---------- */}
      <section className="border-t border-border py-[clamp(64px,9vw,120px)] text-center">
        <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <svg
              className="mx-auto mb-7 h-16 w-[min(420px,90%)] opacity-50"
              viewBox="0 0 400 64"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="fill-none stroke-primary stroke-[3] [stroke-linecap:round]"
                d="M0,32 C15,10 30,54 45,32 S75,10 90,32 120,54 135,32 165,10 180,32 210,54 225,32 255,10 270,32 300,54 315,32 345,10 360,32 385,20 400,32"
              />
            </svg>
          </Reveal>
          <Reveal>
            <h2 className="mx-auto max-w-[16ch] text-[clamp(26px,3.4vw,38px)] leading-[1.15] font-bold tracking-[-0.015em]">
              Still working on it - and taking the time to get it right.
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-3.5 max-w-[48ch] text-[16.5px] text-text-secondary">
              AVELISSE isn&apos;t on an app store yet. It&apos;s built section
              by section, tested by hand on a real phone by someone who takes
              &quot;nothing leaves your hand&quot; as a promise, not a
              slogan.
            </p>
          </Reveal>
          <Reveal>
            <div>
              <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface-variant px-[18px] py-2.5 text-[13.5px] font-semibold text-text-primary">
                <span className="h-[7px] w-[7px] rounded-full bg-secondary" />
                In active development
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
