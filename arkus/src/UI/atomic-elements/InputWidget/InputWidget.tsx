import React, { ChangeEvent, ReactElement, useState } from "react";

import { InputWidgetProps } from "./InputWidget.model";
import { TextField } from "@material-ui/core";

export function InputWidget({
  elementName,
  type,
  onInputChange,
  inputLabel,
  defaultValue,
}: InputWidgetProps): ReactElement {
  const [inputType] = useState(type);
  const [inputValue, setInputValue] = useState("");

  const onSetInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onInputChange) onInputChange(event);
  };

  return (
    <TextField
    id={elementName}
      placeholder={defaultValue}
      required
      type={inputType}
      label={inputLabel}
      onChange={onSetInputValue}
    />
  );
}
