import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Logo from './Components/Logo/Logo';
import Clarifai from 'clarifai';
import FaceRecogntion from './Components/FaceRecogntion/FaceRecogntion'
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
    }
  }

  calculateFaceLocation= (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }


  onButtonSubmit = () => {
    this.setState=({imageUrl: this.state.input});
    console.log('Click');
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(error => console.log(error));
 
};


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
      this.setState({route: route});
  }

  render () {
    return(
    <div className="App">
        <Particles className='particles'
                params={particleOptions} />
      <Navigation onRouteChange={this.onRouteChange} />
      { this.state.route === 'signin'
      ? <Signin onRouteChange={this.onRouteChange} />
      : <div>
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecogntion box={this.state.box} imageUrl={this.state.imageUrl} />
        </div>
      }
      </div>
    )
  }
}
export default App
