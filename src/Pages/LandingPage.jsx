import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()

  const navigate = ()=>{
    navigateByUrl('/home')
  }
  return (
    <div>
      <Row className="mt-5 mb-5 align-items-center justify-content-between">
        <Col></Col>
        <Col lg={4}>
          <h3 className='mb-3'>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>dsahkjnadjnaslkdclaksnfkdnawsk adsnfjasdnjjnjnmnadsmfmsdnfmdsnfmsd
          sdbfjsdbfjksandjfnjdkasnfj nsdjfndsjnsd dwsvsd sdfjsdnfjnsd ebdjfsnbfk bdsjnasdnalk 
          dsnfjskn dsfnjsd nasdjna nsdfns nsdjflwe</p>
          <button onClick={navigate} className='btn btn-primary mt-5 fw-bolder'>Get Started</button>
        </Col>
        <Col></Col>
        <Col className='ps-5' lg={6}>
          <img className='img-fluid ms-5' src="https://media.tenor.com/XHzHDo4uhWkAAAAd/kmt-kiaratakahashi.gif" alt="landing" />
        </Col>
      </Row>
      <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column">
        <h3>Features</h3>
        <div className='w-100 d-flex cards justify-content-between'>
      <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/MDENSxE43cIAAAAd/vinyl-music.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/SK-HnWyQik0AAAAd/johnny-depp-dior.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/N1rENlJhpOoAAAAd/playing-piano-toms-mucenieks.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
      </div>

      <div className="container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded align-items-center">
        <div className="content">
          <h3 className="text-warning mb-5">Simple, Fast and Powerful</h3>
          <h6><span className="fs-5 fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Aut fugit aspernatur voluptatem nostrum quae debitis numquam at
           sequi! Officia, eligendi.</h6>
           <h6 className='mt-4'><span className="fs-5 fw-bolder">Manage Videos</span>: Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Aut fugit aspernatur voluptatem nostrum quae debitis numquam at
           sequi! Officia, eligendi.</h6>
           <h6 className='mt-4'><span className="fs-5 fw-bolder">Watch History</span>: Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Aut fugit aspernatur voluptatem nostrum quae debitis numquam at
           sequi! Officia, eligendi.</h6>
        </div>
        <div className="video ms-5">
        <iframe width="899" height="387" src="https://www.youtube.com/embed/tvqnKq-b_Eo" title="Jawan: Chaleya (Hindi song) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
