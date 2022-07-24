import useInput from "../hooks/useInput";
import Input from "../ui/Input";

const SimpleInput = (props) => {

  const {
    value: userInput,
    isValid: inputIsValid,
    isTouched: inputIsTouched,
    valueHandler: inputHandler,
    blurHandler: inputBlurHandler,
    reset: inputReset,
  } = useInput((input) => input.trim().length > 0);

  const {
    value: emailInput,
    isValid: emailIsValid,
    isTouched: inputEmailIsTouched,
    valueHandler: emailHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((emailInput) => emailInput.includes("@"));

  let formIsValid = false;
  if (inputIsValid && emailIsValid) formIsValid = true;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    inputReset();
    emailReset();
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        valueIsValid={emailIsValid}
        valueIsTouched={inputEmailIsTouched}
        id="email"
        type="email"
        title="Your Email"
        value={emailInput}
        valueHandler={emailHandler}
        blurHandler={emailBlurHandler}
        errorMessage="Email not valid"
      />

      <Input
        valueIsValid={inputIsValid}
        valueIsTouched={inputIsTouched}
        id="name"
        type="text"
        title="Your Name"
        value={userInput}
        valueHandler={inputHandler}
        blurHandler={inputBlurHandler}
        errorMessage="User Name must no be empty"
      />

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

