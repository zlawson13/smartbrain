import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Particles from 'react-particles-js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
        <Particles className='particles'
                params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />

  {/*FaceRecogntion />*/}
    </div>
  );
}

export default App;
