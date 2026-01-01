const Button = ({ children, className, ...rest}) => {
  return (
    <button 
    className={`bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-lg font-medium max-w-40 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed  ${className}`}
    {...rest}
    >
        {children}
    </button>
  )
}
export default Button