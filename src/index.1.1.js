import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 71
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  const Yhteensä = () => {
    return (
        <div>
      <p>yhteensä {tehtavia1 + tehtavia2 + tehtavia3} tehtävää</p>
        </div>
    )
  }

  const Otsikko = () => {
    return (
    <h1>{kurssi}</h1>
    )  
  }

  const Sisältö = () => {
    return (
        <div>
 <p>{osa1} {tehtavia1}</p>
    <p>{osa2} {tehtavia2}</p>
    <p>{osa3} {tehtavia3}</p>
   
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

// Tehtävä 1.1 (osassa 1 )