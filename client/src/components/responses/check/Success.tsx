import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import VisitorChart from "../../charts/VisitorChart";
import { CheckType } from "../../../store/context";
import ChartWrapper, { Title, Label } from "../../../sass/Chart";
import { ThemeContext } from "../../../store/themeContext";

type Props = {
  Check: CheckType;
};

const Success: React.FC<Props> = ({ Check }) => {
  const { themeState, dispatch } = useContext(ThemeContext);

  return (
    <div style={{ display: !themeState.menuToggle ? "block" : "none" }}>
      {}
      <Title>
        Route <span style={{ color: "crimson" }}>{Check.short_route}</span>{" "}
        Information
      </Title>
      <ChartWrapper>
        <div>
          <div>
            <Label>Destination:</Label>{" "}
            <a
              href={Check.original_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Check.original_url}
            </a>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <Label>Total hits:</Label> {Check.total_visitors}
            </div>
            <FontAwesomeIcon
              icon={faFlag}
              color="crimson"
              title="Report Link"
              style={{ cursor: "pointer" }}
              onClick={() => dispatch({ type: "MODAL" })}
            />
          </div>
        </div>
        <VisitorChart visitors={Check.visitors} />
      </ChartWrapper>
    </div>
  );
};

export default Success;
