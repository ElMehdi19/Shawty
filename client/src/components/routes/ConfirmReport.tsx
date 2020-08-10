import React, { useEffect, useState, useContext } from "react";
import { RouteChildrenProps } from "react-router-dom";
import { sendReportConfirmation } from "../../utils";
import Loading from "../main/Loading";
import Main from "../../sass/Wrapper";
import Alert from "../../sass/Alert";
import { ThemeContext } from "../../store/themeContext";

const ConfirmReport: React.FC<RouteChildrenProps<{ token: string }>> = ({
  match,
}) => {
  const [status, setStatus] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { themeState } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "TrancateIt! - Report Confirmation";
    async function postReport() {
      const { success } = await sendReportConfirmation({
        token: match?.params.token!,
      });
      setStatus(success);
      setLoading(false);
    }
    postReport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      {loading ? (
        <Loading />
      ) : status === true ? (
        <Alert type="success" show={!themeState.showModal}>
          <p>
            Thank you for reporting.
            <br />
            We'll get back to you when we complete investigating this issue.
          </p>
        </Alert>
      ) : status === false ? (
        <Alert type="error" show={!themeState.showModal}>
          <p>Sorry! Something went wrong!</p>
        </Alert>
      ) : null}
    </Main>
  );
};

export default ConfirmReport;
