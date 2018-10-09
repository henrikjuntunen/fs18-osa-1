import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

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

  /* 1.11 */
    
    keskiarvoLaske2 = (props) => {
      console.log('k-props:', props)
      const hyvä = props.hyvä
      const neutraali = props.neutraali
      const huono = props.huono
   
      let rValue = 0 
      let xValue = 0 
      let yValue = 0 
      xValue = (
    ( hyvä * 1 ) + 
    ( neutraali * 0 ) + 
    ( huono * -1 ) )
  yValue = ( 
    hyvä + 
    neutraali + 
    huono )
    if ( yValue === 0 ) { yValue = 1 }
    
    rValue = xValue / yValue
    console.log("k-keskiarvoLaske2 rValue =", xValue, yValue, rValue)
    return (rValue)

 }

// function simulateClick() {

  simulateClick = () => {
    var event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  var cb = document.getElementById('checkbox'); 
  var cancelled = !cb.dispatchEvent(event);
  if (cancelled) {
    // A handler called preventDefault.
    alert("cancelled");
  } else {
    // None of the handlers called preventDefault.
    alert("not cancelled");
  }
}
 
 prosenttiaPositiivisiaLaske2 = (props) => {
   console.log('p-props:', props)
   const hyvä = props.hyvä
   const neutraali = props.neutraali
   const huono = props.huono
  
  let rValue = 0 
  let xValue = 0 
  let yValue = 0 
  xValue = ( // kaikki
    ( hyvä ) + 
    ( neutraali ) + 
    ( huono ) )
  yValue = ( // positiiviset
    hyvä + 
    neutraali )

  // kaikki - positiiviset = huonot
     
  if ( xValue === 0 ) { xValue = 1 }
    
    rValue = 100 * yValue / xValue   
    console.log("p-prosenttiaPositiivisiaLaske2 rValue =", xValue, yValue, rValue)
    return (rValue)

 }

 // onClick -funktiot
  onClickHyvä3 = () => {
   this.setState({ hyvä: this.state.hyvä + 1 })
//   this.setState({ keskiarvo: this.keskiarvoLaske2(this.state) })
  // this.setState({ positiivisia: this.prosenttiaPositiivisiaLaske2(this.state) })
  }
  
  onClickNeutraali3 = () => {
    this.setState({ neutraali: this.state.neutraali + 1 })
  //  this.setState({ keskiarvo: this.keskiarvoLaske2(this.state) })
  //  this.setState({ positiivisia: this.prosenttiaPositiivisiaLaske2(this.state) })
    }
    
  onClickHuono3 = () => {
    this.setState({ huono: this.state.huono + 1 })
 //  this.setState({ keskiarvo: this.keskiarvoLaske2(this.state) })
//   this.setState({ positiivisia: this.prosenttiaPositiivisiaLaske2(this.state) })
    }
   
    onClickStatistiikka3 = () => {
      this.setState({ keskiarvo: this.keskiarvoLaske2(this.state) })
      this.setState({ positiivisia: this.prosenttiaPositiivisiaLaske2(this.state) })
       }
   
       // 1.10*
       onClickButton = (arvo) => () => {
          switch(arvo)
          {
            case 'hyvä' : {
            this.setState({ hyvä: this.state.hyvä + 1 })
            break
          }
            case 'neutraali' : {
            this.setState({ neutraali: this.state.neutraali + 1 })
            break
          }
           case 'huono' : {
              this.setState({ huono: this.state.huono + 1 })
              break
            }
          }

       } 


Statistic3 = (props) => {
  console.log('ss2-props:', props)
  const teksti = props.p1
  const arvo = props.p2
return (
  <tbody>

    <tr>
      <td>{teksti}</td><td>{arvo}</td>
    </tr>
  </tbody>
  
  )
}

  
  Statistics = (props) => {
  const hyvä = props.state.hyvä
  const neutraali = props.state.neutraali
  const huono = props.state.huono
  const positiivisia = props.state.positiivisia
  const keskiarvo = props.state.keskiarvo
  const tablestyles1 = "width:100%"
  console.log('s-props:', props)

debugger
if (hyvä === 0 && 
  neutraali === 0 &&
  huono === 0) {
  return (
<div>
    <h1>Statistiikka</h1>
<p>ei yhtään palautetta annettu </p>
</div>
  )
} else {

  return (<div>
<h1>Statistiikka</h1>
<table>

<this.Statistic3 p1="hyvä" p2={hyvä}/>
<this.Statistic3 p1="neutraali" p2={neutraali}/>
<this.Statistic3 p1="huono" p2={huono}/>
<this.Statistic3 p1="keskiarvo" p2={keskiarvo}/>
<this.Statistic3 p1="positiivisia" p2={positiivisia}/>
</table>
</div>
)
}
}

// Button3 (props) {    -- aiheutti hämmentävän virhetoiminnan

Button3 = (props) => {
  return (<div>
    <button 
    onClick={props.toiminto} >
        {props.teksti} - {props.laskuri}
        </button>
  </div>)
}


render() {
    console.log('Renderöidään tehtävä-1.7 v-20180913-2032 : ', this.state)
    return (
      <div>
      
      <div><h1>Anna palautetta</h1></div>
      
      
        
        <br></br>
        <this.Button3 
        toiminto={this.onClickButton('hyvä')} 
        teksti="Hyvä4" 
        laskuri={this.state.hyvä}/>
                
        <br></br>
        <this.Button3 
        toiminto={this.onClickButton('neutraali')} 
        teksti="Neutraali4" 
        laskuri={this.state.neutraali}/>
        
      
        <br></br>
        <this.Button3 
        toiminto={this.onClickButton('huono')} 
        teksti="Huono4" 
        laskuri={this.state.huono}/>
      
          <div>
            <this.Statistics state={this.state}/>
          </div>
          
          <br></br>
        <this.Button3 
        toiminto={this.onClickStatistiikka3} 
        teksti="Statistiikka3" 
        laskuri="Päivitä"/>
          
          </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
  )
 
