import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
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

  const Osa = (props) => {
      return (
          <div>
          <p>{props.osa} {props.tehtavia}</p>
          </div>
      )
  }
  const Sisältö = () => {
    return (
        <div>
            <Osa osa = {osa1} tehtavia = {tehtavia1} />
            <Osa osa = {osa2} tehtavia = {tehtavia2} />
            <Osa osa = {osa3} tehtavia = {tehtavia3} />
            
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

// Tehtävä 1.2 (osassa 1 )