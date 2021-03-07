// API CALLS FOR BOARDS
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS
const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getBoards;
