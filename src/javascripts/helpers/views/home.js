import domBuilder from '../../components/domBuilder';

const home = () => {
  domBuilder();
  const domString = `<nav class="navbar fixed-top navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Passably Pinterest</a>
  <div id="login-button"></div>
</nav>
<h1 class="home-header mt-5">*Passably Pinterest*</h1>
<h3 class="mt-4">Discover new ideas!</h3>`;
  document.querySelector('#navigation').innerHTML = domString;
};

export default home;
