import { cards } from "../../../lib/data"
import Card from "../appComponents/Dashboard/Card/Card"
import Chart from "../appComponents/Dashboard/Chart/Chart"
import styles from "../appComponents/Dashboard/Dashboard.module.css"
import RightBar from "../appComponents/Dashboard/RightBar/RightBar"
import Transactions from "../appComponents/Dashboard/Transactions/Transactions"

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  )
}

export default DashboardPage
