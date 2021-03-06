import axios from 'axios';

var urlPrefix = 'http://localhost:4000/api'

var API = {
    
    serverUrl: 'http://localhost:4000/',
    
    getListings : () => {
        return axios.get(urlPrefix+'/listings')
    },
    getSingleListing : (id) => {
        return axios.get(urlPrefix+'/listings/'+id)
    },
    addListing : (data) => {
        return axios.post(urlPrefix+'/listings',data)
    },
    updateListing : (id,data) => {
        return axios.put(urlPrefix+'/listings/'+id,data)
    },
    deleteListing : (id) => {
        return axios.delete(urlPrefix+'/listings/'+id)
    },
    getTypes : () => {
        return axios.get(urlPrefix+'/types')
    },
    getSingleType : (id) => {
        return axios.get(urlPrefix+'/types/'+id)
    },
    getSingleUser : (id) => {
        return axios.get(urlPrefix+'/users/'+id)
    },
    addUser : (data) => {
        return axios.post(urlPrefix+'/users',data)
    },
    updateUser : (id,data) => {
        return axios.put(urlPrefix+'/users/'+id,data)
    },
    deleteUser : (id) => {
        return axios.delete(urlPrefix+'/users/'+id)
    },
    authenticate : (data) => {
        return axios.post(urlPrefix+'/users/authenticate',data)
    },
    getCategories : () => {
        return axios.get(urlPrefix+'/categories')
    },
    getSingleCategories : (id) => {
        return axios.get(urlPrefix+'/categories/'+id)
    },
    getComments : () => {
        return axios.get(urlPrefix+'/comments')
    },
    getSingleComment : (id) => {
        return axios.get(urlPrefix+'/comments/'+id)
    },
    addComment : (data) => {
        return axios.post(urlPrefix+'/comments',data)
    },
    deleteComment : (id) => {
        return axios.delete(urlPrefix+'/comments/'+id)
    },
    uploadFile : (formData) => {
        var settings = {headers: {'Content-Type': 'multipart/form-data'}}
        return axios.post(urlPrefix+'/upload',formData,settings)
    }
}

export default API