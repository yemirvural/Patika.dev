import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card"
import styles from './styles.module.css'
import { GrPowerReset } from "react-icons/gr";
import { useEffect } from "react"
import { prepareCards, resetGame } from "../../features/cardSlice"

function Playground() {
  const card = useSelector((state) => state.card.items);
  const score = useSelector((state) => state.card.score);
  const completed = useSelector((state) => state.card.completed);
  const dispatch = useDispatch();
  const frameworks = ['angular2','vue','react','grunt','phantomjs','ember','babel','ionic','gulp','meteor','yeoman','yarn','nodejs','bower','browserify'];

  useEffect(() => {
    frameworks.map(el => {
      dispatch(prepareCards(el))
    })
  }, [])

  const buttonHandler = () => {
    dispatch(resetGame())
    frameworks.concat(frameworks).map(el => {
      dispatch(prepareCards(el))
    })
  }

  return (
    <div className={styles.div}>
      <div className={styles.score}>
        { completed.length === frameworks.length ? `GAME OVER! Your Score: ${score}` : `SCORE: ${score}` }
        <button className={styles.reset} onClick={buttonHandler}>{<GrPowerReset size={25}/>}</button>
      </div>
      <div className={styles.playground}> 
      {
        card.map((el, key) => {
          return(<Card key={key} data={el} />)
        })
      }
      </div>
    </div>
  )
}

export default Playground