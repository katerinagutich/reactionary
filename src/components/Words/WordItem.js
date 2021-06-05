import styles from './WordItem.module.css'
import owl from '../../assets/owl_word_item.png'
import Card from '../UI/Card'

const word = {
  word: 'dictionary',
  transcription: '/ˈdɪkʃəneri/',
  definition:
    'A book or electronic resource that lists the words of a language (typically in alphabetical order) and gives their meaning, or gives the equivalent words in a different language, often also providing information about pronunciation, origin, and usage.',
}

const WordItem = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles['word-section']}>
        <div className={styles.word}>{word.word}</div>
        <div className={styles.transcription}>{word.transcription}</div>
      </section>
      <div className={styles['definition-section']}>
        <Card className={styles.definition}>{word.definition}</Card>
        <picture>
          <source srcSet={owl} media="(min-width: 769px)" />
          <img
            src={owl}
            alt="Friendly Owl on a page of the word you selected to learn"
          />
        </picture>
      </div>
    </div>
  )
}

export default WordItem
