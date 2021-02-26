import { Component, } from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components';


const BlockDiv = styled.div`
    display : flex;
    border: 2px solid white;
` 


class Block extends Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <BlockDiv>
                hey
            </BlockDiv>
        )
    }




}

export default Block;