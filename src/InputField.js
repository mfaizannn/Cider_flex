import React from 'react';

const defaultProps = {
  text: 'Your full name',
  style: {
    top: '235px',
    left: '846px',
    width: '468px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#bebebe',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '18px',
    outline: 'none',
  },
};

const InputField = (props) => {
  return (
    <input style={props.style ?? defaultProps.style} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;