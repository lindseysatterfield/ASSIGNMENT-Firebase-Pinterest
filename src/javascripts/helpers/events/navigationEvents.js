import showPins from '../../components/pins';
import { deleteBoard, getBoards, getSingleBoard } from '../data/boardData';
import showBoards from '../../components/boards';
import { deletePins, getPins, getPinsFromBoards } from '../data/pinData';
import boardNameInfo from '../../components/boardNameInfo';

const navigationEvents = () => {
  document.querySelector('#pins').addEventListener('click', () => {
    getPins().then((pins) => showPins(pins));
  });

  document.querySelector('#boards').addEventListener('click', () => {
    document.querySelector('#title-container').innerHTML = '<h1>Boards</h1>';
    document.querySelector('#board-name').innerHTML = '';
    getBoards().then((boards) => showBoards(boards));
  });

  document.querySelector('#corkboard').addEventListener('click', (e) => {
    if (e.target.id.includes('see-board-pins-btn')) {
      const boardId = e.target.id.split('--')[1];
      getPinsFromBoards(boardId).then((pins) => showPins(pins));
      getSingleBoard(boardId).then((boards) => boardNameInfo(boards));
    }
  });

  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteBoard(firebaseKey).then((boardsArray) => showBoards(boardsArray));
    }
  });

  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePins(firebaseKey).then((pinsArray) => showPins(pinsArray));
    }
  });
};

export default navigationEvents;
