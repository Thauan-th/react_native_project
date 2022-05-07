import axios from "axios";

const api_client = axios.create({
    baseURL:'https://sujeitoprogramador.com/',
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': '*/*'
    }
  })

export default api_client