import { Link } from 'react-router-dom'

import Card from '../UI/Card'
import owl from '../../assets/owl_nowords.png'
import styles from './NoWordsFound.module.css'

const NoWordsFound = () => {
  return (
    <div className={styles.wrapper}>
      <Card>Looks like you haven't added any words yet.</Card>
      <picture>
        <source srcSet={owl} media="(min-width: 769px)" />
        <img
          src={owl}
          alt="Friendly Owl on a page of the word you selected to learn"
        />
      </picture>
      <Link className={`button ${styles.button}`} to={'/reactionary'}>
        Let's get started
      </Link>
    </div>
  )
}

export default NoWordsFound
