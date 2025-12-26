import { ActivityItem } from "@/4_shared/ui/ActivityItem";

export const Feed = () => {
  return (
    <>
      <div className="flex-col w-full p-8">
        <p className="text-white mb-6">최근 활동</p>
        <div>
          <ActivityItem />
          <ActivityItem />
          <ActivityItem />
          <ActivityItem />
        </div>
      </div>
    </>
  );
};
