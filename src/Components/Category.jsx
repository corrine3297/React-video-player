import React,{useEffect, useState} from 'react'
import { Modal,Form,Button, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteSingleCategory, getAVideo, getAllCategory, saveCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';
import { all } from 'axios';


function Category() {
  const [categoryName,setCategoryName] = useState("");
  const [show, setShow] = useState(false);
  const [allCategory,setAllCategory] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCategory = async()=>{
    if(categoryName){
      const body = {
        categoryName,
        allVideos:[]
      }

      // make api call
      const response = await saveCategory(body)
      if(response.status>=200 && response.status<300){
        toast.success("Category is added..")
        // hide modal
        handleClose()
        // reset the category name state value
        setCategoryName("")
        // call getcategories api
        getAllCategories()
      }else{
        toast.error("Error occured Try again....")
      }
    }else{
      toast.info("Please provide Category Name !!")
    }
  }

  const getAllCategories = async ()=>{
    // make api call
    const {data} = await getAllCategory()
    setAllCategory(data)
  }

  const deleteCategory = async(id)=>{
    // make api call
    await deleteSingleCategory(id)
    toast.success("Category is deleted...")
    // get all category
    getAllCategories()
  }
  console.log(allCategory);

  const dragOver = (e)=>{
    console.log("Dragging over the category");
    e.preventDefault();
  }
                              // category id from method of dropping
  const videoDropped = async (e,categoryId)=>{
    console.log("Inside category id :"+categoryId);
    const videoCardId = e.dataTransfer.getData("cardId");
    // console.log("Video card id :"+videoCardId);
    // get details of video to be dropped
    const {data} = await getAVideo(videoCardId)
    console.log(data);
    // get details category     
    console.log(allCategory);                                   //pass chythithaa category id
    const selectedCategory = allCategory.find(item=>item.id === categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategory(categoryId,selectedCategory)
    getAllCategories()
  }


  useEffect(()=>{
    getAllCategories()
  },[])

  return (
    <>
    <div className='d-grid'>
      <button className='btn btn-primary' onClick={handleShow}>Add Category</button>
    </div>
    {
      allCategory.length>0?allCategory?.map(item=>(                                                                   // category id
        <div className="border mt-3 mb-3 p-3 rounded" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDropped(e,item?.id)}>
          <div className="d-flex justify-content-between align-items-center">
            <h6>{item?.categoryName}</h6>
            <button onClick={()=>deleteCategory(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          </div>
          {
            item?.allVideos&&
            <Row>
              {
                item?.allVideos.map(card=>(
                  <Col sm={12}>
                    <VideoCard displayData={card} hideCategoryDeleteButton={true}/>
                  </Col>
                ))
              }
            </Row>
          }
        </div>
      )):<p className='fw-bolder mt-3 fs-5 text-danger'>No Categories to display!!!</p>
    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-secondary rounded p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Category Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>        
      </Form.Group>
          </Form>
       </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Category
