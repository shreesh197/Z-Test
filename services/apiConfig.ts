import axios from 'axios';

export default function Api() {
    const api = axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
    return api;
}