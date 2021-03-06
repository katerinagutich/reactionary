import styles from './Button.module.css'

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${props.className}`}
      type={props.type}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  )
}

export default Button
