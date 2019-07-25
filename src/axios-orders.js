import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-diogoalexp.firebaseio.com/'
});

export default instance;