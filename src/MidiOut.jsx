
import React, { useRef, useState, useEffect } from "react";
import * as WebMidi from "webmidi";
import { Component } from 'react';



class MidiOut extends Component {
    

    constructor(props){
        super(props);

        console.log("search box imported");
        this.state = {
            inputs : [],
            outputs: [],
            
        }
     
        this.SetupMidi = this.SetupMidi.bind(this);   
        this.SetupMidi()
    }
    SetupMidi() {
        let optionsOut = [];
        let optionsIn = [];
        WebMidi.enable(function (err) {
            if (err) {
                console.log("WebMidi could not be enabled.", err);
            } else {
                console.log("WebMidi enabled!");
                console.log(WebMidi.inputs);
                console.log(WebMidi.outputs);
                console.log(WebMidi.outputs.length);
                WebMidi.inputs.map((out,index) =>  optionsIn.push(<option>{WebMidi.inputs[index].name}</option>));
                WebMidi.outputs.map((out,index) =>  optionsOut.push(<option>{WebMidi.outputs[index].name}</option>));
                WebMidi.outputs.map((out,index) => console.log(WebMidi.outputs[index]));
                WebMidi.outputs.map((out,index) => console.log(WebMidi.outputs[index].name));
   
    
            }
        });
        setTimeout(() => {this.setState({ outputs: optionsOut , inputs: optionsIn});}, 3000);
        
    } 

    
    render() {
        const {inputs, outputs}= this.state   
        return (
          <div>
                <p>MIDI</p>
                <div>
                    Input
                    <select>                 
                        {inputs}
                    </select>
                    
                </div>
                <div>
                    Output
                    <select>                 
                        {outputs}
                    </select>
                    
                </div>
          </div>
 
           )
        }

}

export default MidiOut;
