import Card from '../UI/Card'
import styles from './WordList.module.css'
import Button from '../UI/Button'

const WordList = () => {
  const wordList = [
    {
      word: 'dictionary',
      transcription: '/ˈdɪkʃəneri/',
      definition:
        'A book or electronic resource that lists the words of a language (typically in alphabetical order) and gives their meaning, or gives the equivalent words in a different language, often also providing information about pronunciation, origin, and usage.',
    },
    {
      word: 'website',
      transcription: '/ˈwɛbsaɪt/',
      definition:
        'A set of related web pages located under a single domain name, typically produced by a single person or organization.',
    },
    {
      word: 'store',
      transcription: '/stɔr/',
      definition: 'Keep or accumulate (something) for future use.',
    },
    {
      word: 'book',
      transcription: '/bʊk/',
      definition:
        'Reserve (accommodations, a place, etc.); buy (a ticket) in advance.',
    },
  ]

  return (
    <div className={styles.list}>
      {wordList.map((item) => (
        <section className={styles.item}>
          <div className={styles.word}>{item.word}</div>
          <div className={styles.transcription}>{item.transcription}</div>
          <Button name="Learn more" />
        </section>
      ))}
    </div>
  )
}

export default WordList