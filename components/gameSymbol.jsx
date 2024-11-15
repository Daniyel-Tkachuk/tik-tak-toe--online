import styles from "../styles/game.module.css";
import {SYMBOL_O, SYMBOL_X} from "../common/constants";

export const GameSymbol = ({ symbol }) => {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_X) return styles["symbol--x"];
    if (symbol === SYMBOL_O) return styles["symbol--o"];
    return "";
  };

  return (
    <span className={`${styles["symbol"]} ${getSymbolClassName(symbol)}`}>
            {symbol}
          </span>
  );
};
