const addBoardForm = () => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#corkboard').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-book-form" style="width: 50%; margin: 0 auto;">
      <div class="form-group">
        <input type="text" class="form-control" id="board-title" aria-describedby="boardTitle" placeholder="Enter Board Title" required>
      </div>
      <div class="form-group">
        <input type="url" class="form-control" id="board-image" placeholder="Image URL" required>
      </div>
      <button type="submit" id="submit-board" class="btn btn-primary">Submit Board</button>
    </form>`;
};

export default addBoardForm;
