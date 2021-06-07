import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import WordList from './components/Words/WordList'
import { useSelector } from 'react-redux'
import WordItem from './components/Words/WordItem'

function App() {
  const isAuth = useSelector((state) => state.authentication.isAuthenticated)

  return (
    <div className="App">
      <Header />
      {!isAuth && (
        <Route path="/main-page" exact>
          <Welcome />
        </Route>
      )}
      <Route path="/" exact>
        <Redirect to="/main-page" />
      </Route>
      {isAuth && (
        <Switch>
          <Route path="/main-page" exact>
            <Home />
          </Route>
          <Route path="/word-list" exact>
            <WordList />
          </Route>
          <Route path="/word-list/:wordId">
            <WordItem />
          </Route>
        </Switch>
      )}
    </div>
  )
}

export default App
