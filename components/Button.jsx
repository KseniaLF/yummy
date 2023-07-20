export const Button = ({ children, className }) => {
  return (
    <button
      type="button"
      className={`text-white custom-rounded bg-second px-8 md:px-10 lg:px-14 py-4 md:py-5 lg:py-6 hover-bg ${className}`}
    >
      {children}
    </button>
  );
};
