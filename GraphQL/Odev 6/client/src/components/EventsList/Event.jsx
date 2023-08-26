import { useEffect } from 'react';
import { GET_EVENTS, EVENTS_SUBSCRIPTION } from './queries';
import styles from './styles.module.css'
import { useQuery } from '@apollo/client';
import { Link } from "react-router-dom";

function Event() {
  const { loading, error, data, subscribeToMore } = useQuery(GET_EVENTS);

  useEffect(() => {
    subscribeToMore({
      document: EVENTS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if(!subscriptionData.data) return prev;
        
        return {
          events: [
            subscriptionData.data.eventCreated,
            ...prev.events
          ]
        }
      }
    })
  }, [subscribeToMore])

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

export default Event