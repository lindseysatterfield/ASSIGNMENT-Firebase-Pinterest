import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#corkboard').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-pin-form" style="width: 50%; margin: 0 auto;">
      <div class="form-group">
        <input type="text" class="form-control" id="pin-title" aria-describedby="pinTitle" placeholder="Enter Pin Title" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="pin-description" placeholder="Pin Description" required>
      </div>
      <div class="form-group">
        <input type="url" class="form-control" id="pin-image" placeholder="Image URL" required>
      </div>
      <div class="form-group" id="select-board"></div>
      <button type="submit" id="submit-pin" class="btn btn-primary">Submit Pin</button>
    </form>`;

  selectBoard();
};

export default addPinForm;
