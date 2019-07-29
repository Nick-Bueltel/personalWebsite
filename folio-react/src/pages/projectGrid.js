import React from 'react'
import {Grid, Image} from 'semantic-ui-react'


class ProjectGrid extends React.Component{
    render(){
        return(
    <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='https://i.imgur.com/9S4nlmb.png' href='https://austinstreetscenes.herokuapp.com' />
        <a href="https://autinstreetscenes.herokuapp.com"> Austin Street Scenes (Django, HTML, CSS, MongoDB) </a>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://i.imgur.com/Luku1q4.png' href='https://thebrewreview.herokuapp.com' />
        <a href="https://thebrewreview.herokuapp.com"> The Brew Review (Express, Node, HTML, CSS, PostgreSQL) </a>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://i.imgur.com/SehZynG.png' href='https://nick-bueltel.github.io/puzzleHorrorGame/'/>
        <a href="https://nick-bueltel.github.io/puzzleHorrorGame"> Puzzle Horror Game (HTML, CSS, JS) </a>
      </Grid.Column>
    </Grid.Row>


    </Grid>
        )
    }

}

export default ProjectGrid 

