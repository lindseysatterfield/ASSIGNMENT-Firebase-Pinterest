const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="profile-container"></div>
    <div id="board-name"></div>
    <div id="title-container"></div>
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="corkboard"></div>
  </div>`;
};

export default domBuilder;
