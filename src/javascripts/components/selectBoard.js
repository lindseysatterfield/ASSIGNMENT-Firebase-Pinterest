import firebase from 'firebase/app';
import 'firebase/auth';
import { getBoards } from '../helpers/data/boardData';

const selectBoard = (pinObject = {}) => {
  let domString = `<select class="form-control" id="selected-board" required>
                    <option value="">Select a Board</option>`;
  getBoards(firebase.auth().currentUser.uid).then((boardsArray) => {
    boardsArray.forEach((board) => {
      if (board.firebaseKey === pinObject.board_id) {
        domString += `<option selected value="${board.firebaseKey}">${board.board_title}</option>`;
      } else {
        domString += `<option value="${board.firebaseKey}">${board.board_title}</option>`;
      }
    });

    domString += '</select>';
    document.querySelector('#select-board').innerHTML = domString;
  });
};

export default selectBoard;
