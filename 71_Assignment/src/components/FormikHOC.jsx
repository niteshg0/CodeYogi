import { useField } from "formik";

const FormikHOC = (IncomingComponent) => {
  function outgoingComponent({ name, ...rest }) {
    const [field, meta] = useField(name);

    const { value, onChange, onBlur } = field;
    const { error, touched } = meta;

    let borderClass = "border-gray-300 focus:border-indigo-500";

    if (error || touched) {
      borderClass = "border-red-500";
    }

    return (
      <IncomingComponent
        {...rest}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        touched={touched}
        borderClass={borderClass}
      />
    );
  }

  return outgoingComponent;
};
export default FormikHOC;
