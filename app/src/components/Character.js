import React from 'react';
import '../App.css';
import styled from 'styled-components'
import {
  Card, CardText, CardSubtitle,CardImg,
  CardTitle, 
} from 'reactstrap';




export default function Character({data}) {

    return (
        <div className="character-container">
  
            <StyledCard  class='card'>
               <CardImg top width="100%" src={data.image} alt="Card image cap" />
              <CardTitle>{data.name}</CardTitle>
              <CardSubtitle >status : {data.status}</CardSubtitle>
              <CardText>
                species: {data.species} <br/>
                gender: {data.gender} <br/>
                origin: {data.origin.name} <br/>
                location: {data.location.name} <br/>
              </CardText>
            </StyledCard>
        </div>
      
      );



}


const StyledCard = styled.div`
padding: 30px;
margin-top: 10px;
margin-left: auto;
margin-right: auto;
width: 200px;
background-color: rgb(252, 221, 165);
color: slategrey;
font-family: 'Orbitron', sans-serif;
margin-bottom: 30px;
       `;