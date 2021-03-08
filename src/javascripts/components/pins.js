const showPins = (array) => {
  document.querySelector('#title-container').innerHTML = '<h1 id="pins-title">Pins</h1>';
  document.querySelector('#add-button').innerHTML = '<button type="button" id="add-pin-btn" class="btn btn-danger">Add a Pin</button>';
  document.querySelector('#corkboard').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((pin) => {
    document.querySelector('#corkboard').innerHTML += `
      <div class="card m-4" style="width: 18rem; border: 4px black solid; height: 400px;">
      <img class="card-img-top" style="height: 13em;" src="${pin.imageUrl}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${pin.pin_title}</h5>
        <p class="card-text">${pin.pin_description}</p>
      </div>
    </div>`;
  });
};

export default showPins;
