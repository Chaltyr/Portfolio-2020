import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const Jumbo2 = (props) => {
  return (
    <div >
      <Jumbotron style={{
        backgroundColor: 'rgba(192, 192, 192, 0.8)'

        // backgroundColor: 'red'
    }} fluid>
        <Container  fluid>
          <h1 className="display-3">Projects</h1>
          <p className="lead">These are the few projects that I have worked on or completed</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo2;