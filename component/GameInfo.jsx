import React from 'react';
import s from "./game.module.css";
import {GameSymbol} from "./GameSymbol";

export const GameInfo = ({isDraw, winnerSymbol, currentSymbol}) => {
  if (isDraw) {
    return (
      <div className={s.gameInfo}>
        Победила дружба!
      </div>
    )
  }

  if (winnerSymbol) {
    return (
      <div className={s.gameInfo}>
        Победитель: <GameSymbol symbol={winnerSymbol}/>
      </div>
    )
  }

  return <div className={s.gameInfo}>Ход: <GameSymbol symbol={currentSymbol}/></div>
};
