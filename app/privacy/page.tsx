import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

/*
Read mode, not Persuade: this page's job is comprehension, so the waveform
theatrics and card grids from the homepage are deliberately absent. One
column, a measure the eye can hold, clear heading hierarchy. Content is
ported verbatim from ../avelisse-android/PRIVACY.md - the source of truth
for what the app actually does, not marketing copy written separately.
*/

export const metadata: Metadata = {
  title: "Privacy — AVELISSE",
  description:
    "Where your recordings and entries go when you use AVELISSE, and where they don't.",
};

export default function Privacy() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,80px)]">
        <article className="mx-auto max-w-[70ch]">
          <h1 className="mb-6 text-[clamp(30px,4vw,44px)] leading-[1.1] font-bold tracking-[-0.015em]">
            Privacy
          </h1>

          <p className="text-[18px] leading-[1.6] text-text-secondary">
            AVELISSE is a voice journal for people living with a long-term
            illness. What you record is about your health, and this page is
            an account of where it goes.
          </p>

          <p className="mt-5 text-[18px] leading-[1.6] text-text-secondary">
            The short version: it stays on your phone. There is no account
            to create, no server to send it to, and no company on the other
            end reading it.
          </p>

          <p className="mt-5 text-[18px] leading-[1.6] text-text-secondary">
            Everything below is something you can check. The app is built
            from source that can be read, and the claims here are written
            so that they could be disproved if they were false.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            What leaves your phone
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            Nothing you say, and nothing you write.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            Your recordings are turned into text on the phone itself, by a
            speech model stored on the device. That is the whole reason the
            app asks you to download a model: so the audio never has to be
            sent anywhere to be understood. Most voice apps do the opposite.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            Once a recording has been turned into text, the audio is
            deleted. The text is saved in a private database that only this
            app can open.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            The one time the app uses the internet
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            Downloading a speech model, which you start yourself from the
            Models screen.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            The app asks two addresses for a file:{" "}
            <code className="rounded bg-primary-container px-1.5 py-0.5 text-[15px] text-primary-dark">
              huggingface.co
            </code>{" "}
            and{" "}
            <code className="rounded bg-primary-container px-1.5 py-0.5 text-[15px] text-primary-dark">
              github.com
            </code>
            . The request is for the model file and nothing else. It
            carries no identifier, no account, and nothing derived from
            anything you have said, recorded, typed or searched for.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            That is the only network connection in the app. There is no
            other.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            What the app deliberately does not have
          </h2>
          <ul className="list-none space-y-3">
            {[
              ["No analytics.", "Nothing counts your taps or reports how you use it."],
              ["No crash reporting.", "If it crashes, we do not find out."],
              ["No advertising, and no advertising identifiers.", null],
              ["No account, no sign-in, no email address.", null],
              ["No cloud sync.", null],
            ].map(([lead, rest]) => (
              <li
                key={lead}
                className="border-l-2 border-border pl-4 text-[17px] leading-[1.65] text-text-secondary"
              >
                <strong className="text-text-primary">{lead}</strong>
                {rest ? ` ${rest}` : ""}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[17px] leading-[1.65] text-text-secondary">
            These are not settings that happen to be switched off. The code
            for them is not in the app, and the libraries that provide them
            are not among its dependencies.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            Your phone&apos;s own backup is switched off
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            This one needs explaining, because it is a decision with a
            cost.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            Android normally copies an app&apos;s data to the owner&apos;s
            Google Drive automatically, on a schedule of its own, with no
            prompt. For most apps that is a convenience. For this one it
            would mean your symptom entries and your personal word list
            being uploaded to Google without you asking, which is the
            opposite of what this app is for. So it is turned off, for both
            the cloud copy and the phone-to-phone transfer you get when
            setting up a new device.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            <strong className="text-text-primary">What that costs you:</strong>{" "}
            if you lose your phone, or reset it, your entries are gone.
            There is no copy anywhere else, because that is the point. If
            your notes matter to you, use the Export button and keep the
            file somewhere you trust. Nothing is exported unless you press
            that button.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            What is stored on your phone
          </h2>
          <ul className="list-none space-y-3">
            <li className="border-l-2 border-border pl-4 text-[17px] leading-[1.65] text-text-secondary">
              Your entries: the date, which log it belongs to, and the
              text.
            </li>
            <li className="border-l-2 border-border pl-4 text-[17px] leading-[1.65] text-text-secondary">
              Your personal word list: the words you have corrected, and
              what they should say.
            </li>
            <li className="border-l-2 border-border pl-4 text-[17px] leading-[1.65] text-text-secondary">
              Your settings.
            </li>
            <li className="border-l-2 border-border pl-4 text-[17px] leading-[1.65] text-text-secondary">
              A small diagnostic log, capped at about one megabyte, holding
              what the app did rather than what you said. It records that a
              recording finished and how long the text was, not the text.
              It is never sent anywhere; you can look at it or share it
              yourself from Settings, and that is the only way it goes
              anywhere.
            </li>
          </ul>
          <p className="mt-5 text-[17px] leading-[1.65] text-text-secondary">
            Deleting an entry deletes it. Uninstalling the app removes all
            of it.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            The keyboard warning
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            AVELISSE includes a keyboard, so you can dictate into other
            apps. When you turn any keyboard on, Android shows a warning
            saying it may be able to collect all the text you type,
            including passwords.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            Android shows that warning for every keyboard, because it
            cannot tell what a keyboard does. This one does not collect
            what you type: it is never logged and never sent anywhere.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            One thing is kept, and it is worth being exact about. When you
            type the same word twice, the keyboard adds it to a list so it
            can suggest it to you later. That list is a set of words with
            no record of when or where you typed them, it is stored
            privately on the phone, and it goes when the app does.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            You are right to be careful about that warning. It is there
            for good reasons.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            Permissions, and why each one
          </h2>
          <ul className="list-none space-y-3">
            {[
              [
                "Microphone.",
                "To record. Only while you are recording, and the app shows a notification the whole time it is.",
              ],
              ["Internet.", "Only to download a speech model, as above."],
              [
                "Notifications.",
                "To show that a recording is in progress, which Android requires for anything recording in the background.",
              ],
              [
                "Foreground service.",
                "So that a recording is not killed by the system while you are still talking.",
              ],
            ].map(([lead, rest]) => (
              <li
                key={lead}
                className="border-l-2 border-border pl-4 text-[17px] leading-[1.65] text-text-secondary"
              >
                <strong className="text-text-primary">{lead}</strong> {rest}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            What this is not
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            This app is <strong className="text-text-primary">not HIPAA compliant</strong>,
            and does not claim to be. HIPAA governs healthcare providers
            and their business associates; AVELISSE is a notebook that
            belongs to you.
          </p>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary">
            The reason it is worth saying: the app holds exactly the kind
            of information HIPAA exists to protect, and it is built to be
            treated that way regardless. Nothing is transmitted, so there
            is nothing in transit to intercept. Nothing is stored off the
            device, so there is no database to breach. That is a stronger
            position than compliance, not a weaker one, but it is a
            different thing and should not be confused with it.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            Changes
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            If any of this ever stops being true, this page changes first,
            and the change is described rather than quietly made.
          </p>

          <h2 className="mt-12 mb-4 text-[24px] leading-[1.3] font-bold tracking-[-0.01em]">
            Contact
          </h2>
          <p className="text-[17px] leading-[1.65] text-text-secondary">
            An address for questions about this page hasn&apos;t been set
            yet - this section will be filled in once there is one, rather
            than showing a made-up one now.
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
