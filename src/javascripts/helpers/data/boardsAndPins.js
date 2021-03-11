import { deleteBoard } from './boardData';
import { deletePins, getPinsFromBoards } from './pinData';

// DELETE BOARD AND ALL THEIR PINS
const deleteBoardPins = (firebaseKey) => new Promise((resolve, reject) => {
  getPinsFromBoards(firebaseKey).then((boardPinsArray) => {
    const deletePin = boardPinsArray.map((pin) => deletePins(pin.firebaseKey));
    Promise.all(deletePin).then(() => resolve(deleteBoard(firebaseKey)));
  }).catch((error) => reject(error));
});
export default deleteBoardPins;
