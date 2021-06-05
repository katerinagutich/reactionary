import { useState } from 'react'
import { useDispatch } from 'react-redux'

import owl from '../assets/owl.png'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'
import LoginForm from '../components/LoginForm'
import { authActions } from '../store/auth-slice'
import styles from './Welcome.module.css'

const Welcome = () => {
  const [isReadyToLogin, setIsReadyToLogin] = useState(false)
  const dispatch = useDispatch()

  const onReadyHandler = () => {
    setIsReadyToLogin(true)
  }

  const submitHandler = () => {
    dispatch(authActions.login())
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
        <Button
          onClick={onReadyHandler}
          name="Okay, I'm ready"
          className={styles.button}
        />
      )}
      {isReadyToLogin && <LoginForm onSubmit={submitHandler} />}
    </div>
  )
}

export default Welcome
