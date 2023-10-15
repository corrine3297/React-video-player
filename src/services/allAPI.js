import {commonAPI} from "./commonApi"
import {serverURL} from "./serverURL"

// uploading video 
export const uploadVideo = async (body)=>{
    // call post http request to http://localhost:4000/videos to add video in json server return response to Add component
    return await commonAPI("POST",`${serverURL}/videos`,body)
}

// get all videos 
export const getAllVideos = async ()=>{
    // call get http request to http://localhost:4000/videos to get videos from json server return response to View component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

// get a single video
export const getAVideo = async (id)=>{
    // call get http request to http://localhost:4000/videos to get a single video from json server 
    // return response to Videocard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

// delete a single video 
export const deleteAVideo = async (id)=>{
    // call delete http request to http://localhost:4000/videos to remove single video in json server 
    // return response to Videocard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// store video watch history to json server 
export const addHistory = async (videoHistory)=>{
    // call post http request to http://localhost:4000/history to add video history in json server return response to 
    // videocard component
    return await commonAPI("POST",`${serverURL}/history`,videoHistory)
}

// get video watch history from json server 
export const getHistory = async ()=>{
    // call get http request to http://localhost:4000/history to get all video history from json server return response to 
    // watchhistory component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// delete video watch history from json server 
export const deleteSingleWatchHistory = async (id)=>{
    // call delete http request to http://localhost:4000/history to delete single video history from json server return response to 
    // watchhistory component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

// add category to json server
export const saveCategory = async(body)=>{
    // call post http request to http://localhost:4000/categories to add category in json server return response to 
    // category component
    return await commonAPI("POST",`${serverURL}/categories`,body)
}

// get all categories from json server
export const getAllCategory = async()=>{
    // call get http request to http://localhost:4000/categories to get category from json server return response to 
    // category component
    return await commonAPI("GET",`${serverURL}/categories`,"")
}

// update category from json server
export const updateCategory = async (id,body)=>{
    // call put http request tp http://localhost:4000/categories/id to update category from json server return response 
    // to category component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}

// delete all categories from json server
export const deleteSingleCategory = async(id)=>{
    // call delete http request to http://localhost:4000/categories/id to delete category from json server return response to 
    // category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}