import React, { ReactElement } from 'react'

import { InputWidgetProps } from './InputWidget.model';
import { TextField } from '@material-ui/core';

export function InputWidget({
  inputValue,
  inputLabel,
  defaultValue
}: InputWidgetProps): ReactElement { 
  return (
    <TextField
          required
          id="filled-required"
          label={inputLabel}
          defaultValue={defaultValue}
        />
  );
}
