import React from 'react';
import './App.css';
import {Item} from 'semantic-ui-react'

function App() {
  return(
    <Item.Group>
      <Item>
          <Item.Image size="large" src='https://i.imgur.com/9S4nlmb.png'/>
          <Item.Content verticalAlign='middle'>
              <Item.Header as='a' href="https://austinstreetscenes.herokuapp.com" target="blank"> Austin Street Scenes (Django, HTML, CSS, MongoDB) </Item.Header>
          </Item.Content>
      </Item>
      <Item>
          <Item.Image size="large" src='https://i.imgur.com/Luku1q4.png'/>
          <Item.Content verticalAlign='middle'>
              <Item.Header as='a' href="https://thebrewreview.herokuapp.com" target="blank"> The Brew Review (Express, Node, HTML, CSS, PostgreSQL) </Item.Header>
          </Item.Content>
      </Item>
      <Item>
          <Item.Image size="large" src='https://i.imgur.com/SehZynG.png'/>
          <Item.Content verticalAlign='middle'>
              <Item.Header as='a' href="https://nick-bueltel.github.io/puzzleHorrorGame/" target="blank"> Puzzle Horror Game (HTML, CSS, JS) </Item.Header>
          </Item.Content>
      </Item>
    </Item.Group>
    
  )
}

export default App;
