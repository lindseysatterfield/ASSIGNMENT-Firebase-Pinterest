const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="profile-container"></div>
    <div id="add-button"></div>
    <div id="boards-container"></div>
    <div id="form-container"></div>
  </div>`;
};

export default domBuilder;