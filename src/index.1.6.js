import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
/*
Monien firmojen tapaan nykyään myös Unicafe kerää asiakaspalautetta. 
Tee Unicafelle verkossa toimiva palautesovellus. Vastausvaihtoehtoja 
olkoon vain kolme: hyvä, neutraali ja huono.

Sovelluksen tulee näyttää jokaisen palautteen lukumäärä. S
ovellus voi näyttää esim. seuraavalta:

Tehtävä 1.6 HeJ 12.9.2018
*/
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyvä: 0 ,
      neutraali: 0 ,
      huono: 0
    }
  }
  render() {
    console.log('Renderöidään tehtävä-1.6 v201809122003 : ', this.state)
    return (
      <div>
      
      <div><h1>Anna palautetta</h1></div>
      
      <div>
        <button onClick={() => this.setState({ hyvä: this.state.hyvä + 1 })}>
        hyvä - {this.state.hyvä}
        </button>
        <br></br>
        <button onClick={() => this.setState({ neutraali: this.state.neutraali + 1 })}>
            neutraali - {this.state.neutraali}
          </button>
          <br></br>
          <button onClick={() => this.setState({ huono: this.state.huono + 1 })}>
            huono - {this.state.huono}
          </button>        
          </div>
          
          <div>
            <h1>Statistiikka</h1>
            <p>hyvä {this.state.hyvä}</p>
            <p>neutraali {this.state.neutraali}</p>
            <p>huono {this.state.huono}</p>
          </div>
          </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// Tehtävä 1.6 (osassa 1 )