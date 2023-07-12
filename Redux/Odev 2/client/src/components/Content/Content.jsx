import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css'
import Note from "../Note/Note"
import { getNoteAsync, selecFilteredNotes } from '../../features/noteSlice';
import { useEffect } from 'react';

function Content() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoteAsync())
  }, [dispatch])

  const allNotes = useSelector(selecFilteredNotes);

  return (
    <div className={styles.wrapper}>
      {allNotes.map((note) => {
        return (
          <Note key={note.id} content={note.content} type={note.type} noteId={note.id} />
        )
      })}
    </div>
  )
}

export default Content