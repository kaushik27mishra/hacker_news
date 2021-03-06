import React,{Component} from 'react'
import {getStoryIds} from '../Services/Api'
import Story from '../Components/Story'
export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            storyIds:[]
        }

    }

    componentDidMount() {
        getStoryIds().then(data => {
            this.setState({
                storyIds:data
            })
        })
    }
    
    render() {
        return (
            <div>
                {this.state.storyIds.map((storyIds) => {
                    return <Story storyid={storyIds} key={storyIds}/>
                })}
            </div>
        )
    }
}