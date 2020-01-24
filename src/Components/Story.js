import React, { Component } from 'react'
import {getStory} from '../Services/Api'
import { Div, Text } from "atomize";

export default class Story extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    

    componentDidMount() {
        getStory(this.props.storyid).then((data) =>  {
            data && data.url && this.setState({...data}, () => {
                console.log(this.state);
            })
        })
    }

    render() {
        return (
            <Div m="3rem" p={{ b: "1rem" }}>
                <Div bg="white" shadow="4" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
                    <Div
                        border={{ b: "1px solid" }}
                        borderColor="gray300"
                        p={{ b: "0.75rem" }}
                    >
                        <Text textSize="title" textWeight="500">
                            {this.state.title}
                        </Text>
                        <Text textSize="caption" textColor="light">
                            By- {this.state.by}, Date- {Date(this.state.date)}
                        </Text>
                    </Div>
                    <Div>
                        <Text textSize="caption" textColor="dark">
                            {this.state.text}
                        </Text>
                        <a href={this.state.url}>For more details click here!</a>
                    </Div>
                </Div>
            </Div>
        )
    }
}
