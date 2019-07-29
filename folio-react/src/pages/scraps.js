import React from 'react'
import { Button } from 'semantic-ui-react';

class ReactScraps extends React.Component{
    state = {
        rShow : false, 
        rSite: '',

    }
    goToRandomShow = () => {
        this.state.rShow === true ? this.setState({rShow : false}) : this.setState({rShow : true})
        this.goToRandom()
    }
    
    goToRandom = () => {
        const siteArray = [
            'http://uncooth-scrambler.surge.sh', 
            'http://brown-market.surge.sh',
        
        ]
        var rand = siteArray[Math.floor(Math.random() * siteArray.length)];
        console.log(rand)
        this.setState({rSite : rand})
    }
    
    render(){


        return(
            <div>

            <Button onClick={this.goToRandomShow} href={this.state.rSite} target="_blank">Go To a Random project ?</Button>
            

            
            
            </div>  
            )
            
    }

}

export default ReactScraps 