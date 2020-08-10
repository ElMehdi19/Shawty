import React, { useState, useContext } from "react";
import { fetchIt, fetchParams } from "../../utils";
import StyledForm, { Input, Button } from "../../sass/Form";
import { Context, ShortenType, CheckType } from "../../store/context";
import {
  ShortenSuccess,
  CheckSuccess,
  ShortenError,
  CheckError,
} from "../../store/actions";

type Props = {
  type: "CHECK" | "SHORTEN";
};

const Form: React.FC<Props> = ({ type }) => {
  const [url, setUrl] = useState<string>("");
  const { dispatch } = useContext(Context);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload: fetchParams = { url, endpoint: type };
    setUrl("");

    const resp = await fetchIt(payload);
    const { success } = resp;
    switch (success) {
      case true:
        const { data } = resp;
        dispatch(
          type === "SHORTEN"
            ? ShortenSuccess(data as ShortenType)
            : CheckSuccess(data as CheckType)
        );
        break;
      default:
        const { message } = resp;
        dispatch(
          type === "SHORTEN" ? ShortenError(message!) : CheckError(message!)
        );
        break;
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        id="url"
        onChange={handleChange}
        placeholder={
          type === "SHORTEN" ? "Type your URL here" : "Search for a URL"
        }
        value={url}
      ></Input>
      <Button>{type}</Button>
    </StyledForm>
  );
};

export default Form;
