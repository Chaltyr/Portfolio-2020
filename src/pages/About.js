import React from 'react';
import { Container } from 'reactstrap';
import Bars from '../components/barchart'

const About = () => {


    return (

        <div>
            <Container>
                <Container>
                  <p>
                    My name is Louis Wong. I am a Full-stack web developer with a bachelor's degree in Robotics and Mechatronics. I am interested in 
                    advanced robotics applications and have decided to delve into web app development in order to break into the robotics industry. 
                    I still have a lot to learn but I am ready and willing. 
                  </p>
                </Container>
                <Container>
                  <Bars/>
                </Container>
            </Container>
            This is the About page!!
        </div>
    )
}

export default About