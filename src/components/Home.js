import Card from './UI/Card'
import owl from '../assets/owl.png'
import styles from './Home.module.css'
import Button from './UI/Button'
import LoginForm from './LoginForm'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.welcome}>
        <picture>
          <source srcSet={owl} media="(min-width: 769px)" />
          <img src={owl} alt="Friendly Owl on a welcome page" />
        </picture>
        <Card className={styles.message}>
          Sorry, I'm not allowed to speak to unknown people. Please introduce
          yourself.
        </Card>
      </div>
      <Button name="Okay, I'm ready" />
      <LoginForm />
    </div>
  )
}

export default Home
