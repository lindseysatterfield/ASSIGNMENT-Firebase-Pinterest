import showPins from '../../components/pins';
import { getBoards } from '../data/boardData';
import showBoards from '../../components/boards';
import { getPins } from '../data/pinData';

const navigationEvents = (uid) => {
  document.querySelector('#pins').addEventListener('click', () => {
    getPins(uid).then((pins) => showPins(pins));
  });

  document.querySelector('#boards').addEventListener('click', () => {
    document.querySelector('#title-container').innerHTML = '<h1>Boards</h1>';
    document.querySelector('#board-name').innerHTML = '';
    getBoards(uid).then((boards) => showBoards(boards));
  });
};

export default navigationEvents;
