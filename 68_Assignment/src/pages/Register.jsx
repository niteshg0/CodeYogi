import { useFormik } from "formik";
import blue_bg from "../assets/Images/blue_bg.jpg";
import * as Yup from "yup";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import { FaAmazon } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate();

    const schema = Yup.object().shape({
        firstName: Yup.string()
        .min(2, "Too Short!")
        .max(30, "Too Long!")
        .required("First Name is required"),

        lastName: Yup.string()
        .min(2, "Too Short!")
        .max(30, "Too Long!")
        .required("Last Name is required"),

        email: Yup.string()
        .max(50, "Too Long!")
        .email("Invalid email")
        .required("Email is required"),

        password: Yup.string()
        .min(8, "Too Short!")
        .max(20, "Too Long!")
        .required("Password is required"),

        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    })

    const handleResgister = (values) => {
        console.log("Registered with ", values.firstName, values.lastName, values.email, values.password);
        navigate('/');

    }

    const {handleSubmit, handleChange, handleBlur, values, errors, touched, isValid}= useFormik({
        initialValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            confirmPassword: "",
        },

        onSubmit: handleResgister,
        validationSchema: schema,
    })
  return (
    <div style={{backgroundImage: `url(${blue_bg})`}} className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center gap-10">
        <FaAmazon className="text-8xl text-white mb-6" />
        <div className="bg-white p-10 rounded shadow-lg w-full max-w-md ">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Register an Account</h1>

        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
            <label htmlFor="firstName" className="sr-only"> First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="First Name" className="border border-gray-300 p-2 rounded"
            values={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            />
            {touched.firstName && errors.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
            )}

            <label htmlFor="lastName" className="sr-only"> Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last Name"
            values={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border border-gray-300 p-2 rounded mt-6" />
            {touched.lastName && errors.lastName && (
                <p className="text-red-500">{errors.lastName}</p>
            )}

            <label htmlFor="email" className="sr-only"> Email</label>
            <input type="email" id="email" name="email" placeholder="Email" className="border border-gray-300 p-2 rounded mt-6"
            values={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            />
            {touched.email && errors.email && (
                <p className="text-red-500">{errors.email}</p>
            )}

            <label htmlFor="password" className="sr-only"> Password</label>
            <input type="password" id="password" name="password" placeholder="Password" className="border border-gray-300 p-2 rounded mt-6"
            values={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            />
            {touched.password && errors.password && (
                <p className="text-red-500">{errors.password}</p>
            )}

            <label htmlFor="confirmPassword" className="sr-only"> Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" className="border border-gray-300 p-2 rounded mt-6"
            values={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            />
            {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
            )}

            <button type="submit" disabled={!isValid} className="bg-blue-500 text-white p-2 rounded disabled:opacity-50 mt-6">Register</button>
        </form>
        </div>

        <div>
        <h1 className="text-white text-lg  ">Already have an account?
            <Link to="/login" className="text-blue-300 underline ml-2 font-bold">Login</Link>
        </h1>

        </div>
    </div>
  )
}
export default Register