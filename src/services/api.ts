//intuito de ser serviço de dados

import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})