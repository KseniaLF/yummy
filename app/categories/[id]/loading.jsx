import { Skeleton } from "@/components/UI/skeleton";

export default function Loading() {
  return (
    <div className="flex justify-center items-center space-x-4">
      <ul className="flex flex-wrap gap-4 justify-center mt-8 md:mt-12">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((recipe) => (
          <Skeleton className="relative" key={recipe.dish}>
            <Skeleton
              name={recipe.dish}
              className="w-[400px] h-[320px] object-cover rounded-lg"
            />
          </Skeleton>
        ))}
      </ul>
    </div>
  );
}
