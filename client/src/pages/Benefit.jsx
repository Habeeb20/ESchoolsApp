import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  margin: '20px 0',
  display: 'flex',
  flexDirection: 'row',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
});

const Content = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
});

const SearchBar = styled(TextField)({
  margin: '20px 0',
  width: '100%',
  maxWidth: '600px',
});

const Header = styled(Typography)({
  textAlign: 'center',
  marginBottom: '20px',
});

const NavBar = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 0',
});

const cardsData = [
  {
    img: 'link-to-image-1.jpg',
    company: 'Chicken Republic of Nigeria',
    offer: '10% OFF',
    details: 'Get 10% off on your favorite meal...',
    startDate: '1st Jan 2024',
    endDate: '31st Dec 2024',
  },
  {
    img: 'link-to-image-2.jpg',
    company: 'Shop Local',
    offer: '10% OFF',
    details: 'Save 10% on your purchase...',
    startDate: '1st Jan 2024',
    endDate: '31st Dec 2024',
  },
  // Add more card data as needed
];

const Benefit = () => {
  return (
    <div style={{ padding: '20px' }}>
      <NavBar>
        <SearchBar variant="outlined" placeholder="Search benefit" />
        <Button variant="contained" color="primary">Map out</Button>
        <Button variant="contained" color="secondary">Create Post</Button>
      </NavBar>
      <Header variant="h4">
        Over the world there are always opportunities for students rising, find many of them here or post them here.
      </Header>
      <Grid container direction="column" alignItems="center">
        {cardsData.map((card, index) => (
          <StyledCard key={index}>
            <CardMedia
              component="img"
              image={card.img}
              alt={card.company}
              style={{ width: '200px', height: '200px' }}
            />
            <Content>
              <Typography variant="h6">{card.company}</Typography>
              <Typography variant="h5">{card.offer}</Typography>
              <Typography variant="body2">{card.details}</Typography>
              <Typography variant="body2">Offer Starting: {card.startDate}</Typography>
              <Typography variant="body2">Offer Ending: {card.endDate}</Typography>
              <Button variant="contained" color="success">Read more</Button>
            </Content>
          </StyledCard>
        ))}
      </Grid>
    </div>
  );
};

export default Benefit;
