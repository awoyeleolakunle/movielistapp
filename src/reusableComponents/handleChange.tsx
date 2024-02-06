import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type genericInputState = {
  [key: string]: any;
};
export const handleInputChange = <T extends genericInputState>(
  event: ChangeEvent<HTMLInputElement>,
  setState: Dispatch<SetStateAction<T>>
) => {
  const name = event.target.name;
  setState((prevData: T) => ({
    ...prevData,
    [name]: event.target.value,
  }));
};
