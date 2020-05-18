import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class About extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQFxa0XKhuFqfw/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=stFj4wEfV7G7UJ-MxzB-FQ4hs8t1ENCBQoFIzbbD9eU"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}> Chrisna Ly </h2>
                        <h4 style={{color: 'grey'}}> Software Developer </h4>
                        <hr style={{borderTop: '3px solid #2a4183', width: '50%'}}/>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Mamba Out.</p>
                        <hr style={{borderTop: '3px solid #2a4183', width: '50%'}}/>
                        <h5> Phone </h5>
                        <p>(253) 904-6646 </p>
                        <h5> Email </h5>
                        <p>ly.chrisna3@gmail.com </p>
                        <hr style={{borderTop: '3px solid #2a4183', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2> Education </h2>
                        
                            <Education
                                startYear={"Jan"}
                                endYear={"May 2020"}
                                schoolName={"Coding Dojo"}
                                schoolDescription="• Accumulated 1,000+ hours of intensive programming course work including building, testing, and debugging on Django, ASP .Net, and MERN.
                                • 200+ hours of Fullstack in-house development on web applications and other technical projects
                                • Languages: Python, C#, JavaScript, HTML, CSS, SQL
                                • Libraries/Frameworks/Tools: JQuery, Django, MongoDB, Express, React, Node.js, Mongoose, ASP.NET, .NET Core, Razor, Entity Framework Core, AJAX, JSON"
                                />
                            <Education 
                                startYear={2011}
                                endYear={2015}
                                schoolName={"University of Washington"}
                                schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                />

                            <hr style={{borderTop: '3px solid #2a4183'}} />
                        <h2> Experience </h2>

                            <Experience 
                                startYear={2011}
                                endYear={2015}
                                jobName="First Job"
                                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                />
                            
                            <Experience 
                                startYear={2011}
                                endYear={2015}
                                jobName="Second Job"
                                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                />
                        <hr style={{borderTop: '3px solid #2a4183'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill="JavaScript"
                            progress={100}
                        />
                        <Skills 
                            skill="C#"
                            progress={90}
                        />
                        <Skills 
                            skill="React"
                            progress={100}
                        />
                        <Skills 
                            skill="Python"
                            progress={85}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={80}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;