import React, { Component } from "react";
import  {CLASSES} from './CocoClasses.ts';
class DataVis extends Component {
    
    constructor(props){
        super(props);
    };  
    
    render() {
        //const {values, names}= this.state; 
        const detections = this.props.detections ; 

        const detectionTypes = detections
            .map(dataItem => dataItem.class) // get all media types
            .filter((name, index, array) => array.indexOf(name) === index); // filter out duplicates
        
        const counts = detectionTypes
        .map(classname => ({
            name: classname,
            count: detections.filter(item => item.class === classname).length
        }));

        const tv = detections.filter(item => item.class === "tv").length
        const laptop = detections.filter(item => item.class === "laptop").length
        const phone = detections.filter(item => item.class === "cell phone").length
        const person = detections.filter(item => item.class === "person").length

        
        
        return (
            <div>
                <h2>DATAVIS</h2>

                <div>
                    <h3>Detected Stuff</h3>
                    {counts.map((detections,index) => <p>{detections.name} : {detections.count}</p>)}
                </div>
                <div>
                    <h3>Cool Values</h3>
                    Screen Per Personne :{(tv + laptop + phone)/ (Math.max(person,1) )}

                </div>

            </div>
        )
    }
}

export default DataVis;