import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { Col,Row } from 'react-bootstrap'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})
  return (
    <>
       <div className='container mt-5 mb-5 d-flex align-items-center justify-content-between'>
        <div className="add"><Add setUploadVideoServerResponse={setUploadVideoServerResponse}/></div>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}} className='fs-5'>Watch History</Link>
      </div>
      <Row className="container-fluid w-100">
        <Col className='all-videos col-lg-9'>
          <h3>All Videos</h3>
          <div className="videos w-100">
            <View uploadVideoServerResponse={uploadVideoServerResponse}/>
          </div>
        </Col>
        <Col className='category col-lg'>
          <Category/>
        </Col>
      </Row>
    </>
  )
}

export default Home
