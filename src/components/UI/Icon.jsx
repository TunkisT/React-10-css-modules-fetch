import React from 'react';

const Icon = (props) => {
  return <i className={`fa ${props.icon} ${props.className}`}></i>;
};

export default Icon;
