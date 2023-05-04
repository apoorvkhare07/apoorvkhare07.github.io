import React, { Component } from 'react';
import '../App.css';
import Main from '../main.js'
import Container from 'react-bootstrap/Container'
import List from '../list.js'
import Project from '../project.js'
import Article from '../articles.js'
import TopNav from '../nav2.js'


class Home extends Component {
  render() {
    return (
    
        <Container>
          <TopNav />
        <Main />
        </Container>
        

  );
  }
}

export default Home;