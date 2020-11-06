import * as React from 'react';
import ScoreCard from './ScoreCard';


class OldCrciState extends React.Component<{}, { Match: any , Detail : any }> {
  
  handleclick() {
    getmatch().then((result) => {
      console.log("Results :", result);
      let teams: any[] = [];
      let Twenty20Matches: string[] = [];

      result.data.map((s: any) => {
        if (!s["unqiueid"]) {
          teams.push((JSON.stringify(s)));
          Twenty20Matches.push(s["description"]);
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
                <h2> {team["description"]}</h2>
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


export const getmatch = async (): Promise<any> => {
  var val;
  const endpoint = `https://cricapi.com/api/cricket?apikey=UY8BE0Sq46gdOnLNp97cfVa29pA2`;
  const data = await (await fetch(endpoint)).json().then((data) => { 
  val = data;
  })
  return val;
}

export default OldCrciState