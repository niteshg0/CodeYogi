import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import blue_bg from "../assets/Images/blue_bg.jpg";
import { FaAmazon } from "react-icons/fa";

const schema = Yup.object().shape({
    email: Yup.string()
      .max(50, "Too Long!")
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(20, "Too Long!")
      .required("Password is required"),
  });

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = (values) => {
    console.log("Logged In with ", values.email, values.password);
    navigate('/');
  };
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    isValid,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    }, 

    onSubmit: handleLogin,
    validationSchema: schema,
  });

  return (
    <div className="grow flex flex-col gap-6 justify-center items-center bg-blue-300"
    style={{backgroundImage: `url(${blue_bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <FaAmazon className="text-8xl text-white mb-6" />
      <div className="bg-white  p-10 rounded shadow-lg flex flex-col justify-center gap-10">
        <h1 className="text-lg md:text-4xl font-bold ">Login to your Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder="Email"
            className="border border-gray-300 p-2 rounded"
          />
          {touched.email && errors.email && (
            <p className="text-red-500">{errors.email}</p>
          )}

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
            className="border border-gray-300 p-2 rounded mt-6"
          />

          {touched.password && errors.password && (
            <p className="text-red-500">{errors.password}</p>
          )}

          <button
            disabled={!isValid}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 disabled:bg-blue-300 disabled:cursor-not-allowed text-2xl font-semibold"
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="text-gray-600 flex justify-center items-center   ">
          <Link to="/forgot-password">
            <p>Forgot Password?</p>
          </Link>
        </div>
      </div>

      <p className="text-lg text-white">Don't have an account? <Link to="/register" className="text-blue-600 font-bold text-lg">Register</Link></p>
    </div>
  );
};
export default Login;
