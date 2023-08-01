import { Skeleton } from "./skeleton";

export const SectionTitle = ({ children, ...rest }) => {
  return (
    <h1
      className="uppercase my-12 md:my-16 lg:my-20 text-3xl md:text-4xl lg:text-5xl"
      {...rest}
    >
      {children}
    </h1>
  );
};

export const SectionTitleSkeleton = () => {
  return <Skeleton className="my-12 md:my-16 lg:my-20 w-[250px] h-[50px]" />;
};
