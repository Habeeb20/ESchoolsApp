import React from 'react';
import styled from 'styled-components';
import FadeIn from '../../../FadeIn';
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(25% - 20px);
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h4`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 0.9em;
  color: #666;
  margin: 5px 0;
`;

const JoinButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #00ff00;
  color: black;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    background-color: #00e600;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  h3 {
    color: #333;
  }

  a {
    color: red;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const groups = [
  { name: 'IT news', link: 'https://chat.whatsapp.com/ITNewsGroupLink' },
  { name: 'Tech group', link: 'https://chat.whatsapp.com/TechGroupLink' },
  { name: 'Group', link: 'https://chat.whatsapp.com/GroupLink' },
  { name: 'Essential staff', link: 'https://chat.whatsapp.com/EssentialStaffLink' },
];

const Groups = () => {
  return (
    <div>
      <Header>
        <h3>Groups you may like</h3>
        <a href="#">See more</a>
      </Header>
      
      <CardContainer>
      
        {groups.map((group, index) => (
           
          <Card key={index}>
            
            <Title>{group.name}</Title>
            <Info>1 Member</Info>
            <Info>0 Posts today</Info>
            <JoinButton href={group.link} target="_blank">Join</JoinButton>
           
          </Card>
         
        ))}
       
      </CardContainer>
   
    </div>
  );
};

export default Groups;
