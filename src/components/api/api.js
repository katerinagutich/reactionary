const FIREBASE_URL =
  'https://react-http-e108f-default-rtdb.europe-west1.firebasedatabase.app'

const DICTIONARY_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/'

export async function getWordList() {
  const response = await fetch(`${FIREBASE_URL}/word-list.json`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch the word list.')
  }

  const wordList = []

  for (const key in data) {
    const wordObj = {
      id: key,
      ...data[key],
    }

    wordList.push(wordObj)
  }

  return wordList
}

export async function getWordInfo(wordId) {
  const response = await fetch(`${DICTIONARY_URL}${wordId}`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch the word.')
  }

  const loadedWord = {
    id: wordId,
    ...data,
  }

  return loadedWord
}

export async function addWord(wordData) {
  const response = await fetch(`${FIREBASE_URL}/word-list.json`, {
    method: 'POST',
    body: JSON.stringify(wordData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not save the word.')
  }

  return null
}

export async function addWordExample(requestData) {
  const response = await fetch(
    `${FIREBASE_URL}/comments/${requestData.wordId}.json`,
    {
      method: 'POST',
      body: JSON.stringify(requestData.exampleData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not add an example.')
  }

  return { exampleId: data.name }
}

export async function getAllExamples(wordId) {
  const response = await fetch(`${FIREBASE_URL}/examples/${wordId}.json`)

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Could not get examples.')
  }

  const transformedExamples = []

  for (const key in data) {
    const exampleObj = {
      id: key,
      ...data[key],
    }

    transformedExamples.push(exampleObj)
  }

  return transformedExamples
}
