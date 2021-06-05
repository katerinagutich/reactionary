import useInput from '../hooks/use-input'
import styles from './LoginForm.module.css'
import Button from './UI/Button'

const LoginForm = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim().length > 2)

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim().length > 5)

  let formIsValid
  nameIsValid && passwordIsValid ? (formIsValid = true) : (formIsValid = false)

  const onLoginHandler = (event) => {
    event.preventDefault()
    if (!formIsValid) return
    resetName()
    resetPassword()
    props.onSubmit()
  }

  return (
    <form onSubmit={onLoginHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name: </label>
        <input
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          id="name"
          type="text"
          className={nameHasError ? styles.invalid : ''}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="password">Your Password: </label>
        <input
          id="password"
          value={password}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          type="password"
          className={passwordHasError ? styles.invalid : ''}
        />
      </div>
      <Button disabled={!formIsValid} name="Let Me In" />
    </form>
  )
}

export default LoginForm
