import * as React from 'react';

class State extends React.Component<{}, { count: number }> {
  constructor(props : any) {
    super(props);
    this.state = {
      count : 0,
    }
    this.handleclickminus = this.handleclickminus.bind(this)
    this.handleclick = this.handleclick.bind(this)
  }
  handleclick() {
    this.setState({ count: this.state.count + 1 })
  }

  handleclickminus() {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <div>
        <h1> Count Managed By State </h1>
        <h1> {this.state.count} </h1>
        <button onClick={this.handleclick} > Increase count</button>
        <button onClick={this.handleclickminus} > Decrease count</button>
      </div>
    )
  }
}


export default State