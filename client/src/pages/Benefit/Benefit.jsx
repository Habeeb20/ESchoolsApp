// import React from 'react';
// import { Card, CardContent, CardMedia, Typography, Button, Grid, TextField } from '@mui/material';
// import { styled } from '@mui/system';

// const StyledCard = styled(Card)({
//   margin: '20px 0',
//   display: 'flex',
//   flexDirection: 'row',
//   '@media (max-width: 768px)': {
//     flexDirection: 'column',
//   },
// });

// const Content = styled(CardContent)({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   flexGrow: 1,
// });

// const SearchBar = styled(TextField)({
//   margin: '20px 0',
//   width: '100%',
//   maxWidth: '600px',
// });

// const Header = styled(Typography)({
//   textAlign: 'center',
//   marginBottom: '20px',
// });

// const NavBar = styled('div')({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   margin: '20px 0',
// });

// const cardsData = [
//   {
//     img: 'link-to-image-1.jpg',
//     company: 'Chicken Republic of Nigeria',
//     offer: '10% OFF',
//     details: 'Get 10% off on your favorite meal...',
//     startDate: '1st Jan 2024',
//     endDate: '31st Dec 2024',
//   },
//   {
//     img: 'link-to-image-2.jpg',
//     company: 'Shop Local',
//     offer: '10% OFF',
//     details: 'Save 10% on your purchase...',
//     startDate: '1st Jan 2024',
//     endDate: '31st Dec 2024',
//   },
//   // Add more card data as needed
// ];

// const Benefit = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <NavBar>
//         <SearchBar variant="outlined" placeholder="Search benefit" />
//         <Button variant="contained" color="primary">Map out</Button>
//         <Button variant="contained" color="secondary">Create Post</Button>
//       </NavBar>
//       <Header variant="h4">
//         Over the world there are always opportunities for students rising, find many of them here or post them here.
//       </Header>
//       <Grid container direction="column" alignItems="center">
//         {cardsData.map((card, index) => (
//           <StyledCard key={index}>
//             <CardMedia
//               component="img"
//               image={card.img}
//               alt={card.company}
//               style={{ width: '200px', height: '200px' }}
//             />
//             <Content>
//               <Typography variant="h6">{card.company}</Typography>
//               <Typography variant="h5">{card.offer}</Typography>
//               <Typography variant="body2">{card.details}</Typography>
//               <Typography variant="body2">Offer Starting: {card.startDate}</Typography>
//               <Typography variant="body2">Offer Ending: {card.endDate}</Typography>
//               <Button variant="contained" color="success">Read more</Button>
//             </Content>
//           </StyledCard>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Benefit;


import React from 'react'
import { Link } from 'react-router-dom'
export default function Benefit() {
  const postData = JSON.parse(localStorage.getItem('postData'))
  if(!postData){
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>No Post Available</h2>
      <Link to="/benefitpostform">
        <button style={buttonStyle}>Make a Post</button>
      </Link>
    </div>
    )
  }
  return (
    <div style={{ textAlign: 'center', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Student Benefits</h2>
      <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '20px', textAlign: 'left' }}>
        <h3>{postData.newsTitle}</h3>
        <p><strong>Company:</strong> {postData.companyName}</p>
        <p><strong>Offer Start:</strong> {postData.offerStart}</p>
        <p><strong>Offer End:</strong> {postData.offerEnd}</p>
        <img src={postData.coverPhoto} alt="Cover" style={{ width: '100%', borderRadius: '4px' }} />
        <p style={{ marginTop: '10px' }}>{postData.text}</p>
      </div>
      <Link to="/">
        <button style={buttonStyle}>Make Another Post</button>
      </Link>
    </div>
  )
}
const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
};

// import React, { useState } from 'react';
// import BenefitPostForm from './BenefitPostForm';
// import BenefitPostDetails from './BenefitPostDetails';
// // import PostForm from './PostForm';
// // import PostDetails from './PostDetails';

// const Benefit = () => {
//   const [post, setPost] = useState(null);

//   const handlePostSubmit = (formData) => {
//     setPost(formData);
//   };

//   return (
//     <div style={appStyles.container}>
//       {!post ? (
//         <BenefitPostForm onSubmit={handlePostSubmit} />
//       ) : (
//         <BenefitPostDetails post={post} />
//       )}
//     </div>
//   );
// };

// const appStyles = {
//   container: {
//     padding: '20px',
//   },
// };

// export default Benefit;



