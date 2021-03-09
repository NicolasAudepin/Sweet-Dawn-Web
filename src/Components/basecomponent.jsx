import React, { Component, } from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components';
import WebcamBlock from './webcam-component';
//import CocoBlock from './coco-component'

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
    state= {output : false}
    
    constructor(props){
        super(props);
        //console.log(this.props.name);
        //console.log(this.props.input);
        this.handleOutput = this.handleOutput.bind(this)

    }

    handleOutput(output) {
        this.setState({output : output})
        console.log("set state")
        console.log(this.state.output)
      } 


    render(){
        
        //console.log("render");
        //console.log(this.props.name);
        //console.log(this.props.input);
        return(
            <BlockDiv>
                <BlockHeader>
                    <p>{this.props.name}</p>
                    <p>{this.props.type}</p>
                    <p>{this.props.id}</p>
                </BlockHeader>

                {(this.props.type==="webcaminput") && <WebcamBlock setOutput = {this.props.handleOutput} />}
                
            </BlockDiv>
            ///{(this.props.type==="cocodetection") && <CocoBlock setOutput = {this.props.handleOutput}/>}
        )
    }

}

export default Block;