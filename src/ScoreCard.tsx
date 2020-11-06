import * as React from 'react';
import DetailedScoreCard from './DetailedScoreCard'

export const getMatchDetail = async (id:string): Promise<any> => {
  var val;
  const endpoint = `https://cricapi.com/api/cricketScore?apikey=UY8BE0Sq46gdOnLNp97cfVa29pA2&unique_id=${id}`;
  const data = await (await fetch(endpoint)).json().then((data) => { 
    val = data;
    })
    return val;
}

class ScoreCard extends React.Component<{ id: {}}, { counts: any }> {

  handleclick = () => {
    console.log("ID :", (this.props.id));
    
    getMatchDetail(this.props.id['unique_id']).then((result) => {
      console.log("Results :", result);
        this.setState({ counts: JSON.stringify(result) })
        return result.matches;
    })
  
  }

  constructor(props: any) {
    super(props);

    this.handleclick = this.handleclick.bind(this)

    this.state = {
      counts : []
    }
  }

  render() {
    return (
      <div>
        <h3> Score Detail</h3>
        <h3> {this.state.counts}</h3>
        <DetailedScoreCard id={this.props.id}/>
        <button onClick={e => this.handleclick()} > Get Score </button>
      </div>
    )
  }
}


  export default ScoreCard;