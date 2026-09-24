import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

/*
Read mode, same treatment as /privacy: one column, a measure the eye can
hold, no marketing theatrics. Content is ported verbatim from the
approved technical-description.md written for Kelly - accurate, not
exhaustive, and not rewritten into marketing voice for this page.
*/

export const metadata: Metadata = {
  title: "How it's built — AVELISSE",
  description:
    "What AVELISSE is, how it's built, and every tool it uses - written plainly, not as marketing copy.",
};

export default function Technical() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,80px)]">
        <article className="mx-auto max-w-[70ch]">
          <h1 className="mb-6 text-[clamp(30px,4vw,44px)] leading-[1.1] font-bold tracking-[-0.015em]">
            How it&apos;s built
          </h1>

          <p className="text-[18px] leading-[1.6] text-text-secondary">
            AVELISSE is a native Android app, written in Kotlin, that turns
            spoken words into a private, on-device journal. It does two
            things: it listens, and it writes down what you said. Nothing
            else about it talks to the outside world.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            Architecture
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            The app is split into five modules with clear boundaries:{" "}
            <code className="rounded bg-primary-container px-1.5 py-0.5 text-[15px] text-primary-dark">
              app
            </code>{" "}
            (the screens themselves - home, recording, settings, the entry
            list),{" "}
            <code className="rounded bg-primary-container px-1.5 py-0.5 text-[15px] text-primary-dark">
              core
            </code>{" "}
            (shared design system, database access, and the medical-word
            correction engine),{" "}
            <code className="rounded bg-primary-container px-1.5 py-0.5 text-[15px] text-primary-dark">
              ime
            </code>{" "}
            (the system keyboard, so dictation works inside any app, not
            just this one),{" "}
            <code className="rounded bg-primary-container px-1.5 py-0.5 text-[15px] text-primary-dark">
              whisper
            </code>{" "}
            (the JNI bridge to whisper.cpp), and{" "}
            <code className="rounded bg-primary-container px-1.5 py-0.5 text-[15px] text-primary-dark">
              asr
            </code>{" "}
            (the Kotlin bridge to NVIDIA&apos;s Parakeet model via
            sherpa-onnx). Screens are built in Jetpack Compose; dependency
            wiring is Hilt; local storage is Room.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            Speech recognition
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            Two offline engines ship in the app, and the person recording
            picks which one: OpenAI&apos;s Whisper (via whisper.cpp,
            several model sizes trading speed for accuracy) and
            NVIDIA&apos;s Parakeet CTC 110M (via sherpa-onnx). Both run
            entirely on the phone&apos;s own processor - no audio is ever
            sent anywhere to be transcribed.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            We measured both directly: on a mid-range test phone, Parakeet
            transcribes at roughly 6.3x real time versus whisper&apos;s
            0.7x, and produces mis-hearings that are recognizably broken
            (like &quot;pherosulfate&quot; for &quot;ferrous sulfate&quot;)
            rather than whisper&apos;s tendency to turn an unknown word
            into a confident, correctly-spelled wrong word
            (&quot;Britney Solon&quot; for &quot;prednisolone&quot;). That
            distinction matters for the next part.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            Medical word correction
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            Every transcript passes through a correction layer before
            it&apos;s saved. First against the person&apos;s own list of
            words they&apos;ve fixed themselves - tap a wrong word, say
            what it should have been, and it&apos;s corrected everywhere
            from then on. Then against a bundled list of roughly 8,380
            drug names from RxNorm (the U.S. National Library of
            Medicine&apos;s public drug vocabulary), matched phonetically
            so a word that&apos;s misspelled but sounds right still gets
            found.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            The whole pass runs in under 20 milliseconds. A deliberate
            guard means the corrector never touches an ordinary English
            word - it would rather leave a mis-hearing alone than turn
            &quot;after&quot; into a drug name.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            Recording
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            Audio is captured in short segments as you speak, each ending
            naturally where you pause - not on a fixed timer. That&apos;s
            what removes any time limit on a recording: a 21-minute test
            recording held the app&apos;s memory flat throughout, where
            the previous, naive approach would have run out of memory
            around minute six. Segments are transcribed one at a time as
            they&apos;re produced and deleted immediately after; the audio
            itself never persists past that moment.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            Storage and privacy
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            Everything lives in a local database on the device - entries,
            the personal word list, settings. There is no account, no
            server, no analytics, no crash reporting. Android&apos;s
            automatic cloud backup, which would otherwise silently copy
            this data to the person&apos;s Google account, is explicitly
            disabled, both the cloud copy and the phone-to-phone transfer
            path. The only network request the app ever makes is a
            one-time download of a speech model file from a public host
            (Hugging Face or GitHub) - nothing about that request carries
            anything the person said or typed.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            More detail on this specifically: see{" "}
            <a href="/privacy" className="font-semibold text-primary hover:underline">
              the privacy page
            </a>
            .
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            Accessibility
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            Every primary touch target is 64dp, above Android&apos;s own
            48dp floor, because a missed tap here costs a lost thought or
            a lost entry. The app has been run at the largest system font
            size and with TalkBack (Android&apos;s screen reader) enabled
            together, and one-handed lying down - not simulated, actually
            tested that way.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            Platform
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            Minimum Android version: 10 (API 29). Target: Android 15 (API
            35).
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
