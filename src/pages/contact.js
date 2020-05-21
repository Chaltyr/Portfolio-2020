import React from 'react';
import { Container } from 'reactstrap';

const Contact = () => {
    return (
        <div className='contact'  style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50vh',
            fontSize: 'large',
            fontWeight: 'bolder',
        }}>
            <Container style={{
                border: '1px solid #eaeae',
                borderRadius: '10px',
                backgroundColor: 'rgba(192,192,192,0.8)'

            }}>
                <p className="p">
                    Phone: 01131961517
                </p>
                <p>
                    Email: louis21@hotmail.sg
                </p>
            </Container>
            <style jsx>{`
            @keyframes fadeInAnimation { 
                0% { 
                    opacity: 0; 
                } 
                100% { 
                    opacity: 1; 
                  } 
                }
            
            .contact {
                color: black;
                animation: fadeInAnimation ease 3s;
                animation-iteration-count: 1; 
                animation-fill-mode: forwards;
            }

            .p {
                padding-top: 10px;
            }

            

            
        `}</style>
        </div>
    )
}

export default Contact