// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Block from "./Components/basecomponent"

import styled from 'styled-components';
const Blocks =[
  {
      id : '0webcaminput',
      name : 'Webcam Input',
      type : 'webcaminput'       
  },
  {
      id : '1coco',
      name : 'Coco',
      type : 'coco'       
  },
  {
      id : '2coco2midi',
      name : 'Coco to Midi',
      type : 'coco2midi'       
  },
  {
      id : '3midioutput',
      name : 'Midi Output',
      type : 'midioutput'       
  },

]

const BlocksList =  styled.ul`
  list-style: none;
  padding-left: 0;
`




function App() {

  const [blocks, updateBlocks] = useState(Blocks);

  function handleOnDragEnd(result){
    if(!result.destination) return;
  
    const items =Array.from(blocks);
    const [reorderedItem] = items.splice(result.source.index,1);
    items.splice(result.destination.index, 0,reorderedItem);
    updateBlocks(items);
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <p>Sweet Dawn Web Implementation v0</p>
        <DragDropContext onDragEnd = {handleOnDragEnd}>
          <Droppable droppableId = "blocks">
          {(provided) =>(
            <BlocksList className = "blocks" {...provided.droppableProps} ref={provided.innerRef}>
              {blocks.map(({id,name,type},index) =>{
                return(
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) =>(
                      <li ref={provided.innerRef} 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps}>
                        <Block
                          name ={name}
                          id={id}
                          type={type} 
                          input = {blocks[index - 1]}                         
                        />
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </BlocksList>
          )}  
          </Droppable>
        </DragDropContext>



      </header>
    </div>
  );
}

export default App;
