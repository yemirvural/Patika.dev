import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setProcess, newProcess, addCompleted } from '../../features/cardSlice';

function Card({ data }) {
  const process = useSelector((state) => state.card.process)
  const completed = useSelector((state) => state.card.completed)
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsOpen(process.includes(data) || completed.includes(data.name));
    
    if (process.length === 2 && process.includes(data)) {
      const timer = setTimeout(() => {
        if (process[0].name === process[1].name) {
          dispatch(addCompleted(data.name));
        } 
        if (process[0].name !== process[1].name) {
          dispatch(newProcess());
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [data, process, completed, dispatch]);

  return (
    <div className={`${styles.card} ${isOpen ? styles.opened : ""} ${completed.includes(data.name) ? styles.matched : ''}`}>
      <button onClick={() => dispatch(setProcess(data))} disabled={isOpen || process.length === 2} className={isOpen ? styles.back : styles.front}>
        {isOpen ? <img src={`/${data.name}.png`} alt="card_image" /> : "?"}
      </button>
    </div>

  )
}
Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card