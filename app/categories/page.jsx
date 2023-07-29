import { SectionTitleSkeleton } from "@/components/UI/SectionTitle";
import { Skeleton } from "@/components/UI/skeleton";

export default function Categories(props) {
  return (
    <div className="container">
      <SectionTitleSkeleton />

      <div className="flex gap-3 overflow-x-auto whitespace-nowrap pb-2">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((id) => (
          <Skeleton key={id} className="w-[100px] h-[30px] m-[8px]" />
        ))}
      </div>
    </div>
  );
}
