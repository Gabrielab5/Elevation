import './App.css'

function App() {
const getClassName = (temperature) => { 
  if (temperature < 0) {
    return 'freezing';
  } else if (temperature >= 0 && temperature <= 30) {
    return 'fair';
  } else {
    return 'hell-scape';
  }
}
// Your App should return a single div that has an id of weatherBox and a className. The className depends the getClassName invocation.
  return (
    <div className="ex-space">
      <div className="exercise" id="ex-2">
        <div id="weatherBox" className={getClassName(25)}>
          <h2>Weather: {getClassName(25)}</h2>
          <p>Temperature: 25°C</p>
        </div>
        <div id="weatherBox" className={getClassName(-5)}>
          <h2>Weather: {getClassName(-5)}</h2>
          <p>Temperature: -5°C</p>
        </div>
        <div id="weatherBox" className={getClassName(50)}>
          <h2>Weather: {getClassName(50)}</h2>
          <p>Temperature: 50°C</p>
        </div>
      </div>
    </div>
  )
}



export default App
