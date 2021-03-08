import getPins from '../data/pinData';

const navigationEvents = () => {
  document.querySelector('#pins').addEventListener('click', () => {
    console.warn(getPins());
  });
};

export default navigationEvents;
