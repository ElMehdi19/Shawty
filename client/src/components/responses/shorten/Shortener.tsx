import React, { useContext } from "react";
import { Context } from "../../../store/context";
import Success from "./Success";
import Failure from "./Failure";
import Form from "../../forms/Form";
import Main from "../../../sass/Wrapper";

const Shortener: React.FC = () => {
  const { state } = useContext(Context);
  const { Shorten, ShortenError } = state;

  return (
    <Main>
      <Form type="SHORTEN" />
      {Shorten.short_url && !ShortenError.on ? (
        <Success
          original_url={Shorten.original_url}
          short_url={Shorten.short_url}
        />
      ) : ShortenError.on ? (
        <Failure message={ShortenError.message} />
      ) : null}
    </Main>
  );
};

export default Shortener;
