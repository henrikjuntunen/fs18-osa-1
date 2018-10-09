import React from 'react'
import ReactDOM from 'react-dom'

/*
15.9.2018 HeJ
Tehtävä 1.13* 
1.14* 

anekdootit osa1
Ohjelmistotuotannossa tunnetaan lukematon määrä anekdootteja 
eli pieniä “onelinereita”, jotka kiteyttävät alan ikuisia totuuksia.

Laajenna seuraavaa sovellusta siten, että siihen tulee nappi, 
jota painamalla sovellus näyttää satunnaisen ohjelmistotuotantoon 
liittyvän anekdootin:

anekdootit osa2
Laajenna sovellusta siten, että näytettävää anekdoottia on mahdollista äänestää:

anekdootit osa3
Ja sitten vielä lopullinen versio, joka näyttää eniten ääniä saaneen anekdootin:

*/

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 2,
      proposed: [0, 0, 0, 0, 0, 0] // size of anecdotes[]
      // TODO miten alustetaan dynaaminen taulukko
      // jotta ohjelma toimisi vaikka anekdoottien 
      // joukkoon lisätään uusi anekdootteja
    }
  }

  onClickA = () => {
    // arvo 0 ... 5
    let arvo = this.state.selected + 1;
    arvo = Math.floor(Math.random() * 6); // length of anecdotes[]
    if ( arvo > 5) {
      arvo = 0
    } 
    this.setState({ selected: arvo })
  }

  onClickB = () => {
    let arvo = this.state.proposed
    arvo[this.state.selected] = arvo[this.state.selected] + 1
    console.log("state: ", this.state)
    this.setState({ proposed: arvo })
  }

  EnitenÄäniäSaanutAnekdootti = () => {
    let enitenMäärä = 0
    let enitenIndeksi = 0
    let enitenSaaneetIndeksit = []
    let enitenSaaneetMäärä = []
    console.log('EnitenÄäniäSaanutAnekdootti ' , this.state.proposed)
    for ( let i = 0 ; i < this.state.proposed.length ; i++ ) {
      if ( enitenMäärä < this.state.proposed[i]) {
        enitenMäärä = this.state.proposed[i]
        enitenIndeksi = i
      }
    }

    for ( let i = 0 , j = 0 ; i < this.state.proposed.length ; i++ ) {
      if ( enitenMäärä === this.state.proposed[i]) {
        enitenSaaneetIndeksit[j] = i
        enitenSaaneetMäärä[j] = this.state.proposed[i]
        j++
      }
    }
    
    // valitaan saman määrän saaneista arvalla joku näytettäväksi
    // muutetaan näytöllä sitten indeksi ykkösestä alkavaksi ( 1 ... 6)
    let satunnainenIndeksiJoukosta = 
    Math.floor(Math.random() * enitenSaaneetIndeksit.length); 
    enitenIndeksi = enitenSaaneetIndeksit[satunnainenIndeksiJoukosta]
    enitenMäärä = enitenSaaneetMäärä[satunnainenIndeksiJoukosta]
    
    // TODO tämä antoi väärää tulosta mutta en tiedä miksi
    // enitenMäärä = this.state.proposed[satunnainenIndeksiJoukosta]
    
    // TODO tilan käisttely ei oikein ole hallinnassa minulla vielä
    // TODO satunnainenIndeksiJoukosta toinen saa väärän enitenMäärän tilasta

    return (
      <div>
        <br></br>
        <p>
          anecdote with most votes: number [{enitenIndeksi + 1}] got {enitenMäärä} votes
          </p><p>
          {this.props.anecdotes[enitenIndeksi]}
        </p>
      </div>
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickA}>paina</button>
        <br></br>
        <p>{this.state.selected + 1}</p>
        {this.props.anecdotes[this.state.selected]}
        <br></br>
        <button onClick={this.onClickB}>anna ääniä tälle anekdootille 
        painamalla tätä nappia</button>
        <this.EnitenÄäniäSaanutAnekdootti />
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

/*
yhden testin tulos

Full Stack Open 2018

paina
4

Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
anna ääniä tälle anekdootille painamalla tätä nappia

anecdote with most votes: number [6] got 1 votes

Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.


*/
