import firebase from 'firebase/app';
import 'firebase/auth';
import addBoardForm from '../../components/addBoardForm';
import boardNameInfo from '../../components/boardNameInfo';
import showBoards from '../../components/boards';
import showPins from '../../components/pins';
import { createBoard, getSingleBoard } from '../data/boardData';
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

    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        board_title: document.querySelector('#board-title').value,
        imageUrl: document.querySelector('#board-image').value,
        uid: firebase.auth().currentUser.uid
      };

      createBoard(boardObject).then((boardsArray) => showBoards(boardsArray));
      document.querySelector('form').reset();
    }

    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }
  });
};

export default domEvents;
