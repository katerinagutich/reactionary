import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import useHttp from '../../hooks/use-http'
import { getWordList } from '../api/api'
import styles from './WordList.module.css'
import NoWordsFound from './NoWordsFound'

const WordList = () => {
  const { sendRequest, status, data: loadedWords, error } = useHttp(getWordList)

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  if (status === 'pending') {
    return <div>Pending...</div>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (status === 'completed' && (!loadedWords || loadedWords.length === 0)) {
    return <NoWordsFound />
  }

  return (
    <div className={styles.list}>
      {loadedWords.map((item) => (
        <section key={item.id} className={styles.item}>
          <div className={styles.word}>{item.word}</div>
          <div className={styles.transcription}>{item.transcription}</div>
          <Link className="button" to={`/word-list/${item.word}`}>
            Learn more
          </Link>
        </section>
      ))}
    </div>
  )
}

export default WordList
