import { ActivityItem } from "@/4_shared/ui/ActivityItem";

export const Feed = () => {
  const items = [
    {
      id: "release-1",
      createdAt: "2025-12-26T12:00:00.000Z",
      kind: "release" as const,
      badge: "NEW RELEASE",
      title: "Midnight Drive",
      subtitle: "Alex M.",
      className: "md:col-span-7 md:row-span-2",
    },
    {
      id: "club-1",
      createdAt: "2025-12-26T11:20:00.000Z",
      kind: "club" as const,
      tone: "warm" as const,
      title: "Indie Lovers",
      description: "Discover underground indie gems together",
      meta: "1,247 members",
      className: "md:col-span-5 md:row-span-1",
    },
    {
      id: "release-2",
      createdAt: "2025-12-26T10:10:00.000Z",
      kind: "release" as const,
      badge: "TRENDING",
      title: "Tokyo Nights",
      subtitle: "Jessica W.",
      className: "md:col-span-5 md:row-span-3",
    },
    {
      id: "post-1",
      createdAt: "2025-12-26T09:40:00.000Z",
      kind: "post" as const,
      author: "Michael T.",
      title: "Just discovered an amazing lo-fi artist from Seoul",
      description:
        "The latest EP has been on repeat all week. Production is insane and the vibes are immaculate.",
      className: "md:col-span-7 md:row-span-3",
    },
    {
      id: "stat-1",
      createdAt: "2025-12-26T08:30:00.000Z",
      kind: "stat" as const,
      tone: "accent" as const,
      badge: "TOP 10",
      title: "A+",
      subtitle: "This week's most played",
      className: "md:col-span-4 md:row-span-2",
    },
  ].sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

  return (
    <>
      <div className="w-full p-8">
        <header className="mb-6">
          <h1 className="text-4xl font-[950] text-white">Recent...</h1>
          <p className="mt-2 text-sm text-white/60">
            Latest activity from friends &amp; clubs
          </p>
        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-flow-dense md:grid-cols-12 md:auto-rows-[160px] md:gap-6">
          {items.map((item) => (
            <ActivityItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
