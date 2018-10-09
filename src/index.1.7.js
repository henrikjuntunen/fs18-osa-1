import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
/*
Monien firmojen tapaan nykyään myös Unicafe kerää asiakaspalautetta. 
Tee Unicafelle verkossa toimiva palautesovellus. Vastausvaihtoehtoja 
olkoon vain kolme: hyvä, neutraali ja huono.

Sovelluksen tulee näyttää jokaisen palautteen lukumäärä. S
ovellus voi näyttää esim. seuraavalta:

Tehtävä 1.7 HeJ 13.9.2018
*/
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyvä: 0 ,
      neutraali: 0 ,
      huono: 0,
      keskiarvo: 0,
      positiivisia: 0
    }
  }

  

 keskiarvoLaske2 = () => {
  let rValue = 0 
  let xValue = 0 
  let yValue = 0 
  xValue = (
    ( this.state.hyvä * 1 ) + 
    ( this.state.neutraali * 0 ) + 
    ( this.state.huono * -1 ) )
  yValue = ( 
    this.state.hyvä + 
    this.state.neutraali + 
    this.state.huono )
    if ( yValue === 0 ) { yValue = 1 }
    
    rValue = xValue / yValue
    console.log('k-Renderöidään tehtävä-1.7 v-20180913-2032 : ', this.state)
    
    console.log("keskiarvoLaske2 rValue =", xValue, yValue, rValue)
    return (rValue)

 }

 prosenttiaPositiivisiaLaske2 = () => {
  let rValue = 0 
  let xValue = 0 
  let yValue = 0 
  xValue = ( // kaikki
    ( this.state.hyvä ) + 
    ( this.state.neutraali ) + 
    ( this.state.huono ) )
  yValue = ( // positiiviset
    this.state.hyvä + 
    this.state.neutraali )

  // kaikki - positiiviset = huonot
     
  if ( xValue === 0 ) { xValue = 1 }
    
    rValue = 100 * yValue / xValue   
    console.log('p-Renderöidään tehtävä-1.7 v-20180913-2032 : ', this.state)
    console.log("prosenttiaPositiivisiaLaske2 rValue =", xValue, yValue, rValue)
    return (rValue)

 }

  onClickHyvä = () => {
    debugger
    //console.log(this)
    this.setState({ hyvä: this.state.hyvä + 1 })
    // TODO - näyttäisi että arvot hyvä neutraali huono arvot laskeentuvat edelliestä tilasta keskiarvoon
    this.setState({ keskiarvo: this.keskiarvoLaske2() })
    this.setState({ positiivisia: this.prosenttiaPositiivisiaLaske2() })
  }

  onClickNeutraali = () => {
    this.setState({ neutraali: this.state.neutraali + 1 })
 //   this.keskiarvoLaske.bind(this)
 this.setState({ keskiarvo: 
  (
  ( this.state.hyvä * 1 ) + 
  ( this.state.neutraali * 0 ) + 
  ( this.state.huono * -1 ) )
   / ( this.state.hyvä + this.state.neutraali + this.state.huono )
  })
  this.setState({ positiivisia: this.prosenttiaPositiivisiaLaske2() })
}


  onClickHuono = () => {
    this.setState({ huono: this.state.huono + 1 })
    
    this.setState({ keskiarvo: this.keskiarvoLaske2() })
    this.setState({ positiivisia: this.prosenttiaPositiivisiaLaske2() })

  }

  render() {
    console.log('Renderöidään tehtävä-1.7 v-20180913-2032 : ', this.state)
    return (
      <div>
      
      <div><h1>Anna palautetta</h1></div>
      
      <div>
        <button onClick={this.onClickHyvä.bind(this)}>
        hyvä - {this.state.hyvä}
        </button>
        <br></br>
        <button onClick={this.onClickNeutraali.bind(this)}>
            neutraali - {this.state.neutraali}
          </button>
          <br></br>
          <button onClick={this.onClickHuono.bind(this)}>
            huono - {this.state.huono}
          </button>        
          </div>
          
          <div>
            <h1>Statistiikka</h1>
            <p>hyvä {this.state.hyvä}</p>
            <p>neutraali {this.state.neutraali}</p>
            <p>huono {this.state.huono}</p>
            <p>keskiarvo {this.state.keskiarvo}</p>
            <p>positiivisia {this.state.positiivisia} %</p>
          </div>
          </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

/**/

// TODO

/*

hyvä 1

neutraali 0

huono 0

keskiarvo 0

positiivisia 0 %

hyvä 2

neutraali 0

huono 0

keskiarvo 1

positiivisia 100 %

hyvä 2

neutraali 0

huono 1

keskiarvo 1

positiivisia 100 %

hyvä 2

neutraali 0

huono 2

keskiarvo 0.3333333333333333

positiivisia 66.66666666666667 %

hyvä 2

neutraali 0

huono 3

keskiarvo 0

positiivisia 50 %

*/
