import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import WordList from './components/Words/WordList'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/reactionary" />
        </Route>
        <Route path="/reactionary" exact>
          <Home />
        </Route>
        <Route path="/reactionary/word-list" exact>
          <WordList />
        </Route>
        <Route path="/reactionary/word-list/:wordId">
          <WordList />
        </Route>
      </Switch>
    </div>
  )
}

export default App
