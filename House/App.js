import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = { profilDetails: [], appareilDetails: [] };

  componentDidMount() {
    // Récupérer les profils
    axios.get('http://localhost:8000/profil/')
      .then(res => {
        this.setState({ profilDetails: res.data });
      })
      .catch(err => console.log(err));

    // Récupérer les appareils
    axios.get('http://localhost:8000/appareil/')
      .then(res => {
        this.setState({ appareilDetails: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <header>Data Generated From Django</header>
        <hr />
        <h2>Profils</h2>
        {this.state.profilDetails.map((profil, id) => (
          <div key={id}>
            <h3>{profil.pseudo}</h3>
            <p>{profil.prenom}</p>
          </div>
        ))}
        
        <hr />
        <h2>Appareils</h2>
        {this.state.appareilDetails.map((appareil, id) => (
          <div key={id}>
            <h3>{appareil.nom}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
