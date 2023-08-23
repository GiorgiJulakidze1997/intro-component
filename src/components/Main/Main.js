import "./Main.css";
import { useForm } from "react-hook-form";

export default function Main() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("render");
  };

  console.log(watch("firstName"));

  return (
    <div className="mainBox">
      <div className="priceDescribe">
        <div className="priceDescribeBoxTwo">
          <span className="priceDescribeFirstSpan">Try it free 7 days</span>
          <span className="priceDescribeSecondSpan">
            then $20/mo. thereafter
          </span>
        </div>
      </div>
      <form className="inputsForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="inputBox"
          placeholder="First Name"
          {...register("firstName", {
            required: { value: true, message: "First Name cannot be empty" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Please enter only Latin letters",
            },
          })}
        />
        {errors.firstName && (
          <div className="errorsBox">
            <p>{errors.firstName.message}</p>
          </div>
        )}

        <input
          className="inputBox"
          placeholder="Last Name"
          {...register("lastName", {
            required: { value: true, message: "Last Name cannot be empty" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Please enter only Latin letters",
            },
          })}
        />
        {errors.lastName && (
          <div className="errorsBox">
            <p>{errors.lastName.message}</p>
          </div>
        )}
        <input
          className="inputBox"
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: {
              value: true,
              message: "Email cannot be empty",
            },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/,
              message: "Does not match email input form",
            },
          })}
        />
        {errors.email && (
          <div className="errorsBox">
            <p>{errors.email.message}</p>
          </div>
        )}
        <input
          className="inputBox"
          placeholder="Password"
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password field cannot be empty",
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
          <div className="errorsBox">
            <p>{errors.password.message}</p>
          </div>
        )}
        <button className="button" type="submit">
          CLAIM YOUR FREE TRIAL
        </button>
        <div className="lastInfoBox">
          <span className="lastInfoFirstSpan">
            By clicking the button, you are agreeing to our
          </span>
          <span className="lastInfoSecondSpan">Terms and Services</span>
        </div>
      </form>
    </div>
  );
}
