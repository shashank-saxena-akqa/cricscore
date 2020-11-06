import * as React from 'react';


function Header(props: any) {
  return (
    <h1 className="primary-header"> {props.text} </h1>
  )
}

Header.displayName = 'Header';
export default Header;