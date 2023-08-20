import { Skeleton } from "@/components/UI/skeleton";

export default function Loading() {
  return (
    <div className="pt-14 md:pt-36 lg:pt-44 container text-center md:text-start">
      <Skeleton className="w-[500px] h-[100px]"></Skeleton>

      <Skeleton className="w-[500px] h-[100px] mt-4" />

      <div className="relative inline-block mt-[330px] md:mt-8 lg:mt-12">
        <Skeleton
          type="Enter the text"
          placeholder="Beef"
          className=" h-[80px] w-[300px] md:w-[360px] lg:w-[500px] border-2 border-main outline-0 custom-rounded "
        ></Skeleton>
      </div>
    </div>
  );
}
