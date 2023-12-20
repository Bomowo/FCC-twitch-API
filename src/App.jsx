import {useState, useEffect} from 'react'
import Stream from './Stream.jsx'
import './App.css'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    // streams/OgamingSC2
    // users/
    // channels/
    const url = 'https://twitch-proxy.freecodecamp.rocks/twitch-api/'
    const startUp = () => {
      users.forEach(user => makeData(user))
    }
  
    const makeData = (user) => {
      let req1 = (fetch(url + 'streams/' + user))
      let req2 =(fetch(url + 'channels/' + user))
  
        Promise.all([req1, req2])
            .then(async([resp1, resp2]) => {
              let data1 = await resp1.json();
              let data2 = await resp2.json();
              return [data1, data2]
            })
            .then(results => {
  
              setData(prevArr => [...prevArr, <Stream 
                key={results[1]._id} 
                name={results[1].display_name} 
                stream={results[0].stream===null?false:true}
                url={results[1].url}
                status={results[1].status}
                />
              ])
            })
  
    }
    startUp()
  },[])

  return (
    <>
      <h1>FCC Twitch API</h1>
      {data&&data}
    </>
  )
}

export default App
