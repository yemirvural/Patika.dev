import styles from './styles.module.css'
import Event from './Event'

function EventsList() {
  return (
    <div className={styles.wrapper}>
      <Event />
    </div>
  )
}

export default EventsList