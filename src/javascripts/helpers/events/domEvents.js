import boardNameInfo from '../../components/boardNameInfo';
import showBoards from '../../components/boards';
import showPins from '../../components/pins';
import { getSingleBoard } from '../data/boardData';
import deleteBoardPins from '../data/boardsAndPins';
import { deletePins, getPinsFromBoards } from '../data/pinData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('see-board-pins-btn')) {
      const boardId = e.target.id.split('--')[1];
      getPinsFromBoards(boardId).then((pins) => showPins(pins));
      getSingleBoard(boardId).then((boards) => boardNameInfo(boards));
    }

    if (e.target.id.includes('see-board-pins-btn')) {
      const boardId = e.target.id.split('--')[1];
      getPinsFromBoards(boardId).then((pins) => showPins(pins));
      getSingleBoard(boardId).then((boards) => boardNameInfo(boards));
    }

    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      // deleteBoard(firebaseKey).then((boardsArray) => showBoards(boardsArray));
      // getPinsFromBoards(firebaseKey).then((boardPinsArray) => console.warn(boardPinsArray));
      console.warn(firebaseKey);
      deleteBoardPins(firebaseKey).then((boardsArray) => showBoards(boardsArray));
    }

    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePins(firebaseKey).then((pinsArray) => showPins(pinsArray));
    }
  });
};

export default domEvents;
