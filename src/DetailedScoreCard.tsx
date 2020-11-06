import * as React from 'react';

export const getMatchDetailedScore = async (id:string): Promise<any> => {
  var val;
  const endpoint = `https://cricapi.com/api/fantasySummary?apikey=UY8BE0Sq46gdOnLNp97cfVa29pA2&unique_id=${id}`;
  const data = await (await fetch(endpoint)).json().then((data) => { 
    val = data;
    })
    return val;
}

class DeatailedScoreCard extends React.Component<{ id: {}}, { counts: any }> {

  handleclick = () => {
    console.log("ID :", (this.props.id));
    
    getMatchDetailedScore(this.props.id['unique_id']).then((result) => {
      console.log("Deatiled Results :", result);
        this.setState({ counts: JSON.stringify(result.stat) })
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
        <h3> Detailed ScoreCard</h3>
        <h3> {this.state.counts}</h3>
        <button onClick={e => this.handleclick()} > Get Detailed ScoreCard </button>
      </div>
    )
  }
}


  export default DeatailedScoreCard;