/** The thin wavy rule the app's own waveform motif leaves behind between sections. */
export default function Divider({ flip = false }: { flip?: boolean }) {
  const bump = flip
    ? "M500,17 C 540,30 560,4 600,17 S 660,30 700,17"
    : "M500,17 C 540,4 560,30 600,17 S 660,4 700,17";
  return (
    <svg
      className="block h-[34px] w-full"
      viewBox="0 0 1200 34"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0,17 L500,17" className="fill-none stroke-border stroke-2" />
      <path d={bump} className="fill-none stroke-accent stroke-2 opacity-60" />
      <path d="M700,17 L1200,17" className="fill-none stroke-border stroke-2" />
    </svg>
  );
}
