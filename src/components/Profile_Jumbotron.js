import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const Jumbo3 = (props) => {
  return (
    <div >
      <Jumbotron style={{
        backgroundColor: 'rgba(192, 192, 192, 0.8)'

        // backgroundColor: 'red'
    }} fluid>
        <Container  fluid>
          <h1 className="display-3">Profile</h1>
          <p className="lead">A brief introduction</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo3;