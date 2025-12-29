const Button = ({onClick, children, className, ...rest}) => {
  return (
    <button onClick={onClick}
    className={`bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-lg font-medium max-w-40 disabled:opacity-50 cursor-pointer  ${className}`}
    {...rest}
    >
        {children}
    </button>
  )
}
export default Button