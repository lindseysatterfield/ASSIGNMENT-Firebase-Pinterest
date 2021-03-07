import domBuilder from '../../components/domBuilder';
import logoutButton from '../../components/logoutButton';
import navBar from '../../components/navBar';
import getBoards from '../data/boardData';
import showBoardsTitle from './boardsTitle';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  showBoardsTitle();
  getBoards().then((boards) => console.warn(boards));
};

export default startApp;
