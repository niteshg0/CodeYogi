import FormikHOC from "./FormikHOC";

const Input = ({label, id, name, className, touched, error, ...rest}) => {

    let borderClass="border-gray-300 focus:border-indigo-500";

    if(error && touched){
        borderClass="border-red-500 ";
    }

  return (
    <div>
    {label && <label className="sr-only" htmlFor={id}>{label}</label>}
    <input  
    id={id}
    name={name}
    {...rest}
    className={"relative block w-full appearance-none rounded-md border-2 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-1 foucs:outline-none focus:ring-indigo-500 sm:tex-sm mt-4 " + borderClass+ " " + className}/>

    
    {(touched && error) && <p className="text-red-500">{error}</p>}
    </div>
  )
}
export default Input;

export const FormikInput = FormikHOC(Input);