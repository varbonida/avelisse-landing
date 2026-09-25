import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

/*
Same Read-mode restraint as /privacy and /technical, but a different
internal rhythm: this piece is short paragraphs with bold lead-ins, not
headed reference sections, so it keeps that shape rather than being
forced into the other two pages' H2 pattern. Content is ported verbatim
from the approved user-description.md - written for the reader directly,
never rewritten toward marketing voice.
*/

export const metadata: Metadata = {
  title: "For the days when everything costs more — AVELISSE",
  description:
    "AVELISSE is built for the days when typing, remembering, and forms all cost more than you have.",
};

export default function About() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,80px)]">
        <article className="mx-auto max-w-[64ch]">
          <h1 className="mb-8 text-[clamp(28px,3.6vw,40px)] leading-[1.2] font-bold tracking-[-0.015em]">
            For the days when everything costs more than you have
          </h1>

          <p className="text-[18px] leading-[1.7] text-text-secondary">
            You know the appointment. Twelve minutes, and you&apos;re
            supposed to remember what&apos;s happened over the last six
            weeks. So you say &quot;it&apos;s been about the same,&quot;
            because that&apos;s the only thing you can hold in your head
            under pressure - even though it hasn&apos;t been the same at
            all. Then you get in the car and half of what the doctor said
            is already gone.
          </p>

          <p className="mt-6 text-[18px] leading-[1.7] text-text-secondary">
            AVELISSE exists for the moment in between. Two buttons. Talk.
            That&apos;s it.
          </p>

          <p className="mt-8 text-[18px] leading-[1.7] text-text-secondary">
            <strong className="text-text-primary">When something happens</strong>{" "}
            - a bad night, a new pain, a medication that made you feel
            strange - open the app and press one button. Say whatever comes
            out, in whatever order it comes out. Ramble if you need to.
            When you stop talking, it&apos;s already saved, dated, titled.
            Nothing to fill in. Nothing to decide.
          </p>

          <p className="mt-6 text-[18px] leading-[1.7] text-text-secondary">
            <strong className="text-text-primary">Right after an appointment</strong>,
            while it&apos;s still fresh - what was said, what got
            prescribed, what to do next, the thing you forgot to ask -
            same button, same nothing-to-decide.
          </p>

          <p className="mt-6 text-[18px] leading-[1.7] text-text-secondary">
            We know typing is sometimes the problem, not the solution. Dry
            mouth from medication. A tremor that turns three words into a
            typo-filled paragraph. The fog that makes you lose the
            sentence you were halfway through. So this isn&apos;t a text
            app that happens to also listen. It&apos;s built around the
            fact that on your worst days, your voice is the only reliable
            input you have.
          </p>

          <p className="mt-6 text-[18px] leading-[1.7] text-text-secondary">
            <strong className="text-text-primary">It doesn&apos;t rush you.</strong>{" "}
            Pause for thirty seconds because you lost the thread - nothing
            is lost with it. No timer, no cutoff, ever. That&apos;s the
            single thing every other dictation app gets wrong for someone
            like you, and it&apos;s the reason this one exists.
          </p>

          <p className="mt-6 text-[18px] leading-[1.7] text-text-secondary">
            <strong className="text-text-primary">Every button is big.</strong>{" "}
            Big enough to hit without aiming, whether you&apos;re sitting
            up, lying down, or holding the phone in the one hand that
            isn&apos;t shaking today.
          </p>

          <p className="mt-6 text-[18px] leading-[1.7] text-text-secondary">
            <strong className="text-text-primary">And it stays yours.</strong>{" "}
            No account. No cloud. Nothing about your health leaves your
            phone, ever - not to us, not to anyone. If you want to send a
            copy to yourself or a doctor, that&apos;s a button you press on
            purpose. Nothing happens automatically that you didn&apos;t
            choose.
          </p>

          <p className="mt-10 text-[22px] leading-[1.5] font-semibold tracking-[-0.005em] text-text-primary">
            You&apos;re tired. This is built for tired.
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
