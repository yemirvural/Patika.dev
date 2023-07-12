import PropTypes from 'prop-types';
import styles from './styles.module.css'
import { useDispatch } from 'react-redux';
import { deleteNoteAsync, editNoteAsync } from '../../features/noteSlice';
import { LiaEdit, LiaCheckSolid } from 'react-icons/lia';
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';

function Note({ content, type, noteId }) {
const [isDisabled, editIsDisabled] = useState(true);
const [changedContent, setChangedContent] = useState(content);

const dispatch = useDispatch();

const deleteHandler = async(e) => {
  e.preventDefault()
  await dispatch(deleteNoteAsync(noteId))
}
const editHandler = async () => {
  editIsDisabled(!isDisabled);
  console.log({ noteId, changedContent });
  if (!isDisabled) await dispatch(editNoteAsync({noteId, changedContent}));
};

  return (
    <>
      <div className={styles.card} style={{backgroundColor: type}} >
        <button onClick={editHandler} className={styles.edit}>{isDisabled ? <LiaEdit size={20}/> : <LiaCheckSolid size={20}/>}</button>
        <TextareaAutosize value={changedContent} onChange={(e) => setChangedContent(e.target.value)} disabled={isDisabled} maxLength={1500}>{content}</TextareaAutosize>
        <button onClick={deleteHandler} className={styles.delete}>X</button>
      </div>
    </>
  )
}  

Note.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  noteId: PropTypes.string.isRequired
};

export default Note