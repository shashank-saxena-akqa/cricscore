import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './header'
import CustomDate from './custom-date'
import CustomTime from './custom-time'
import FruitLoops from './fruit-loops'
import MyInfo from './MyInfo'
import App from './App'
import Todoitem from './Todoitem'
import State from './State'
import CricState from './CrciState'
import ScoreCard from './ScoreCard'
import OldCrciState from './OldCrciStat'


ReactDOM.render(
  <div>
    <Header text="Hello there Header" />
    <CustomDate />
    <CustomTime />
    <FruitLoops />
    <App />
    <Todoitem text="item1"/>
    <Todoitem text="item2"/>
    <Todoitem text="item3"/>
    <Todoitem text="item4" />
    <State />
    <h1> Old Matches</h1>
    <OldCrciState />
    <h1> Upcoming Matches Twenty20Matches</h1>
    <CricState type="Twenty20"/>
    <h1> Upcoming Matches Other</h1>
    <CricState type=""/>
    <p>  REACT APPLICATION    </p>
    <a href="#"> Click Here</a>
  </div>,
  document.querySelector('#root')
)

