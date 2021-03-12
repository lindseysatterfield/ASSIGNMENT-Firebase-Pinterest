import firebase from 'firebase/app';
import 'firebase/auth';
import addBoardForm from '../../components/addBoardForm';
import addPinForm from '../../components/addPinForm';
import boardNameInfo from '../../components/boardNameInfo';
import showBoards from '../../components/boards';
import showPins from '../../components/pins';
import { createBoard, getSingleBoard } from '../data/boardData';
import deleteBoardPins from '../data/boardsAndPins';
import { createPins, deletePins, getPinsFromBoards } from '../data/pinData';

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

    if (e.target.id.includes('add-pin')) {
      addPinForm();
    }

    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        pin_title: document.querySelector('#pin-title').value,
        pin_description: document.querySelector('#pin-description').value,
        imageUrl: document.querySelector('#pin-image').value,
        board_id: document.querySelector('#selected-board').value,
        uid: firebase.auth().currentUser.uid
      };

      createPins(pinObject).then((pinsArray) => showPins(pinsArray));
      document.querySelector('form').reset();
    }
  });
};

export default domEvents;
