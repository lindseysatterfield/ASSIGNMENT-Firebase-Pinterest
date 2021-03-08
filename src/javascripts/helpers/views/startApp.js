// import showBoards from '../../components/boards';
import showBoards from '../../components/boards';
import domBuilder from '../../components/domBuilder';
import logoutButton from '../../components/logoutButton';
import navBar from '../../components/navBar';
import getBoards from '../data/boardData';
import navigationEvents from '../events/navigationEvents';
import showTitle from './boardsTitle';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  navigationEvents();
  showTitle();
  getBoards().then((boards) => showBoards(boards));
};

export default startApp;
