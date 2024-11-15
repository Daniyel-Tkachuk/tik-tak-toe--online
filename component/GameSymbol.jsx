import s from "./game.module.css";
import {SYMBOL_O, SYMBOL_X} from "../constants/constants";


export const GameSymbol = ({symbol}) => {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_X) return s["symbol--x"]
    if (symbol === SYMBOL_O) return s["symbol--o"]
    return ""
  }

  return (
    <span className={`${s.symbol} ${getSymbolClassName(symbol)}`}>{symbol}</span>
  )
}