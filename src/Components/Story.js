import React, { Component } from 'react'
import {getStory} from '../Services/Api'

export default class Story extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    

    componentDidMount() {
        getStory(this.props.storyid).then((data) =>  {
            console.log(data);
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
