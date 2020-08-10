import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import ModalWrapper, { StyledModal } from "../../sass/Modal";
import Form, { Input, TextArea, Button } from "../../sass/Form";
import Alert, { Message } from "../../sass/Alert";
import { sendReport } from "../../utils";
import { ThemeContext } from "../../store/themeContext";
import Success from "../responses/report/Success";

type Props = {
  url: string;
};

const Modal: React.FC<Props> = ({ url }) => {
  const { dispatch } = useContext(ThemeContext);
  const [email, setEmail] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);
  const [reportError, setReportError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { url, email, details };
    const reportResp = await sendReport(payload);
    console.log(reportResp.message);
    setSent(true);
    if (reportResp.success) {
      setEmail("");
      setDetails("");
      setReportError("");
      setTimeout(() => dispatch({ type: "MODAL" }), 3000);
    } else {
      setReportError(reportResp.message!);
    }
  };
  return (
    <ModalWrapper>
      <StyledModal>
        <FontAwesomeIcon
          icon={faWindowClose}
          color="crimson"
          size="2x"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: "MODAL" })}
        />
        {!sent || reportError ? (
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <TextArea
              placeholder="Tell us more about the report"
              onChange={(e) => setDetails(e.currentTarget.value)}
            />
            <Button forTextArea={true}>Report</Button>
          </Form>
        ) : (
          <Success />
        )}
        {reportError && (
          <Alert type="error" show={true}>
            <Message>{reportError}</Message>
          </Alert>
        )}
      </StyledModal>
    </ModalWrapper>
  );
};

export default Modal;
