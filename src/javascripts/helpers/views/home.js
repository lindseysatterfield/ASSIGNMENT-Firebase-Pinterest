import domBuilder from '../../components/domBuilder';

const home = () => {
  domBuilder();
  const domString = `<nav class="navbar fixed-top navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Passably Pinterest</a>
    <div id="login-button"></div>
    </nav>
    <h1 class="mt-4" id="home-ideas">Discover new ideas!</h1>`;
  document.querySelector('#navigation').innerHTML = domString;
};

export default home;
