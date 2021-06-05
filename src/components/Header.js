import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

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
      <Link to="/reactionary" className={styles.logo}>
        Reactionary
      </Link>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <NavLink to="/reactionary" activeClassName={styles.active}>
                Main Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/word-list" activeClassName={styles.active}>
                My List
              </NavLink>
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
