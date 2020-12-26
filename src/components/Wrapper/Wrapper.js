import React from 'react';
import './Wrapper.css';

function Wrapper(props) {
  return (
   <div className='wrapper-margin'>
       {props.children}
   </div>
  );
}

export default Wrapper;