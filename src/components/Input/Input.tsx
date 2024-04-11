import React, { ChangeEvent } from 'react';
import { StyledInput } from './Input.styled';

interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ onChange }) => (
  <StyledInput placeholder="Filter podcasts..." onChange={onChange} />
);

export default Input;
