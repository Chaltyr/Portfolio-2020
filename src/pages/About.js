import React from 'react';
import { Container } from 'reactstrap';
import Bars from '../components/Barchart'
import Jumbo3 from '../components/Profile_Jumbotron'

const About = () => {


    return (
        <div >
          <Jumbo3/>
            <Container style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '50px',
              border: '1px solid #eaeae',
              borderRadius: '10px',
              paddingRight: '10px',
              paddingLeft: '10px',
              paddingTop: '30px',
              paddingBottom: '30px',
              backgroundColor: 'rgba(192,192,192,0.8)'
              // backgroundImage: `url(${'static/images/avatar/profile.jpg'})`
            }}>
                <Container style={{
                  marginRight: '20px',
                  
                }}>
                  <p style={{
                    fontSize: 'large',
                    color: 'black',
                    fontWeight: 'strong',
                  }}>
                    My name is Louis Wong. I am a Full-stack web developer with a bachelor's degree in Robotics and Mechatronics. I am interested in 
                    advanced robotics applications and have decided to delve into web app development in order to break into the robotics industry. 
                    I still have a lot to learn but I am ready and willing. 
                  </p>
                </Container>
                <Container>
                  <Bars/>
                </Container>
            </Container>
            <Container style={{
              marginTop: '10px',
              marginBottom: '10px'
            }}>
              <button style={{
                marginRight: '20px'
              }}>
                <a href="https://github.com/Chaltyr?tab=repositories">
                  Github
                </a>                
              </button>
              <button>
              <a href="www.linkedin.com/in/louis-wong-king-dinn-22a156118">
									LinkedIn
							</a>
              </button>
            </Container>
        </div>
    )
}

export default About