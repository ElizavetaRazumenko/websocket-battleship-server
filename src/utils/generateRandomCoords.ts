import { GameField } from '../types/game';

export const generateRandomCoords = (field: GameField) => {
  const markedCells = ['miss', 'killed', 'shot'];

  const x = Math.floor(Math.random() * 10); 
  const y = Math.floor(Math.random() * 10);
  console.log('generateRandomCoords');
  console.log(`X: ${x}, Y: ${y}`);

  if (field[y]?.[x] && !markedCells.includes(field[y]?.[x])) {
    return { x, y };
  }
  generateRandomCoords(field);
};