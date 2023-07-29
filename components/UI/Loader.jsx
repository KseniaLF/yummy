import { Skeleton } from "./skeleton";

export const Loader = () => {
  return (
    <div className="container text-center mt-[100px]">
      <Skeleton className="w-[100%] h-[300px]" />
    </div>
  );
};
