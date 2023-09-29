import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '100%', height: '300px' }}>
            <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
                <div style={{ width: '400px' }} className="website">
                    <div className='d-flex mb-2'>
                        <div>
                            <i className="fa-solid fa-upload fa-xl me-3" style={{ color: '#0c0d0d' }}></i>
                        </div>
                        <div className='fs-4'>
                            Bootstrap
                        </div>
                    </div>
                    <div className='mb-2'>
                        Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
                    </div>
                    <div className='mb-2'>
                        Code licensed MIT, docs CC BY 3.0.
                    </div>
                    <div className='mb-2'>
                        Currently v5.3.2.
                    </div>
                </div>
                <div className="links d-flex flex-column">
                    <div className='fs-4 mb-2'>
                        Links
                    </div>
                    <div className='d-flex flex-column'>
                        <Link to={'/'} className='mb-2' style={{ textDecoration: 'none', color: 'black' }}>
                            {' '}
                            Landing
                        </Link>
                        <Link to={'/home'} className='mb-2' style={{ textDecoration: 'none', color: 'black' }}>
                            {' '}
                            Home Page
                        </Link>
                        <Link to={'/watch-history'} className='mb-2' style={{ textDecoration: 'none', color: 'black' }}>
                            {' '}
                            watch history
                        </Link>
                    </div>



                </div>
                <div className="guides d-flex flex-column">
                    <div className='fs-4 mb-2'>
                        Guides
                    </div>
                    <div className='d-flex flex-column'>
                        <Link to={'https://getbootstrap.com/docs/5.3/getting-started/introduction/'} className='mb-2' style={{ textDecoration: 'none', color: 'black' }}>
                            {' '}
                            Getting started
                        </Link>
                        <Link to={'https://getbootstrap.com/docs/5.3/examples/starter-template/'} className='mb-2' style={{ textDecoration: 'none', color: 'black' }}>
                            {' '}
                            Starter Template
                        </Link>
                        <Link to={'https://getbootstrap.com/docs/5.3/getting-started/webpack/'} className='mb-2' style={{ textDecoration: 'none', color: 'black' }}>
                            {' '}
                            Webpack
                        </Link>
                        <Link to={'https://getbootstrap.com/docs/5.3/getting-started/parcel/'} className='mb-2' style={{ textDecoration: 'none', color: 'black' }}>
                            {' '}
                            Parcel
                        </Link>
                    </div>
                </div>
                <div className="contact d-flex flex-column">
                    <div className='fs-4 mb-2'>
                        Contact us
                    </div>
                    <div className='d-flex justify-content-center mb-3'>
                        <div className="form-floating ">
                            <input type="text" className="form-control" name="search" id="search" placeholder="search"
                            />
                            <label for="search">Search</label>
                        </div>
                        <button type="button" className="btn btn-primary ms-2">Search</button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-3'>
                    <i class="fa-brands fa-linkedin fa-xl  me-5"></i>
                    <i class="fa-brands fa-square-twitter fa-xl me-5"></i>
                    <i class="fa-brands fa-facebook fa-xl me-5"></i>
                    <i class="fa-solid fa-envelope fa-xl me-5"></i>
                    </div>

                </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
            <p>Copyright ©️ 2023 React Bootstrap. Built with Docusaurus.</p>
            </div>
            <p></p>
        </div>
    )
}

export default Footer