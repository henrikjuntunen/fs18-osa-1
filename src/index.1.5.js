import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 110
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 117
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 114
      }
    ]
  }

  const Otsikko = (props) => {
    return (
    <h1>{props.kurssi.nimi}</h1>
    )  
  }

  const Yhteensä = (props) => {
    return (
        <div>
      <p>yhteensä {props.kurssi.osat[0].tehtavia + 
        props.kurssi.osat[1].tehtavia + 
        props.kurssi.osat[2].tehtavia} tehtävää</p>
        </div>
    )
  }

  
  const Riville = (props) => {
    return (
      <div>
        <p>
          - {props.x[0].nimi} {props.x[0].tehtavia}
          </p>
          <p>
          - {props.x[1].nimi} {props.x[1].tehtavia}
          </p>
          <p>
            - {props.x[2].nimi} {props.x[2].tehtavia}
        </p>
      </div>
    )
  }


  const Sisältö = (props) => {
    return (
        <div>
          <p>Sisältöä!</p>
            <Riville x = {props.kurssi.osat} /> 
          </div>
    )
  }


  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisältö kurssi={kurssi} />
      <Yhteensä kurssi={kurssi} />
    </div>
  )

}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// kommentointia on tämä
/* 
   kommentointia on tämä
*/

// Tehtävä 1.5 (osassa 1 )