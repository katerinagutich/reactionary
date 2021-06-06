import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import owl from '../assets/owl_home.png'
import Button from '../components/UI/Button'
import Card from '../components/UI/Card'
import styles from './Home.module.css'

const wordOfTheDay = {
  word: 'library',
  transcription: '/ˈlaɪˌbrɛri/',
  definition:
    'A building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to.',
}

const Home = () => {
  return (
    <Fragment>
      <div className={styles['home-wrapper']}>
        <Card className={styles.message}>Welcome back, My Friend!</Card>
        <picture>
          <source srcSet={owl} media="(min-width: 769px)" />
          <img src={owl} alt="Friendly Owl on a home page" />
        </picture>
        <div className={styles['message-wrapper']}>
          <Card className={styles.message}>
            Look, what a nice word I picked for you today! You can add it to
            Your List.
          </Card>
          <Card>
            But if you don't like it, feel free to search your own words :)
          </Card>
        </div>
      </div>
      <div className={styles['home-word']}>
        <div>{wordOfTheDay.word}</div>
        <div>{wordOfTheDay.transcription}</div>
        <div>{wordOfTheDay.definition}</div>
        <Button name="Add to My List" />
      </div>
    </Fragment>
  )
}

export default Home
