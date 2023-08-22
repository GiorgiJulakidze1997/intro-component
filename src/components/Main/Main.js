import "./Main.css";
import { useForm } from "react-hook-form";

export default function Main() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  console.log(watch("firstName"));
  console.log("errors: ", errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="First Name"
          {...register("firstName", {
            required: { value: true, message: "carieli ar unda iyos" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "mxolod latinuri asoebi",
            },
          })}
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}

        <input
          placeholder="Last Name"
          {...register("lastName", {
            required: { value: true, message: "გვარი: ცარიელია" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "გვარი: მხოლოდ ლათინური ასოები",
            },
          })}
        />
        {errors.lastName && (
          <p style={{ color: "red" }}>{errors.lastName.message}</p>
        )}
        <input
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: {
              value: true,
              message: "email: ცარიელია",
            },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/,
              message: "არ ემთხვევა email-ის დაწერის ფორმას",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "password field is empty",
            },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, and one number ",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
      </form>
    </div>
  );
}
