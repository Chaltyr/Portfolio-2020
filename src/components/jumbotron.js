import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const Jumbo = (props) => {
  return (
    <div >
      <Jumbotron style={{
        backgroundColor: 'red'
    }} fluid>
        <Container  fluid>
          <h1 className="display-3">Web Development is but the first step</h1>
          <p className="lead">Welcome to my portfolio, please enjoy your stay</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;