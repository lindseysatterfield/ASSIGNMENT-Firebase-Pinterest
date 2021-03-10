const showBoards = (array) => {
  document.querySelector('#add-button').innerHTML = '<button type="button" id="add-board-btn" class="btn btn-danger">Add a Board</button>';
  document.querySelector('#corkboard').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((board) => {
    document.querySelector('#corkboard').innerHTML += `
      <div class="card m-4" style="width: 18rem; border: 4px black solid;">
      <img class="card-img-top" style="height: 13em;" src="${board.imageUrl}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${board.board_title}</h5>
        <a href="#" class="btn btn-primary" id="see-board-pins-btn--${board.firebaseKey}">View all pins</a>
      </div>
    </div>`;
  });
};

export default showBoards;
