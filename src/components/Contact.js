import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    {/* <Cell col={6}>
                        <h2> Chrisna Ly </h2>
                        <img
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQFxa0XKhuFqfw/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=stFj4wEfV7G7UJ-MxzB-FQ4hs8t1ENCBQoFIzbbD9eU"
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </Cell> */}
                    <Cell col={6}>
                        <h2> Contact Me </h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fas fa-phone-square-alt" aria-hidden="true" />
                                        (253) 904-6646
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fas fa-envelope-square" aria-hidden="true" />
                                        ly.chrisna3@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fab fa-github-square" aria-hidden="true" />
                                        <a href="https://github.com/chrisnaly" rel="noopener noreferrer" target="_blank" style={{color: 'rgb(31, 35, 33)'}}> github.com/chrisnaly </a>
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fab fa-linkedin" aria-hidden="true" />
                                        <a href="https://www.linkedin.com/in/chrisna-ly/" rel="noopener noreferrer" target="_blank" style={{color: 'rgb(31, 35, 33)'}}> Connect with me! </a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;