import domBuilder from '../../components/domBuilder';
import logoutButton from '../../components/logoutButton';
import navBar from '../../components/navBar';
import showBoards from './boards';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  showBoards();
};

export default startApp;
