import React, { Component } from 'react'
import { Div, Text,Icon, Input, Button } from "atomize";

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    
    render() {
        const { isLoading } = this.state;
        return (
            <Div 
                d="flex"
                bg="info600"
                align="center"
                shadow="5"
                >
                <Icon name="LeftArrow" color="#382683" size="40px" />
                <Icon name="RightArrow" color="#382683" size="40px" />
                <Text 
                    tag="h2" 
                    textSize="heading"
                    textColor="info900"
                    hoverTextColor="black900"
                    cursor="pointer"
                    >
                    Hacker News
                </Text>
        {
                // <Div 
                //     pos="static"
                //     p={{l:"50rem"}}
                // >
                //     <Input
                //         placeholder="Search"
                //         h="2rem"
                //         suffix={
                //             <Button
                //                 pos="absolute"
                //                 onClick={() => this.setState({ isLoading: !isLoading })}
                //                 bg="transparent"
                //                 w="2rem"
                //                 top="0"
                //                 right="0"
                //                 p={{b:'0.5rem'}}
                //                 rounded={{ r: "md" }}
                //             >
                //         <Icon
                //             name={isLoading ? "Loading" : "Search"}
                //             color={isLoading ? "gray900" : "black"}
                //             size="20px"
                //         />
                //         </Button>
                //         }
                //     />        
                // </Div>
        }
            </Div>
        )
    }
}
