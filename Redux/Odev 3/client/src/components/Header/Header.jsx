import styles from './styles.module.css'

function Header() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.profileImage}>
            <img src="/billgates.jpg" alt="billgates"/>
            <span>{"Spend Bill Gates' Money"}</span>
        </div>
    </div>
  )
}

export default Header