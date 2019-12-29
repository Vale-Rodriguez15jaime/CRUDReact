import axios from 'axios';
const BASE_URL = 'http://dummy.restapiexample.com/api/v1'


function callPromise(endpoint, options = {}){
  options.url = BASE_URL + endpoint;
  options.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  return axios(options);
}

const api = {
    users: {
    async list() {
                return callPromise('/employees')
    },
    async create(employees) {
      return callPromise(`/create`, {
          method: 'POST',
            data: JSON.stringify(employees),
      });
    },
    async  read(id) {
                return callPromise(`/employee/${id}`);
    },
    async update(id, updates) {
                return callPromise(`/update/${id}`, {
                  method: 'PUT',
                  data: JSON.stringify(updates),
      });
    },
  
    async remove(id) {
                return callPromise(`/delete/${id}`, {
                  method: 'DELETE',
      });
    },
  },
}
export default api