const Button = ({ children, onClick, className, ...rest }) => {
  return (
    <button
      className={
        " text-sm md:text-lg font-medium py-1 px-2 md:py-3 md:px-8 text-white rounded cursor-pointer " +
        className
      }
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
