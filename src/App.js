import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import WordList from './components/Words/WordList'
import { useSelector } from 'react-redux'

function App() {
  const isAuth = useSelector((state) => state.authentication.isAuthenticated)

  return (
    <div className="App">
      <Header />
      {!isAuth && (
        <Route path="/reactionary" exact>
          <Welcome />
        </Route>
      )}
      <Route path="/">
        <Redirect to="/reactionary" />
      </Route>
      {isAuth && (
        <Switch>
          <Route path="/reactionary" exact>
            <Home />
          </Route>
          <Route path="/word-list" exact>
            <WordList />
          </Route>
          <Route path="/word-list/:wordId">
            <WordList />
          </Route>
        </Switch>
      )}
    </div>
  )
}

export default App
