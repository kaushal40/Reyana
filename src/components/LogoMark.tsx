'use client';

/**
 * LogoMark — animated 3-petal botanical SVG.
 *
 * Animation tells the story of two sisters:
 *   1. Left wing (Shreya) + Right wing (Krina) slide in simultaneously from opposite sides
 *   2. Center leaf grows upward from their meeting point
 *   3. Stem roots downward
 */

interface LogoMarkProps {
  size?: number;
  className?: string;
  /** extra delay in ms before the whole animation starts */
  delay?: number;
}

export function LogoMark({ size = 48, className = 'text-indigo', delay = 0 }: LogoMarkProps) {
  const anim = (name: string, dur: number, extraDelay: number): React.CSSProperties => ({
    opacity: 0,
    animation: `${name} ${dur}ms ease-out ${delay + extraDelay}ms forwards`,
  });

  return (
    <svg
      viewBox="0 0 100 108"
      width={Math.round(size * 0.93)}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ── Left wing — Shreya ──────────────────────────── */}
      <g style={anim('logoRevealLeft', 650, 0)}>
        <path
          d="M47 58 C40 55 26 52 12 56 C5 59 4 66 7 70 C10 74 24 72 37 65 C43 61 47 58 47 58 Z"
          stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
        />
        <path
          d="M45 59 C38 56 24 54 14 58"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        />
      </g>

      {/* ── Right wing — Krina ──────────────────────────── */}
      <g style={anim('logoRevealRight', 650, 0)}>
        <path
          d="M53 58 C60 55 74 52 88 56 C95 59 96 66 93 70 C90 74 76 72 63 65 C57 61 53 58 53 58 Z"
          stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
        />
        <path
          d="M55 59 C62 56 76 54 86 58"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        />
      </g>

      {/* ── Center leaf — their union reaching upward ────── */}
      <g style={anim('logoRevealUp', 700, 580)}>
        <path
          d="M50 57 C46 49 39 34 41 20 C42 10 47 5 50 5 C53 5 58 10 59 20 C61 34 54 49 50 57 Z"
          stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
        />
        <path
          d="M50 51 C47 43 44 31 46 19 C47 12 50 7 50 7"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        />
      </g>

      {/* ── Stem — roots downward ───────────────────────── */}
      <g style={anim('logoRevealDown', 500, 1100)}>
        <path
          d="M50 59 L50 90"
          stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"
        />
        <path
          d="M43 86 C46 94 54 94 57 86"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
