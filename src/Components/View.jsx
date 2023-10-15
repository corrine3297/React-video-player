import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI';

function View({uploadVideoServerResponse}) {
  const[allVideos,setAllVideos] = useState([]);
  const[deleteSpecificVideo,setDeleteSpecificVideo] = useState(false);
  const getAllUploadVideos = async()=>{
    // make api call
    const {data} = await getAllVideos();
    setAllVideos(data);
  }

  useEffect(()=>{
    setDeleteSpecificVideo(false)
    getAllUploadVideos();
  },[uploadVideoServerResponse,deleteSpecificVideo])
  // console.log(allVideos);

  return (
    <Row>
      {
        allVideos?.length>0?
        allVideos.map(video=>(

      <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard setDeleteSpecificVideo={setDeleteSpecificVideo} displayData={video}/>
      </Col>
      ))
      :<p className='fw-bolder mt-3 fs-5 text-danger'>There are no Uploaded Videos</p>
      }
    </Row>
  )
}

export default View
