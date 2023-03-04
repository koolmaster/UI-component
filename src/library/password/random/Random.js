import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input, Button } from './styles';

const Random = ({ className }) => {
  const inputElement = useRef();

  const getPassword = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]';
    const passwordLength = 16;
    let password = '';
    for (let i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    inputElement.current.value = password;
    inputElement.current.style.cursor = 'pointer';
  };

  const copyPassword = () => {
    inputElement.current.select();
    document.execCommand('copy');
  };

  return (
    <Wrapper className={className}>
      <Input readOnly={true} ref={inputElement} onClick={() => copyPassword()} />
      <Button onClick={() => getPassword()}>Generate</Button>
    </Wrapper>
  );
};

Random.propTypes = {
  /** support styled-components extend */
  className: PropTypes.string,
};

export default Random;
