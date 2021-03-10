import showPins from '../../components/pins';
import { getBoards, getSingleBoard } from '../data/boardData';
import showBoards from '../../components/boards';
import { getPins, getPinsFromBoards } from '../data/pinData';
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
};

export default navigationEvents;
