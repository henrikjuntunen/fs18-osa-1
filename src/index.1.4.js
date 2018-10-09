
import React from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  
  const kurssi = 'Half Stack -sovelluskehitys'

  /* olio taulukkona */
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 12
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

  const Otsikko = () => {
    return (
    <h1>{kurssi}</h1>
    )  
  }

  const Yhteensä = () => {
    return (
        <div>
      <p>yhteensä {osat[0].tehtavia + 
        osat[1].tehtavia + 
        osat[2].tehtavia} tehtävää</p>
        </div>
    )
  }

  
  const OsaOliot = (props) => {
    return (
      <div>
        <p>
          - {props.osa[0].nimi} {props.osa[0].tehtavia}
          </p>
          <p>
          - {props.osa[1].nimi} {props.osa[1].tehtavia}
          </p>
          <p>
            - {props.osa[2].nimi} {props.osa[2].tehtavia}
        </p>
      </div>
    )
  }


  const Sisältö = () => {
    return (
        <div>
          <p>Sisältöä!</p>
            <OsaOliot osa = {osat} /> 
          </div>
    )
  }


  return (
    <div>
        <Otsikko />
        <Sisältö />
        <Yhteensä />
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

// Tehtävä 1.4 (osassa 1 )
