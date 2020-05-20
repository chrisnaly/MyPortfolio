import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                //<div> <h1> Python Projects </h1> </div>
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(/images/officeescape.png) center/cover'}}> Office Escape </CardTitle>
                        <CardText>
                            Traditonal 2D platform style game built using Pygame
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/chrisnaly/OfficeEscape" target="_blank"> GitHub </Button>
                            {/* <Button colored> GitHub </Button>
                            <Button colored> GitHub </Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* C# Projects */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(images/RPG.png) center/cover'}}> Flat Earth </CardTitle>
                        <CardText>
                            An open world RPG game created/designed using Unity 3D
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/chrisnaly/OpenWorld" target="_blank"> GitHub </Button>
                            {/* <Button colored> GitHub </Button>
                            <Button colored> GitHub </Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* React Projects */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(/images/hangman.png) center/cover'}}>Hangman</CardTitle>
                        <CardText>
                            Classic Hangman game created with React Native
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/chrisnaly/Hangman" target="_blank"> GitHub </Button>
                            <Button colored href="https://clybucket.s3-us-west-2.amazonaws.com/index.html" target="_blank"> Play </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(/images/survey.png) center/cover'}}> Covid survey </CardTitle>
                        <CardText>
                        Survey with the ability to use voice recognition to complete answers. Along with face detection API to sense emotion 
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/chrisnaly/FaceRecSurvey" target="_blank"> GitHub </Button>
                            {/* <Button colored> GitHub </Button>
                            <Button colored> GitHub </Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


                    {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png) center/cover'}}> Python Project #2 </CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub </Button>
                            <Button colored> GitHub </Button>
                            <Button colored> GitHub </Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> */}
                </div>
            )
        }
        // else if(this.state.activeTab === 1){
        //     return(
        //         //<div> <h1> React Projects </h1> </div>
        //         <div className="projects-grid">
        //             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        //                 <CardTitle style={{color: 'black', height: '176px', background: 'url(/images/hangman.png) center/cover'}}>Hangman</CardTitle>
        //                 <CardText>
        //                     Traditonal hangman game with a twist
        //                 </CardText>
        //                 <CardActions border>
        //                     <Button colored href="https://github.com/chrisnaly/Hangman"> GitHub </Button>
        //                     {/* <Button colored> GitHub </Button> */}
        //                 </CardActions>
        //                 <CardMenu style={{color: '#fff'}}>
        //                     <IconButton name="share" />
        //                 </CardMenu>
        //             </Card>
        //             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        //                 <CardTitle style={{color: 'black', height: '176px', background: 'url(/images/survey.png) center/cover'}}> Covid survey </CardTitle>
        //                 <CardText>
        //                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        //                 </CardText>
        //                 <CardActions border>
        //                     <Button colored href="https://github.com/chrisnaly/FaceRecSurvey"> GitHub </Button>
        //                     {/* <Button colored> GitHub </Button>
        //                     <Button colored> GitHub </Button> */}
        //                 </CardActions>
        //                 <CardMenu style={{color: '#fff'}}>
        //                     <IconButton name="share" />
        //                 </CardMenu>
        //             </Card>
        //         </div>
        //     )
        // }
        // else if(this.state.activeTab === 2){
        //     return(
        //         //<div><h1> C# Projects </h1></div>
        //         <div className="projects-grid">
        //             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        //                 <CardTitle style={{color: 'black', height: '176px', background: 'url(images/RPG.png) center/cover'}}> Flat Earth </CardTitle>
        //                 <CardText>
        //                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        //                 </CardText>
        //                 <CardActions border>
        //                     <Button colored href="https://github.com/chrisnaly/OpenWorld"> GitHub </Button>
        //                     <Button colored> GitHub </Button>
        //                     <Button colored> GitHub </Button>
        //                 </CardActions>
        //                 <CardMenu style={{color: '#fff'}}>
        //                     <IconButton name="share" />
        //                 </CardMenu>
        //             </Card>
        //         </div>
        //     )
        // }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab> Recent Projects </Tab>
                    {/* <Tab> Python </Tab>
                    <Tab> React </Tab>
                    <Tab> C# </Tab> */}
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;
