import selectBoard from './selectBoard';

const updatePinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="update-pin-form">
      <div class="form-group">
        <input type="text" class="form-control" id="pin-title" aria-describedby="pinTitle" placeholder="Enter Pin Title" value="${pinObject.pin_title}" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="pin-description" placeholder="Pin Description" value="${pinObject.pin_description}" required>
      </div>
      <div class="form-group">
        <input type="url" class="form-control" id="pin-image" placeholder="Image URL" value="${pinObject.imageUrl}" required>
      </div>
      <div class="form-group" id="select-board"></div>
      <button type="submit" id="submit-updated-pin--${pinObject.firebaseKey}" class="btn btn-primary">Update Pin</button>
    </form>`;

  selectBoard(pinObject);
};

export default updatePinForm;
