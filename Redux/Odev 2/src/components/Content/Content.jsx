import styles from './styles.module.css'
import Note from "../Note/Note"
import { useSelector } from 'react-redux'

function Content() {
  const allNotes = useSelector((state) => state.note.items)
  const filter = useSelector((state) => state.filter.value)

  return (
    <div className={styles.wrapper}>
      {allNotes.map((note, id) => {
        if(note.content.toLowerCase().includes(filter.toLowerCase()) || note.type === filter){
          return(<Note key={id} content={note.content} type={note.type}/>)
        }
      } )}

    </div>
  )
}

export default Content