import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function LandingPage() {
  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between'>
        <Col>
        </Col>
        <Col lg={4}>
          <h3 className='mb-3'>Welcome to <span className='text-warning'>Media player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, architecto perspiciatis sint dolorum animi pariatur dolor! Magni ut asperiores ducimus iure nesciunt sequi consequuntur, recusandae perferendis, distinctio illo, exercitationem hic.</p>
          <button className='btn btn-info mt-5 fw-bolder'>Get started</button>
        </Col>
        <Col>
        </Col>
        <Col lg={6} className=''>
          <img className='img-fluid ms-5 ps-5' src="https://i.pinimg.com/originals/a1/77/df/a177dfc84703c31afa0d501ccf43fe4f.gif" alt="" />
        </Col>
      </Row>
      <div className='container mt-5  mb-5 d-flex justify-content-center align-items-center flex-column'>
        <h3>Features</h3>
        <div className='cards mt-5 d-flex align-items-center justify-content-between w-100'>
          <Card style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/e2/e7/ae/e2e7ae69fb1c6f720756d908b3c6a6b8.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/e0/bc/e8/e0bce84bac8ca8856d8b234fb855b29e.gif" />
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

      <div className='container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded align-items-center'>
        <div className='content' width={'400px'}>
          <h3 className='text-waring mb-5'>Simple,fast Powerful</h3>
          <h6><span className='fs-5 fw bolder'>Play everyting</span> : Lorem ipsum dolor sit amet  Delectus, quibusdam natus nisi quam iure quis beatae alias repellat, suscipit non dolores libero?</h6>

          <h6><span className='fs-5 fw bolder'>Play everyting</span> : expedita odit ullam animi possimus. Delectus, quibusdam natus nisi quam iure quis beatae alias repellat, suscipit non dolores libero?</h6>

          <h6><span className='fs-5 fw bolder'>Play everyting</span> : Culpa natus aut expedita odit ullam animi possimus. Delectus, quibusdam natus nisi quam iure quis beatae alias repellat, suscipit non dolores libero?</h6>

        </div>
        <div className='videe ms-5'>
          <iframe width="553" height="280" src="https://www.youtube.com/embed/NDonh28AY3I" title="Coldplay - A Sky Full Of Stars (Lyrics)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>

      </div>

    </>

  )
}

export default LandingPage