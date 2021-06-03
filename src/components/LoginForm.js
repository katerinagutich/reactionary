import styles from './LoginForm.module.css'
import Button from './UI/Button'

const LoginForm = () => {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor="name">Your Name: </label>
        <input id="name" type="text" />
      </div>
      <div className={styles.control}>
        <label>Your Password: </label>
        <input type="password" />
      </div>
      <Button name="Let Me In" />
    </form>
  )
}

export default LoginForm
