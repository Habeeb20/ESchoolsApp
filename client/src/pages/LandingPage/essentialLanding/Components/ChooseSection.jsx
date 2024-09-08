import React from 'react'
import '../All.css'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FadeIn from '../../../../FadeIn'
export default function ChooseSection() {
  return (
    <div>
    <div className="container">
        <h2 className='text-center mb-5'>Why choose ESchools?</h2>
        <FadeIn delay={0.4} direction="down">
        <div className='row g-4'>
            <div className='col-lg-4'>
                <Card className='d-flex align-items-center border-0 h-100'>
                    <div className='mt-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                        </svg>
                    </div>
                    <Card.Body>
                        <Card.Title className='text-center text-capitalize mb-3'>
                            Scholarships
                        </Card.Title>
                        <Card.Text className='text-center'>
                            Students can also have opportunities to win a scholarship base on choice of schools?
                            <Link to="/scholarship">
                            <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-4'>
                <Card className='d-flex align-items-center border-0 h-100'>
                    <div className='mt-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
                        </svg>
                    </div>
                    
                    <Card.Body>
                        <Card.Title className='text-center text-capitalize mb-3'>
                            E-jobs
                        </Card.Title>
                        <Card.Text className='text-center'>
                            Student can get jobs easily with student e-jobs, part time, full time, summer, holiday services etc?
                            <Link to="/ejobslogin">
                            <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-4'>
                <Card className='d-flex align-items-center border-0 h-100'>
                    <div className='mt-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>
                    </div>
                    <Card.Body>
                        <Card.Title className='text-center text-capitalize mb-3'>
                            Admission anywhere in the country
                        </Card.Title>
                        <Card.Text className='text-center'>
                            ESchoools allows the students to apply tp courses and programmes everywhere, anywhere in Nigeria
                            <Link to="/bookhomepage">
                            <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </FadeIn>
    </div>
</div>
  )
}
