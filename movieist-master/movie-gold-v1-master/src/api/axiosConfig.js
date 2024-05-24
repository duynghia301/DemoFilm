import axios from 'axios';

export default axios.create({
    baseURL:'https://24c9-42-119-149-249.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});