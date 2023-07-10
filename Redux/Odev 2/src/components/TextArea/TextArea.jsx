import { useState } from 'react';
import styles from './styles.module.css'
import { BsCheck2 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../features/noteSlice'


function TextArea() {
  const [note, setNote] = useState("")
  const [noteType, setNoteType] = useState("")

  const dispatch = useDispatch()
  const allNotes = useSelector((state) => state.note)
  
  const submitHandler = (e) => {
    e.preventDefault()
    if(note && noteType){
      dispatch(addNote({type: noteType, content: note}))
      setNote('')
    }
    if(!noteType) alert('Please select a color.')
    if(!note) alert('Please enter a valid note.')
  }

  console.log(allNotes)
  return (
    <div className={styles.div}>
        <textarea 
          placeholder='Enter your note here..'
          className={styles.input}
          name="postContent"
          maxLength={1500}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        
        <form onSubmit={submitHandler} onChange={(e) => setNoteType(e.target.value)} className={styles.colorPalette}>
          <div className={styles.colors}>
            <input type="radio" id="pink" name="colorPalette" value="pink" checked={noteType === 'pink'} />
            <label className={styles.pink} htmlFor="pink">{<BsCheck2 color='white'/>}</label>

            <input type="radio" id="purple" name="colorPalette" value="purple" checked={noteType === 'purple'} />
            <label className={styles.purple} htmlFor="purple">{<BsCheck2 color='white'/>}</label>

            <input type="radio" id="yellow" name="colorPalette" value="yellow" checked={noteType === 'yellow'} />
            <label className={styles.yellow} htmlFor="yellow">{<BsCheck2 color='white'/>}</label>

            <input type="radio" id="blue" name="colorPalette" value="blue" checked={noteType === 'blue'} />
            <label className={styles.blue} htmlFor="blue">{<BsCheck2 color='white'/>}</label>

            <input type="radio" id="green" name="colorPalette" value="green" checked={noteType === 'green'} />
            <label className={styles.green} htmlFor="green">{<BsCheck2 color='white'/>}</label>
          </div>

          <button type='submit'>ADD</button>
        </form>

    </div>
  )
}

export default TextArea