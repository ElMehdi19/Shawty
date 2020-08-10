import React, { useContext, Fragment } from "react";
import { Context } from "../../../store/context";
import { ThemeContext } from "../../../store/themeContext";
import Form from "../../forms/Form";
import Success from "./Success";
import Failure from "./Failure";
import Main from "../../../sass/Wrapper";
import Modal from "../../main/Modal";

const Checker: React.FC = () => {
  const { state } = useContext(Context);
  const { themeState } = useContext(ThemeContext);
  const { Check, CheckError } = state;
  console.log(themeState.showModal);
  return (
    <Fragment>
      {themeState.showModal && <Modal url={Check.short_route} />}
      <Main>
        <Form type="CHECK" />
        {Check.original_url.length && !CheckError.on ? (
          <Success Check={Check} />
        ) : CheckError.on ? (
          <Failure message={CheckError.message} />
        ) : null}
      </Main>
    </Fragment>
  );
};

export default Checker;
