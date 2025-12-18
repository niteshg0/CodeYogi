import error from '../assets/Images/Error.png';

const Error = ({msg = "An unexpected error occurred"}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-10 grow'>
        <img src={error} alt="Error" className="w-auto md:w-72" />
        <h2 className='text-center text-primary-dark text-2xl font-bold'>{msg}</h2>
    </div>
  )
}
export default Error