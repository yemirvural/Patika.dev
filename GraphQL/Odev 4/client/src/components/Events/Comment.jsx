import { GET_EVENTS } from './queries';
import styles from './styles.module.css'
import { useQuery } from '@apollo/client';
import { Link } from "react-router-dom";

function Comment() {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.events.map((event, key) => (
    <Link key={key} to={`/events/${event.id}`}>
      <div className={styles.commentWrapper}>
        <div className={styles.title}>
          {event.title}
          <span className={styles.date}>
            {event.date}
          </span>
        </div>
        <div className={styles.description}>
          {event.desc }
        </div>
      </div>
    </Link>
  ));




}

export default Comment