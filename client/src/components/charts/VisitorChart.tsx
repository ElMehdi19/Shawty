import React from "react";
import Chart from "react-apexcharts";
import { visitorPerCountry } from "../../utils";

type Props = {
  visitors: {
    [country: string]: number;
  };
};

const VisitorChart: React.FC<Props> = ({ visitors }) => {
  const { countries, count } = visitorPerCountry(visitors);
  return (
    <Chart
      series={count}
      options={{
        labels: countries,
        legend: { position: "bottom", horizontalAlign: "center" },
      }}
      type="donut"
      width={400}
    />
  );
};

export default VisitorChart;
