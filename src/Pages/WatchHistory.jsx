import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteSingleWatchHistory, getHistory } from '../services/allAPI'

function WatchHistory() {

  const [history,setHistory] = useState([])
  const getAllWatchHistory= async ()=>{
    // make api call
    const {data} = await getHistory()
    setHistory(data)
  }

  //deleting watch history of a single video 
  const deleteVideoWatchHistory = async (watchHistoryId)=>{
    await deleteSingleWatchHistory(watchHistoryId);
    getAllWatchHistory();
  }

  useEffect(()=>{
    getAllWatchHistory()
  },[])
  console.log(history);
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h3>Watch history</h3>
        <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',fontSize:'20px',color:'white'}}>
        <i class="fa-solid fa-arrow-left" style={{color:'white'}}></i>Back to Home
        </Link>
      </div>
      <table className='table mt-5 mb-5 container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
          history?.length>0?
          history.map((item,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><a href={item?.embedlink} target='_blank'>{item?.embedlink}</a></td>
              <td>{item?.timestamp}</td>
              <td><button onClick={()=>deleteVideoWatchHistory(item.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
          )
          )
          :<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display!!!</p>  
          }
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory
