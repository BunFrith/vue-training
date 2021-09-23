import axios from 'axios';

let instance = axios.create({
  baseURL: 'http://www.bun-frith.pp.ua/wp-json'
})

export default instance