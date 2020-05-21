import React from 'react';
import Navbar from './Navbar'

const Layout = props => (
    <div className="layout">
        <main>
            <Navbar />
            {props.children}
        </main>
        <style jsx>{`
            @keyframes gradient {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }

            .layout {
                background-image: url(/static/images/wallpaper3.jpg);
                background-size: cover;
                // background-color: 'rgba(52, 52, 52, 0.8)'
                // background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                // background-size: 400% 400%;
                // animation: gradient 15s ease infinite;
                // background-color: black;
            }

            
        `}</style>
    </div>
);

export default Layout;