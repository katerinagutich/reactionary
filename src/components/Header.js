import { useDispatch, useSelector } from 'react-redux'

import { authActions } from '../store/auth-slice'
import Button from './UI/Button'
import styles from './Header.module.css'

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.authentication.isAuthenticated)

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        Reactionary
      </a>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">Main Page</a>
            </li>
            <li>
              <a href="/">My List</a>
            </li>
            <li>
              <Button name="Let Me Out" type="button" onClick={logoutHandler} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
export default Header
