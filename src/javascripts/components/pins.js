const showPins = (array) => {
  document.querySelector('#title-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button type="button" id="add-pin-btn" class="btn btn-danger">Add a Pin</button>';
  document.querySelector('#corkboard').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((pin) => {
    document.querySelector('#corkboard').innerHTML += `
      <div class="card m-4" style="width: 18rem; border: 4px black solid; height: 500px;">
        <img class="card-img-top" style="height: 13em;" src="${pin.imageUrl}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title" id="pin-name-title--${pin.firebaseKey}">&#128204; ${pin.pin_title}</h5>
          <p class="card-text">${pin.pin_description}</p>
        </div>
        <div class="d-flex mb-2 flex-column" style="margin: 0 auto;">
          <button class="btn btn-primary text-center mb-3" data-toggle="modal" data-target="#formModal" style="width: 10rem;" id="update-pin--${pin.firebaseKey}">Update Pin</button>  
          <button class="btn btn-danger text-center" style="width: 10rem;" id="delete-pin--${pin.firebaseKey}">Delete Pin</button>
        </div>
      </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#add-button').innerHTML = '<button type="button" id="add-pin-btn" class="btn btn-danger mb-5">Add a Pin</button>';
  document.querySelector('#corkboard').innerHTML = '<h4>No pins found. Please add a pin!</h4>';
};

export { showPins, emptyPins };
