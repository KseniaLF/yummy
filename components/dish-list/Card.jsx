import Image from "next/image";

export const Card = ({ name, image, ...rest }) => {
  return (
    <>
      <Image
        src={
          image
            ? image
            : "https://plus.unsplash.com/premium_photo-1661771822467-e516ca075314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        }
        alt="name"
        width={300}
        height={320}
        className="w-[100%] h-[100%] rounded-lg object-cover"
        {...rest}
      />
      <div className="absolute inset-x-5 bottom-5 rounded-lg text-center p-4 bg-white hover-bg">
        {name}
      </div>
    </>
  );
};
