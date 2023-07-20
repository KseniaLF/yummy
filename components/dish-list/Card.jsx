import Image from "next/image";

export const Card = ({ name, image, ...rest }) => {
  return (
    <>
      <Image
        src="/i.jpg"
        alt="name"
        width={300}
        height={320}
        className="w-[100%] rounded-lg object-cover "
        {...rest}
      />
      <div className="absolute inset-x-5 bottom-5 rounded-lg text-center p-4 bg-white hover-bg">
        {name}
      </div>
    </>
  );
};
