import { emptyPins, showPins } from '../../components/pins';
import { getBoards } from '../data/boardData';
import { emptyBoards, showBoards } from '../../components/boards';
import { getPins } from '../data/pinData';

const navigationEvents = (uid) => {
  document.querySelector('#pins').addEventListener('click', () => {
    document.querySelector('#title-container').innerHTML = '';
    document.querySelector('#board-name').innerHTML = '';
    document.querySelector('#board-name').innerHTML = '<h1>&#128204; &#128204; &#128204;</h1>';
    getPins(uid).then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });

  document.querySelector('#boards').addEventListener('click', () => {
    document.querySelector('#title-container').innerHTML = '<h1>Boards</h1>';
    document.querySelector('#board-name').innerHTML = '';
    getBoards(uid).then((boardsArray) => {
      if (boardsArray.length) {
        showBoards(boardsArray);
      } else {
        emptyBoards();
      }
    });
  });
};

export default navigationEvents;
