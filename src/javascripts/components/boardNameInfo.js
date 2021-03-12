const boardNameInfo = (boardObject) => {
  document.querySelector('#board-name').innerHTML = '';
  document.querySelector('#board-name').innerHTML += `<h1 class="font-italic">${boardObject.board_title}</h1>`;
};

export default boardNameInfo;
