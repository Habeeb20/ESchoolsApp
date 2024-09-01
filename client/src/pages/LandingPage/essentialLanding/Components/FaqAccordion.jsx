import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import './FaqAccordion.css'
import '../All.css'
import { Link } from 'react-router-dom'
import FadeIn from '../../../../FadeIn'
export default function FaqAccordion() {
  return (
    <div className='faq-section'>
    <div className='container d-flex flex-column align-items-center'>
        <h2 className='text-center text-capitalize mb-5'>Are you a student?</h2>
        <FadeIn delay={0.4} direction="up">
        <p className='text-center mb-5'> Do you want to enter a vehicle at a very good discount or you have an event to attend in a group and you want to get a benefit of our E-student ID card to order and book a cab or taxi?E-ride gat you covered with a discount rate  </p>
        </FadeIn>
        <Link to="https://ecars.ng/">
            <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
        </Link>
        <Accordion defaultActiveKey="" flush>
            <Accordion.Item eventKey='0'>
                <Accordion.Header style={{fontSize:"5.2rem", fontWeight:"bolder"}}>Do you know ?</Accordion.Header>
                <Accordion.Body style={{fontSize:"155%", color: "black", visible: "show"}}>
                    that you can teach easily than before, make double the cash and rest twice more with your teacher's account to get a teaching job?
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
                <Accordion.Header style={{fontSize:"5.2rem", fontWeight:"bolder"}}>Have you heard ?</Accordion.Header>
                <Accordion.Body style={{fontSize:"155%"}}>
                    that you can host your school websites and manage the activities free with ease? Dnt be surprised, Eschool is in charge of all your school activities
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
                <Accordion.Header style={{fontSize:"5.2rem", fontWeight:"bolder"}}>Do you also Know?</Accordion.Header>
                <Accordion.Body style={{fontSize:"155%"}}>
                    we tell you more about people,Businesses & places in Nigeria than any other Directory with our blog site
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
                <Accordion.Header style={{fontSize:"5.2rem", fontWeight:"bolder"}}>Be informed that ...</Accordion.Header>
                <Accordion.Body style={{fontSize:"155%"}}>
                    you can enjoy being a student than any other with our estudent ID card benefit such as ejobs, scholarship, eride and many others
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
</div>
  )
}
























// import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import { CSSTransition } from 'react-transition-group';
// import './FaqAccordion.css';
// import '../All.css';
// import { Link } from 'react-router-dom';

// export default function FaqAccordion() {
//   return (
//     <div className='faq-section'>
//       <div className='container d-flex flex-column align-items-center'>
//         <h2 className='text-center text-capitalize mb-5'>Are you a student?</h2>
//         <p className='text-center mb-5'>
//           Do you want to enter a vehicle at a very good discount or you have an event to attend in a group and you want to get a benefit of our E-student ID card to order and book a cab or taxi? E-ride has you covered with a discount rate.
//         </p>
//         <Link to="https://ecars.ng/">
//           <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
//         </Link>
//         <Accordion defaultActiveKey="" flush>
//           <Accordion.Item eventKey='0'>
//             <Accordion.Header style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//               Do you know?
//             </Accordion.Header>
//             <CSSTransition
//               in={true}
//               timeout={300}
//               classNames="fade"
//               appear
//               unmountOnExit
//             >
//               <Accordion.Body style={{ fontSize: "1.1rem", color: "black" }}>
//                 You can teach easily, make double the cash, and rest twice as much with your teacher's account to get a teaching job.
//               </Accordion.Body>
//             </CSSTransition>
//           </Accordion.Item>
//           <Accordion.Item eventKey='1'>
//             <Accordion.Header style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//               Have you heard?
//             </Accordion.Header>
//             <CSSTransition
//               in={true}
//               timeout={300}
//               classNames="fade"
//               appear
//               unmountOnExit
//             >
//               <Accordion.Body style={{ fontSize: "1.1rem", color: "black" }}>
//                 You can host your school websites and manage activities for free with ease. Don't be surprised, Eschool is in charge of all your school activities.
//               </Accordion.Body>
//             </CSSTransition>
//           </Accordion.Item>
//           <Accordion.Item eventKey='2'>
//             <Accordion.Header style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//               Do you also know?
//             </Accordion.Header>
//             <CSSTransition
//               in={true}
//               timeout={300}
//               classNames="fade"
//               appear
//               unmountOnExit
//             >
//               <Accordion.Body style={{ fontSize: "1.1rem", color: "black" }}>
//                 We tell you more about people, businesses, and places in Nigeria than any other directory with our blog site.
//               </Accordion.Body>
//             </CSSTransition>
//           </Accordion.Item>
//           <Accordion.Item eventKey='3'>
//             <Accordion.Header style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//               Be informed that...
//             </Accordion.Header>
//             <CSSTransition
//               in={true}
//               timeout={300}
//               classNames="fade"
//               appear
//               unmountOnExit
//             >
//               <Accordion.Body style={{ fontSize: "1.1rem", color: "black" }}>
//                 You can enjoy being a student more than any other with our E-student ID card benefit, including ejobs, scholarships, eride, and many others.
//               </Accordion.Body>
//             </CSSTransition>
//           </Accordion.Item>
//         </Accordion>
//       </div>
//     </div>
//   );
// }
