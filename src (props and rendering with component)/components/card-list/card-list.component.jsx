import React from 'react';
import './card-list.styles.css';

// functional based component, not class based
export const CardList = props => { 
  // console.log(props);
  return <div className='card-list'> {props.children}</div>
};
  