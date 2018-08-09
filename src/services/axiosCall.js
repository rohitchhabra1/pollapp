import axios from "axios";

function axiosCall(url, method, data){
    const baseurl = "http://dev.hr.excellencetechnologies.in:8000/";
    const URL = baseurl + url;
    console.log(data,"=======");
    
    if (method === "POST") {
      return axios.post(URL, data);
    } else if (method === "GET") {
      return axios.get(URL);
    } else if (method === "DELETE") {
      return axios.delete(URL);
    } else {
      return axios.put(URL, data);
    }
  }

export default axiosCall;