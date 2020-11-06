import * as React from 'react';
import ScoreCard from './ScoreCard';


class CrciState extends React.Component<{type:string}, { Match: any , Detail : any }> {
  
  handleclick() {
    getscore().then((result) => {
      console.log("Results :", result.matches[0].date);
      let teams: any[] = [];
      let Twenty20Matches: string[] = [];

      result.matches.map((s: any) => {
        if (s["type"] == this.props.type) {
          teams.push((JSON.stringify(s)));
        }
        })

      console.log("Teams :" + teams);

      teams.forEach((t) => {
        var team = JSON.parse(t);
        if (team["type"] == this.props.type) { 
          Twenty20Matches.push(team["team-1"] + " VS " + team["team-2"] + " of type " + team["type"] + "at " + team["date"] );
        }

      })

      this.setState({ Match: Twenty20Matches })
      this.setState({ Detail: teams})
      return result.matches;
    })  
  
  }


  constructor(props: any) {
    super(props);

    this.handleclick = this.handleclick.bind(this)

    this.state = {
      Match : [
      ],
      Detail: [
        
      ]
    }
  }

  render() {
    return (
      <div>
        <h1> Matches </h1>
        <ul>
          {this.state.Detail.map((value: string
            ) => {   
            var team = JSON.parse(value);
            if (value) {

              return <li>
                <h2> {team['team-1'] + " VS " + team["team-2"] + " of type " + team["type"] + " at " + team["date"]}</h2>
                <ScoreCard id={team} />
              </li>
            }
      })}
        </ul>
        
        <button onClick={this.handleclick} > Get Matches </button>
      </div>
    )
  }
}


export const getscore = async (): Promise<any> => {
  var val;
  const endpoint = `https://cricapi.com/api/matches?apikey=UY8BE0Sq46gdOnLNp97cfVa29pA2`;
  const data = await (await fetch(endpoint)).json().then((data) => { 
  val = data;
  })
  return val;
}

export default CrciState