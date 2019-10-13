import axios from 'axios';


class Fetch {
  static get = async (url, options = {}) => (
    axios.get(url, options)
  );

  static post = async (url, data, options = {}) => (
    axios.post(url, data, options)
  );
}


export default Fetch;
