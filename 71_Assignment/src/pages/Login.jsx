import { useFormik, withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import blue_bg from "../assets/Images/blue_bg.jpg";
import { FaAmazon } from "react-icons/fa";
import Button from "../components/Button";
import Input from "../components/Input";
// import { FormikInput } from "../components/Input";

const Login = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  isValid,
}) => {
  return (
    <div
      className="grow flex flex-col gap-6 justify-center items-center bg-blue-300  relative"
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
      <div className="bg-white  p-10 rounded shadow-lg flex flex-col justify-center gap-10">
        <h1 className="text-lg md:text-4xl font-bold ">
          Login to your Account
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <Input
            label="Email"
            id="email"
            placeholder="Email"
            name="email"
            type="email"
            required
            autoComplete="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email}
            touched={touched.email}
          />

          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
            placeholder="Password"
            className="border border-gray-300 p-2 rounded mt-6"
          />

          <Button
            disabled={!isValid}
            className="bg-blue-500 mt-4 disabled:bg-blue-300 disabled:cursor-not-allowed"
            type="submit"
          >
            Login
          </Button>
        </form>

        <div className="text-gray-600 flex justify-center items-center   ">
          <Link to="/forgot-password">
            <p>Forgot Password?</p>
          </Link>
        </div>
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
export default Login;

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


const handleLogin = (values) => {
  console.log("Logged In with ", values.email, values.password);
  // navigate("/");
};

const initialValues = {
  email: "",
  password: "",
};

//superHOC
const myHOC = withFormik({
  validateOnMount: true,
  validationSchema: schema,
  handleSubmit: handleLogin,
  initialValues: initialValues,
});

export const EasyLogin = myHOC(Login);
