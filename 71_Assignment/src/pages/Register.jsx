import { useFormik, withFormik } from "formik";
import blue_bg from "../assets/Images/blue_bg.jpg";
import * as Yup from "yup";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import { FaAmazon } from "react-icons/fa";
import Button from "../components/Button";
import Input from "../components/Input";

export const Register = ({
  handleSubmit,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  isValid,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${blue_bg})` }}
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center gap-10 relative"
    >
      <Link
        to={"/"}
        className=" absolute top-4 right-5 underline text-white text-lg"
      >
        Skip Auth
      </Link>
      <FaAmazon className="text-8xl text-white mb-6" />
      <div className="bg-white p-10 rounded shadow-lg w-full max-w-md ">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Register an Account
        </h1>

        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
          <Input
            label="firstName"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            values={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.firstName}
            touched={touched.firstName}
            required
            autoComplete="firstName"
             />

          <Input
            label="lastName"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            values={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.lastName}
            touched={touched.lastName}
            required
            autoComplete="lastName"
          />

          <Input
            label="email"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            values={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            required
            autoComplete="email"
          />

          <Input
            label="password"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            values={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
            required
            autoComplete="new-password"
          />

          <Input
            label="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            values={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
            required
            autoComplete="confirm-password"
          />

          <Button
            type="submit"
            disabled={!isValid}
            className="bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            Register
          </Button>
        </form>
      </div>

      <div>
        <h1 className="text-white text-lg  ">
          Already have an account?
          <Link to="/login" className="text-blue-300 underline ml-2 font-bold">
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
};

const schema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("First Name is required"),

  lastName: Yup.string()
    .trim()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Last Name is required"),

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

  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const handleRegister = (values) => {
  console.log(
    "Registered with ",
    values.firstName,
    values.lastName,
    values.email,
    values.password
  );
};

const registerHOC = withFormik({
  handleSubmit: handleRegister,
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
});

const easyRegister = registerHOC(Register);

export default easyRegister;
