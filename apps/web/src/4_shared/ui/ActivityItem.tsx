type ActivityKind = "release" | "club" | "post" | "stat";
type ActivityTone = "neutral" | "warm" | "accent";

export type ActivityItemProps = {
  kind: ActivityKind;
  title: string;
  createdAt?: string; // ISO string
  subtitle?: string;
  description?: string;
  badge?: string;
  meta?: string;
  author?: string;
  time?: string;
  tone?: ActivityTone;
  className?: string;
};

const toneClassName: Record<ActivityTone, string> = {
  // background를 top-left에서 bottom-right 방향으로 그라데이션
  neutral: "bg-gradient-to-br from-[#0B0B10] via-[#14141B] to-[#1C1C25]",
  warm: "bg-gradient-to-br from-[#241312] via-[#2B1614] to-[#3A1D18]",
  accent: "bg-gradient-to-br from-[#ED1B25] via-[#D81A23] to-[#A61219]",
};

const Badge = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex w-fit items-center rounded-full bg-[#ED1B25] px-2 py-1 text-[10px] font-extrabold tracking-wide text-white">
      {text}
    </span>
  );
};

const formatRelativeTime = (createdAt: string) => {
  const createdMs = Date.parse(createdAt);
  if (Number.isNaN(createdMs)) return "";

  const diffMs = createdMs - Date.now();
  const diffMinutes = Math.round(diffMs / 60000);
  const absMinutes = Math.abs(diffMinutes);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  if (absMinutes < 60) return rtf.format(diffMinutes, "minute");

  const diffHours = Math.round(diffMinutes / 60);
  const absHours = Math.abs(diffHours);
  if (absHours < 24) return rtf.format(diffHours, "hour");

  const diffDays = Math.round(diffHours / 24);
  return rtf.format(diffDays, "day");
};

export const ActivityItem = ({
  kind,
  title,
  createdAt,
  subtitle,
  description,
  badge,
  meta,
  author,
  time,
  tone = "neutral",
  className = "",
}: ActivityItemProps) => {
  const relativeTime = createdAt ? formatRelativeTime(createdAt) : "";

  return (
    <article
      className={[
        "group relative h-full w-full overflow-hidden rounded-[18px] border border-solid border-[#2A2A3E] shadow-sm transition",
        "hover:border-[#ED1B25]/70",
        toneClassName[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#ED1B25]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative flex h-full flex-col p-6">
        {(time || relativeTime) && (
          <div className="absolute right-4 top-4 text-[11px] font-extrabold text-white/50">
            {time ?? relativeTime}
          </div>
        )}

        {kind === "release" && (
          <div className="mt-auto">
            {badge && <Badge text={badge} />}
            <h3 className="mt-3 text-xl font-[950] text-white">{title}</h3>
            {subtitle && <p className="mt-1 text-sm text-white/60">{subtitle}</p>}
          </div>
        )}

        {kind === "club" && (
          <>
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#ED1B25] text-white">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h7v-2.5c0-2.33-4.67-3.5-7-3.5Z" />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-extrabold tracking-[0.18em] text-white/60">
                  CLUB
                </p>
                <h3 className="mt-1 truncate text-lg font-extrabold text-white">{title}</h3>
              </div>

              <div className="relative ml-auto">
                <button className="absolute right-0 top-[85px] rounded-full bg-[#ED1B25] px-3 py-1.5 text-xs font-extrabold text-white hover:bg-[#ff2b34]">
                  Join
                </button>
              </div>
            </div>

            <div className="mt-auto">
              {description && <p className="text-sm leading-6 text-white/70">{description}</p>}
              {meta && <p className="mt-4 text-xs text-white/50">{meta}</p>}
            </div>
          </>
        )}

        {kind === "post" && (
          <>
            <div className="mb-4">
              {author && <p className="text-sm font-extrabold text-white">{author}</p>}
              {(time || relativeTime) && (
                <p className="mt-1 text-xs text-white/50">{time ?? relativeTime}</p>
              )}
            </div>

            <h3 className="text-lg font-extrabold text-white">{title}</h3>
            {description && <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>}

            <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-4 text-xs text-white/50">
              <span className="inline-flex items-center gap-1">
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden fill="currentColor">
                  <path d="M12 21s-7.4-4.35-9.33-8.36C.78 9.22 2.22 6.5 5.05 5.7c1.54-.45 3.2.07 4.2 1.24.99-1.17 2.65-1.69 4.2-1.24 2.83.8 4.27 3.52 2.38 6.94C19.4 16.65 12 21 12 21z" />
                </svg>
                24
              </span>
              <span className="inline-flex items-center gap-1">
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden fill="currentColor">
                  <path d="M21 6h-18c-1.1 0-2 .9-2 2v10l4-3h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
                </svg>
                8
              </span>
            </div>
          </>
        )}

        {kind === "stat" && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            {badge && (
              <div className="text-[12px] font-extrabold tracking-[0.16em] text-white/80">
                {badge}
              </div>
            )}
            <div className="mt-2 text-3xl font-[950] text-white">{title}</div>
            {subtitle && <div className="mt-2 text-sm font-extrabold text-white/90">{subtitle}</div>}
            {description && <div className="mt-3 text-xs text-white/70">{description}</div>}
          </div>
        )}
      </div>
    </article>
  );
};
