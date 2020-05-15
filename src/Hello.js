import React from 'react'
import Training from './Training'

function Hello(props) {
  return (
    <div>
      <h2>
        Great!! Hello friends.. {props.name} is {props.age} year old
      </h2>
      <Training />
    </div>
  );

}

export default Hello