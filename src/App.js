import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"> <i class="fas fa-code" width="50"> Chrisna Ly </i> </Link>} scroll>
            <Navigation>
                {/* <Link to="/"><i class="fas fa-code" width="50"> Chrisna Ly </i> </Link> */}
                <Link to="/aboutme"> About Me</Link>
                {/* <Link to="/resume"> Resume </Link> */}
                <a target="_blank" href="https://drive.google.com/file/d/10xm7GsmJXhAvzcjXDiH7B_zi3StJXAK3/view?usp=sharing"> Resume </a>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>}>
            <Navigation>
              <Link to="/aboutme"> About Me </Link>
              <a target="_blank" href="https://drive.google.com/file/d/10xm7GsmJXhAvzcjXDiH7B_zi3StJXAK3/view?usp=sharing"> Resume </a>
              <Link to="/projects"> Projects </Link>
              <Link to="/contact"> Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
