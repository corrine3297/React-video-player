import React from 'react'
import { useState } from 'react';
import { Card,Modal } from 'react-bootstrap'
import { addHistory, deleteAVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VideoCard({displayData,setDeleteSpecificVideo,hideCategoryDeleteButton}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    // get caption and link
    const {caption,embedlink} = displayData

    // generate Timestamp
    let today = new Date();
    const timeStamp = new Intl.DateTimeFormat("en-US",{
      year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    // watch video to add json server
    let reqBody = {
      caption,embedlink,timeStamp
    }

    // make api call 
    await addHistory(reqBody)
  }  
  const deleteSingleVideo = async (id)=>{
    console.log(id);
    const response = await deleteAVideo(id)
      console.log(response);
        setDeleteSpecificVideo(true)
        toast.success(`Video deleted Successfully`)
  }

  const dragStarted = (e,id)=>{
    console.log("Drag Started");
    console.log(e);
    e.dataTransfer.setData("cardId",id)
  }

  return (
    <>
    {
      displayData &&                                                //video card id
      <Card className='mb-4' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} style={{height:'180px',cursor:'pointer'}} className="w-100" variant="top" src={displayData?.url}/>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <h6>{displayData?.caption}</h6>
          { hideCategoryDeleteButton?" ":
            <button onClick={()=>deleteSingleVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          }
          </Card.Title>
      </Card.Body>
    </Card>
  }
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={'100%'} height={"400px"} src={`${displayData?.embedlink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}


export default VideoCard
