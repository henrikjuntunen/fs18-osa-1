
import React from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  
  const kurssi = 'Half Stack -sovelluskehitys'

  
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 21
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  const Otsikko = () => {
    return (
    <h1>{kurssi}</h1>
    )  
  }

  const Yhteensä = () => {
    return (
        <div>
      <p>yhteensä {(osa1.tehtavia * 2) + (osa2.tehtavia * 2) + (osa3.tehtavia * 2)} tehtävää</p>
        </div>
    )
  }

  const Osa = (props) => {
    
    let nimiX = props.osan
    let tehtaviaX = props.osat
          
    return (
          
        <div>
          
        <p>{nimiX} {tehtaviaX} </p>
        </div>
    )
  }

  const OsaOlio = (props) => {
    return (
      <div>
        <p>
          - {props.osa.nimi} {props.osa.tehtavia}
        </p>
      </div>
    )
  }


  const Sisältö = () => {
    return (
        <div>
          <p>Sisältöä!</p>
            <Osa osan = {osa1.nimi} osat = {osa1.tehtavia}  />
            <Osa osan = {osa2.nimi} osat = {osa2.tehtavia} />
            <Osa osan = {osa3.nimi} osat = {osa3.tehtavia} />
            <OsaOlio osa = {osa1} /> 
            <OsaOlio osa = {osa2} /> 
            <OsaOlio osa = {osa3} /> 
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

// Tehtävä 1.3 (osassa 1 )