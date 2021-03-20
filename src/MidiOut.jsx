
import React,{ Component } from "react";
import * as WebMidi from "webmidi";

//https://github.com/djipco/webmidi




class MidiOut extends Component {
    

    constructor(props){
        super(props);

        console.log("search box imported");
        this.state = {
            inputs : [],
            outputs: [],
            currentOutput : null,
            
        }
     
        this.SetupMidi = this.SetupMidi.bind(this);   
        this.HandleInChange=this.HandleInChange.bind(this);
        this.HandleOutChange =  this.HandleOutChange.bind(this);
        this.Sendnotes =  this.Sendnotes.bind(this)
        this.SetupMidi()
    };

    

    Sendnotes = async (output) => {

        const Note  = (output) =>{
            console.log("NOTE")
            output.playNote("G4","all", {velocity: 1})
            .stopNote("G4", "all", {time: 400});    // After 1.2 s.
        }
        console.log("seeend noootes");
        //  Loop and detect hands
        setInterval(() => {
            if(output === null){
                console.log("outnuuuulll")
            }
            else{
                Note(output);
            }
              

        }, 500);
      };

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
                WebMidi.inputs.map((out,index) =>  optionsIn.push(<option value = {WebMidi.inputs[index].name} >{WebMidi.inputs[index].name}</option>));
                WebMidi.outputs.map((out,index) =>  optionsOut.push(<option value = {WebMidi.outputs[index].name}>{WebMidi.outputs[index].name}</option>));
                WebMidi.outputs.map((out,index) => console.log(WebMidi.outputs[index]));
                WebMidi.outputs.map((out,index) => console.log(WebMidi.outputs[index].name));
   
    
            }
        });
        setTimeout(() => {this.setState({ outputs: optionsOut , inputs: optionsIn});}, 3000);
        
    } 

    HandleInChange(e) {
        let x = e.target.value;
        document.getElementById("demo").innerHTML = "You selected: " + x;
    }    
    HandleOutChange(e) {
        let x = e.target.value;
        document.getElementById("demo").innerHTML = "You selected: " + x;
        var midiOutput = WebMidi.getOutputByName(x);
        console.log("new midi out")
        console.log(midiOutput)
        setTimeout(() => {this.setState({ currentOutput : midiOutput});}, 3000);
        this.Sendnotes(midiOutput);


    }



    
    render() {
        const {inputs, outputs}= this.state;   
        return (
          <div>
                <p>MIDI</p>
                <div>
                    Input
                    <select id = "selectInput" onChange={this.HandleInChange}>                 
                        {inputs}
                    </select>                   
                </div>
                <div>
                    Output
                    <select id = "selectOutput" onChange={this.HandleOutChange}>                 
                        {outputs}
                    </select>
                    
                </div>
                <p id="demo"></p>
          </div>
 
           )
        }

}

export default MidiOut;
