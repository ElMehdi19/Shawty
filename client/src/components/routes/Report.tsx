import React, { useState, useContext, useEffect } from "react";
import Main from "../../sass/Wrapper";
import Form, { Input, Button, TextArea } from "../../sass/Form";
import Alert, { Message } from "../../sass/Alert";
import Loading from "../main/Loading";
import { sendReport, storeEmail } from "../../utils";
import { ThemeContext } from "../../store/themeContext";

const Report: React.FC = () => {
  const { themeState } = useContext(ThemeContext);
  const [email, setEmail] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);
  const [reportError, setReportError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    document.title = "TrancateIt! - Report URL";
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const payload = { email, url, details };
    const reportResp = await sendReport(payload);
    setSent(true);
    setLoading(false);
    if (!reportResp.success) {
      setReportError(reportResp.message!);
    } else {
      storeEmail(email);
      setReportError("");
    }
  };

  return (
    <Main>
      <h1 style={{ textAlign: "center" }}>Report a URL</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        ></Input>
        <Input
          type="url"
          placeholder="Shortened Link"
          onChange={(e) => setUrl(e.currentTarget.value)}
          required
        ></Input>
        <TextArea
          placeholder="Please tell us about the reason of the report"
          onChange={(e) => setDetails(e.currentTarget.value)}
          // required
        ></TextArea>
        <div>
          <Button forTextArea={true}>Report</Button>
        </div>
      </Form>
      {sent && !reportError ? (
        <Alert type="success" show={!themeState.menuToggle}>
          <p>
            An email has just been sent to you.
            <br /> Please use it to confirm your report.
          </p>
        </Alert>
      ) : sent && reportError ? (
        <Alert type="error" show={!themeState.menuToggle}>
          <Message>{reportError}</Message>
        </Alert>
      ) : null}
      {loading && <Loading />}
    </Main>
  );
};

export default Report;
