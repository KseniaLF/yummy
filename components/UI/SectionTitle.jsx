export const SectionTitle = ({ children, ...rest }) => {
  return (
    <h1
      className="my-12 md:my-16 lg:my-24 text-3xl md:text-4xl lg:text-5xl"
      {...rest}
    >
      {children}
    </h1>
  );
};
