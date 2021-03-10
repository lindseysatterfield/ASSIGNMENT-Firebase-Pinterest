// API CALLS FOR BOARDS
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS
const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE BOARD
const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${boardId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getBoards, getSingleBoard };
