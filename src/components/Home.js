import { useState } from 'react'

import Card from './UI/Card'
import owl from '../assets/owl.png'
import styles from './Home.module.css'
import Button from './UI/Button'
import LoginForm from './LoginForm'

const Home = () => {
  const [isReadyToLogin, setIsReadyToLogin] = useState(false)

  const onReadyHandler = () => {
    setIsReadyToLogin(true)
  }

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
      {isReadyToLogin ? (
        <Card className={styles.message}>
          I don't want anyone to steal your English Word List. Your name and
          password will help me to keep everything safe, I promise.
        </Card>
      ) : (
        <Button onClick={onReadyHandler} name="Okay, I'm ready" />
      )}
      {isReadyToLogin && <LoginForm />}
    </div>
  )
}

export default Home
