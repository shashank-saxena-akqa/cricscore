import * as React from 'react';

function MyInfo() {
  const name = "Shashank Saxena"
  return <div>
    <h1> Hi {name} </h1>
    <p> This is about me</p>
    <ul> 
      <li>Bali</li>
      <li>Himachal</li>
      <li>Kalgha</li>
    </ul>
  </div>
}

export default MyInfo;