import axios from 'axios'
const request =axios.create({
    baseURL:'http://localhost:8094/vr',
    withCredentials:true
})
export default request