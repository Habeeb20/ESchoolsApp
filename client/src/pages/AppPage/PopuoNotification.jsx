import React, { useState, useEffect } from 'react';
import { Box, Button, Fade, Typography, Paper } from '@mui/material';
import styled from 'styled-components';

const PopupNotification = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 1000); // Open the popup after 1 second
  }, []);

  return (
    <Fade in={open} timeout={1000}> 
      <StyledPaper elevation={4}>
        <Typography style={globalStyles} variant="h4" gutterBottom>
          Welcome to ESchools Application
        </Typography>
        <Typography style={globalStyles} variant="body1" gutterBottom>
          This application handles school management for schools, ordering and searching for a book of your choice, 
          information about tertiary institutions in Nigeria, and also gives room for students that want to apply for a job 
          and teachers that want to be hired for a teaching job.
        </Typography>
        <ButtonContainer>
          <StyledButton variant="contained" color="primary" href="/landinghome">
            User
          </StyledButton>
          <StyledButton variant="contained" color="secondary" href="/">
            Sch Management
          </StyledButton>
        </ButtonContainer>
      </StyledPaper>
    </Fade> 
  );
};
const globalStyles = {
  fontSize: '1.8em', 
};

const StyledPaper = styled(Paper)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  width: 80%;
  max-width: 600px;
  text-align: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const ButtonContainer = styled(Box)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const StyledButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 50px;
`;

export default PopupNotification;
