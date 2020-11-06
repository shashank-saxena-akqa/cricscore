import * as React from 'react';

const Todoitem = (props : any) => 
  <div>
  <input type="checkbox" />
    <p> {props.text}</p>
  </div>


export default Todoitem;