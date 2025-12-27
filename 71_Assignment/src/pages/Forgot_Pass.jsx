import { useFormik, withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import blue_bg from "../assets/Images/blue_bg.jpg";
import { FaAmazon } from "react-icons/fa";
import Button from "../components/Button";
import Input from "../components/Input";

export const Forgot_Pass = ({handleBlur, handleChange, handleSubmit, values, errors, touched, isValid}) => {
  

  return (
    <div
      className="grow flex flex-col gap-6 justify-center items-center bg-blue-300 relative"
      style={{
        backgroundImage: `url(${blue_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link
        to={"/"}
        className=" absolute top-4 right-5 underline text-white text-lg"
      >
        Skip Auth
      </Link>
      <FaAmazon className="text-8xl text-white mb-6" />
      <div className="bg-white md:w-[400px]  p-10 rounded shadow-lg flex flex-col justify-center gap-10">
        <div>
          <h1 className="text-lg md:text-4xl font-bold ">Forgot Password</h1>
          <p className="text-gray-600 font-medium text-lg mt-2">
            First Verify your Account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          

          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder="Email"
            error={errors.email}
            touched={touched.email}
            autoComplete="email"
          />

          <Input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            placeholder="Password"
            error={errors.password}
            touched={touched.password}
            autoComplete="password"
          />

          {/* <button
            disabled={!isValid}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 disabled:bg-blue-300 disabled:cursor-not-allowed text-2xl font-semibold"
            type="submit"
          >
            Verify Account
          </button> */}

          <Button
            className="bg-blue-500 mt-4 disabled:bg-blue-300 disabled:cursor-not-allowed mt-4"
            type="submit"
            disabled={!isValid}
          >
            Verify Account
          </Button>
        </form>
      </div>

      <p className="text-lg text-white">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-bold text-lg">
          Register
        </Link>
      </p>
    </div>
  );
};

const schema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .max(50, "Too Long!")
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .trim()
      .min(8, "Too Short!")
      .max(20, "Too Long!")
      .required("Password is required"),
  });

  const handleLogin = (values) => {
    console.log("Logged In with ", values.email, values.password);
  };

  const initialValues={
    email:"",
    password:""
  }


const ForgotHOC= withFormik({
  intitalValues:initialValues,
  validationSchema:schema,
  handleSubmit:handleLogin,
  validateOnMount:true,
})

export default ForgotHOC(Forgot_Pass);


