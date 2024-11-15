import {useState} from "react";
import {SYMBOL_O, SYMBOL_X} from "../constants/constants";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c]
    }
  }

  return null;
}

export const useGameState = () => {
  const [cells, setCells] = useState(Array(9).fill(null))
  const [currentSymbol, setCurrentSymbol] = useState(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState(null);

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence) {
      return;
    }

    const copyCells = [...cells]
    copyCells[index] = currentSymbol

    const winner = computeWinner(copyCells)

    setCells(copyCells)
    setWinnerSequence(winner)
    setCurrentSymbol(currentSymbol === SYMBOL_X ? SYMBOL_O : SYMBOL_X)
  }

  const handleResetClick = () => {
    setCells(Array(9).fill(null))
    setCurrentSymbol(SYMBOL_X)
    setWinnerSequence(null)
  }

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.every((cell) => cell !== null);

  return {
    cells,
    currentSymbol,
    winnerSequence,
    isDraw,
    winnerSymbol,
    handleCellClick,
    handleResetClick,
  }
};
