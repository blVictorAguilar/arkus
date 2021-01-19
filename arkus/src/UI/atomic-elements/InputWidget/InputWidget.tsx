import React, { ChangeEvent, ReactElement } from "react";

import { InputWidgetProps } from "./InputWidget.model";
import { TextField } from "@material-ui/core";

export function InputWidget({
  elementName,
  type,
  onInputChange,
  inputLabel,
  defaultValue,
}: InputWidgetProps): ReactElement {
  const onSetInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (onInputChange) onInputChange(event);
  };

  return (
    <TextField
      id={elementName}
      placeholder={defaultValue}
      defaultValue={defaultValue}
      required
      type={type}
      label={inputLabel}
      onChange={onSetInputValue}
    />
  );
}
