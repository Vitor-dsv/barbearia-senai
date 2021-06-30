import axios from 'axios'

class BaseService {
    protected static api = axios.create({
      baseURL: 'http://localhost:3333'
    })
}

export default BaseService
