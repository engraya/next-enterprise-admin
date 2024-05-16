import styles from "../appComponents/Login/Login.module.css"
import LoginForm from "../appComponents/Login/LoginForm/LoginForm"

function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  )
}

export default LoginPage
