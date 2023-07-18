export const Button = ({ children, className }) => {
  return (
    <button
      type="button"
      className={`text-base custom-rounded bg-second px-12 lg:px-14 py-4 md:py-5 lg:py-6 hover:bg-main transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};
