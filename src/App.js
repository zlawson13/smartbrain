import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Clarifai from'clarifai';
import FaceRecogntion from './Components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';



const app = new Clarifai.App({apiKey: 'd3dce6d0252a49458eff5f953616b3ac'});


const particleOptions = {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  constructor() 
    super();
    this.state = {
      input: '',
      imageurl: ''
    }
  };

  onButtonSubmit = () => {
    this.setState=({imageurl: this.state.input});
    console.log('Click');
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
  function(response) {
    console.log(response.outputs[0].data.regions[0].region_info.bounding_box[0])
  },
  function(err) {
    // there was an error
  }
)

}


  onInputChange = () => {
    this.setState(input, event.target.value);
  }

  return (
    <div className="App">
        <Particles className='particles'
                params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      <FaceRecogntion imageurl={this.state.imageurl} />)
    </div>


export default App;
