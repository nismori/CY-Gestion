import axios from 'axios'
import React from 'react'

class App extends React.Component{

  state = {details : [],}

  componentDidMount(){  

    let data;
    axios.get('http://localhost:8000/profil/')
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        })
      })
      .catch(err => { })
  }

  render(){
    return(
      <div>
        <header> Data Generated From Django</header>
        <hr></hr>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>{output.pseudo}</h2>
              <h3>{output.prenom}</h3>
            </div>
          </div>
        ))}
      </div>
    )
  }
} 

export default App;
