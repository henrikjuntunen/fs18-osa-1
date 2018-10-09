import React from 'react'
import ReactDOM from 'react-dom'

/*
15.9.2018 HeJ
Tehtävä 1.13* 
1.13* 

anekdootit osa1
Ohjelmistotuotannossa tunnetaan lukematon määrä anekdootteja 
eli pieniä “onelinereita”, jotka kiteyttävät alan ikuisia totuuksia.

Laajenna seuraavaa sovellusta siten, että siihen tulee nappi, 
jota painamalla sovellus näyttää satunnaisen ohjelmistotuotantoon 
liittyvän anekdootin:

anekdootit osa2
Laajenna sovellusta siten, että näytettävää anekdoottia on mahdollista äänestää:
*/

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 2,
      promoted: [0, 0, 0, 0, 0, 0]
    }
  }

  onClickA = () => {
    // arvo 0 ... 5
    let arvo = this.state.selected + 1;
    arvo = Math.floor(Math.random() * 6);
    if ( arvo > 5) {
      arvo = 0
    } 
    this.setState({ selected: arvo })
  }

  onClickB = () => {
    let arvo = this.state.promoted
    arvo[this.state.selected] = arvo[this.state.selected] + 1
    console.log("state: ", this.state)
    this.setState({ promoted: arvo })
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickA}>paina</button>
        <br></br>
        <p>{this.state.selected}</p>
        {this.props.anecdotes[this.state.selected]}
        <br></br>
        <button onClick={this.onClickB}>anna ääniä tälle anekdootille painamalla tätä nappia</button>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
