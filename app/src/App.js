import React, {useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL }  from './constants'

import Character from './components/Character.js';
import { Container, Row, Col, Button } from 'reactstrap';
import { getCharacters, prevPage, nextPage } from "./actions";
import { connect } from "react-redux";
import styled from 'styled-components'

const App = (props) => {

 
  const [rickAndMortyCharacters, setrickAndMortyCharacters] = useState([])
  const [ pageNumber , setpageNumber ] = useState(1)


  useEffect(() => {
    // axios.get(`${BASE_URL} + ${pageNumber}`)
    //   .then(response =>  setrickAndMortyCharacters(response.data.results)
    //   )
    //   .catch(err => console.log(err))
    props.getCharacters(props.state.pageNumberState);
  }, [props.state.characterState])

  // console.log("state props in app.js",props)
  //console.log("state props in app.js",props.getCharacters())
  // function prevPage() {
  //   if (pageNumber == 1){

  //   } else {
  //      setpageNumber(pageNumber -1)
  //   }  
  // }

  // function nextPage() {
  //    setpageNumber(pageNumber + 1)
  // }


  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      <div className="contain-grid">
      <MainContainer xs="2">
        <LeftContainer>
        <Button color="primary" size="lg" 
        onClick={props.state.prevPage(props.state.pageNumberState)}
        >Previous</Button>
        </LeftContainer>
          <CenterContainer class="Container">
            {props.state.characterState.map(char => {
              return <Character key={char.id} data={char}/>
                })}
          </CenterContainer>
          <RightContainer>
            <Button color="primary" size="lg" 
           onClick={props.state.nextPage(props.state.pageNumberState)}
            >Next</Button>    
          </RightContainer>
      </MainContainer>
     </div>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  left: 25%;
  top: 50%;
`
const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  right: 25%;
  top: 50%;
  `
const CenterContainer = styled.div`
`

function mapStateToProps(state){
  console.log("State mapStateToProps",state)
  return {
    state
  }   
};

const mapDispatchToProps =  {
   getCharacters,
   prevPage,
   nextPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
