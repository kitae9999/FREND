import { ActivityItem } from "@/4_shared/ui/ActivityItem";

export const Feed = () => {
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
          <ActivityItem
            kind="release"
            badge="NEW RELEASE"
            title="Midnight Drive"
            subtitle="Alex M."
            className="md:col-span-7 md:row-span-2"
          />

          <ActivityItem
            kind="club"
            tone="warm"
            title="Indie Lovers"
            description="Discover underground indie gems together"
            meta="1,247 members"
            className="md:col-span-5 md:row-span-1"
          />

          <ActivityItem
            kind="release"
            badge="TRENDING"
            title="Tokyo Nights"
            subtitle="Jessica W."
            className="md:col-span-5 md:row-span-3"
          />

          <ActivityItem
            kind="post"
            author="Michael T."
            time="2 hours ago"
            title="Just discovered an amazing lo-fi artist from Seoul"
            description="The latest EP has been on repeat all week. Production is insane and the vibes are immaculate."
            className="md:col-span-7 md:row-span-3"
          />

          <ActivityItem
            kind="release"
            badge="HOT"
            title="Neon Dreams"
            subtitle="David Chen"
            className="md:col-span-4 md:row-span-2"
          />

          <ActivityItem
            kind="stat"
            tone="accent"
            title="This week's most played tracks"
            subtitle="HOT"
            className="md:col-span-3 md:row-span-2"
          />

          <ActivityItem
            kind="club"
            tone="warm"
            title="90s Hip-Hop"
            description="Golden era classics"
            meta="892 members"
            className="md:col-span-5 md:row-span-2"
          />

          <ActivityItem
            kind="post"
            author="Sarah K."
            time="5 hours ago"
            title="Created my first playlist with 50+ underground artists"
            description="Took me 3 weeks to curate this. Perfect for late night coding sessions."
            className="md:col-span-6 md:row-span-2"
          />

          <ActivityItem
            kind="release"
            badge="CHILL"
            title="Sunset Vibes"
            subtitle="Emma L."
            className="md:col-span-3 md:row-span-2"
          />

          <ActivityItem
            kind="release"
            badge="SYNTH"
            title="Electric Dreams"
            subtitle="James P."
            className="md:col-span-3 md:row-span-2"
          />
        </div>
      </div>
    </>
  );
};
