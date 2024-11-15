import {useState} from "react";
import {SYMBOL_O, SYMBOL_X} from "../common/constants";

const computeWinner = (cells) => {
  const linesWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < linesWinner.length; i++) {
    const [a, b, c] = linesWinner[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};


export function useGameState() {
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [cells, setCells] = useState(Array(9).fill(null));
  const [winnerSequence, setWinnerSequence] = useState(null);

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence) return;

    const copyCells = [...cells];
    copyCells[index] = currentStep;

    const winner = computeWinner(copyCells);

    setCells(copyCells);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
  };

  const handleResetClick = () => {
    setCells(Array(9).fill(null));
    setWinnerSequence(null);
    setCurrentStep(SYMBOL_O);
  };

  const winnerSymbol = winnerSequence
    ? cells[winnerSequence[0]]
    : undefined;

  const isDraw = !winnerSequence && cells.every((cell) => cell !== null);

  return {
    cells,
    currentStep,
    winnerSequence,
    isDraw,
    winnerSymbol,
    handleCellClick,
    handleResetClick,
  };
}