import * as React from 'react';

function CustomTime() { 
  let [time, setTime] = React.useState("");
  let getTime = () => { 
    setTime(new Date().toLocaleTimeString());
  } 
  return (
    <div>
      {time}
      <button onClick={getTime}>Get the Time</button>
    </div>
  )
}
CustomTime.displayName = "CustomTime";

export default CustomTime