
import axios from 'axios';
const REACT_APP_API_URL="https://jobmate-app-api.onrender.com/api/v1"
const api = axios.create({
    baseURL:REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    // http://localhost:5500/api/send-otp
})





//List of all the endpoints

export const allJobs = async () => api.get('/viewJob');
export const login =async(data)=>api.post('/local-login',data)
export const register =async(data)=>api.post('/local-register',data)
export const loadUser=async ()=>api.get('/login-success');
export const specificJobDetails=async(specificJobId)=>api.get(`/specificJob/${specificJobId}`)
export const submitApplication=async(formData,jobId,companyId)=>api.post(`${REACT_APP_API_URL}/jobapplication/${jobId}/${companyId}`,formData)
export const myApplicationDetails=async()=>api.get(`/myApplication`)




export default api;
