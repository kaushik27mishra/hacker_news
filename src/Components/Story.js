import React, { Component } from 'react'
import {getStory} from '../Services/Api'
import { Div, Text } from "atomize";

export default class Story extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            by:"",
            title:"",
            text:""
        }
    }
    

    componentDidMount() {
        getStory(this.props.storyid).then((data) =>  {
            this.setState({
                title: data.title,
                text: data.text
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
                            {this.state.by}
                        </Text>
                    </Div>
                    <Div>
                            <Text textSize="caption" textColor="dark">
                                {this.state.text}
                            </Text>
                    </Div>
                </Div>
            </Div>
        )
    }
}
