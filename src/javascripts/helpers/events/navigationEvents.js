import showPins from '../../components/pins';
import getPins from '../data/pinData';

const navigationEvents = () => {
  document.querySelector('#pins').addEventListener('click', () => {
    getPins().then((pins) => showPins(pins));
  });
};

export default navigationEvents;
