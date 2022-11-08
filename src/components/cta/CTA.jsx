import React from 'react';
import './cta.css';
import ValidationTextFields from './ValidationTextFields';

const CTA = () => {
  return (
    <div className='cta_section'>
      <div className='cta_title'><p>contact me</p></div>
      <ValidationTextFields></ValidationTextFields>
    </div>
  )
}

export default CTA