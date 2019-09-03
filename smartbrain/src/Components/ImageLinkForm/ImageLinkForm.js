import React from 'react';

const ImageLinkForm = () => {
  return (
      <div>
          <p className='f3'>
              {'This Magic Brain Will Detect Faces In Your Pictures. Give It A Try!'}
          </p>
          <div>
              <input className= 'f4 pa2 w-70 center' type='text' />
              <button className='w-30 grow f4 link ph3 pv2'>Detect</button>
          </div>
      </div>
  );
}

export default ImageLinkForm;