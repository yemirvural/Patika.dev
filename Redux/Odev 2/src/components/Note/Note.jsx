import PropTypes from 'prop-types';
import styles from './styles.module.css'

function Note({ content, type }) {

  return (
    <>
      <div className={styles.card} style={{backgroundColor: type}} >
        <p>{content}</p>
      </div>
    </>
  )
}  
Note.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Note