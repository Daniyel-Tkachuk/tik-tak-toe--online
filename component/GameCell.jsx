import s from './game.module.css'
import {GameSymbol} from "./GameSymbol";

export const GameCell = ({symbol, isWinner, onClick}) => {

  return (
    <button className={`${s.cell} ${isWinner ? s["cell--win"] : ""}`} onClick={onClick}>
      <GameSymbol symbol={symbol}/>
    </button>
  )
}