import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Typical from 'react-typical';

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQFxa0XKhuFqfw/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=stFj4wEfV7G7UJ-MxzB-FQ4hs8t1ENCBQoFIzbbD9eU"
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            {/* <h1> Full Stack Web Developer </h1> */}
                            <h1>
                                <Typical 
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        "Welcome!",
                                        1000,
                                        "Hi, I'm Chrisna Ly",
                                        1000,
                                        "I'm a Full Stack Developer 💻",
                                        1000,
                                        "I'm a Creator",
                                        1000,
                                        "I'm a Designer",
                                        1000,
                                        "I'm a student of life",
                                        1000,
                                    ]}
                                />
                            </h1>

                        <hr/>

                        <p> HTML/CSS | JavaScript | C# | React | NodeJS | Express | MongoDB | Python </p>
                    <div className="social-links">

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/chrisna-ly/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                        
                        {/* Github */}
                        <a href="https://github.com/chrisnaly" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github-square" aria-hidden="true" />
                        </a>

                    </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;