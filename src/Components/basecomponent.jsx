import React, { Component, } from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components';
import WebcamBlock from './webcam-component'

const BlockDiv = styled.div`
    display : flex;
    background-color: #2b313d;
    
    flex-direction: column;
    border: 2px solid white;
    
` 
const BlockHeader = styled.div`
    display : flex;
    background-color: #404652;
    
    flex-direction: row;
    border-bottom: 2px solid white;
    padding: 5px;
` 

class Block extends Component{
    constructor(props){
        super(props);
        console.log(this.props.name);
        console.log(this.props.input);

    }


    render(){
        
        console.log("render");
        console.log(this.props.name);
        console.log(this.props.input);
        return(
            <BlockDiv>
                <BlockHeader>
                    <p>{this.props.name}</p>
                    <p>{this.props.type}</p>
                    <p>{this.props.id}</p>
                </BlockHeader>

                {(this.props.type=="webcaminput") && <WebcamBlock/>}
            </BlockDiv>
        )
    }

}

export default Block;