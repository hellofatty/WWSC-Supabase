/** @format */

// import React from "react";

import { PieChart } from "@mui/x-charts/PieChart";

function MyPieChart({ data }) {
    const legendPlacement = {
        slotProps: {
            legend: {
                labelStyle: {
                    fontSize: 12,
                    fill: "grey",
                },
                direction: "column",
                position: {
                    vertical: "middle",
                    horizontal: "right",
                },
                padding: 0,
                itemMarkWidth: 10,
                itemMarkHeight: 8,
                markGap: 5,
                itemGap: 5,
            },
        },
    };

    return (
        <PieChart
            series={[
                {
                    data: { data },
                    highlightScope: { fade: "global", highlight: "item" },
                    faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                },
            ]}
            width={350}
            height={250}
            {...legendPlacement}
            margin={{ top: 0, bottom: 10, left: 10, right: 160 }}
        />
    );
}

export default MyPieChart;
