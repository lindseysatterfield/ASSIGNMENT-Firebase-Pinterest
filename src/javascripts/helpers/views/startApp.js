import { showBoards } from '../../components/boards';
import domBuilder from '../../components/domBuilder';
import logoutButton from '../../components/logoutButton';
import navBar from '../../components/navBar';
import { getBoards } from '../data/boardData';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import showTitle from './boardsTitle';

const startApp = (userObject) => {
  domBuilder();
  navBar();
  logoutButton();
  navigationEvents(userObject.uid);
  domEvents(userObject.uid);
  showTitle();
  getBoards(userObject.uid).then((boards) => showBoards(boards));
};

export default startApp;
