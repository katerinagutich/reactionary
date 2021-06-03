import styles from './Button.module.css'

const Button = (props) => {
  return (
    <button className={styles.button} type={props.type}>
      {props.name}
    </button>
  )
}

export default Button
