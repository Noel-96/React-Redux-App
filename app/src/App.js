import React, {useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL }  from './constants'

import Character from './components/Character.js';
import { Container, Row, Col, Button } from 'reactstrap';
import { getCharacters } from "./actions";
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
    props.getCharacters();
  }, [props.getCharacters])



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
        //onClick={() => prevPage()}
        >Previous</Button>
        </LeftContainer>
          <CenterContainer class="Container">
            {props.characterState.map(char => {
              return <Character key={char.id} data={char}/>
                })}
          </CenterContainer>
          <RightContainer>
            <Button color="primary" size="lg" 
           // onClick={() => nextPage()}
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

const mapStateToProps = (state) => {
  //console.log("characterState in app success:",state.appReducer.characterState)
  return {
     characterState: state.appReducer.characterState,
     pageNumberState: state.appReducer.pageNumberState,
     loading: state.appReducer.loading,
  }   
};

const mapDispatchToProps =  {getCharacters}

export default connect(mapStateToProps, mapDispatchToProps)(App);
