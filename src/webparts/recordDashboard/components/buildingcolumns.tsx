import * as React from "react";
import { English, AMHARIC } from "./words";
export const buildingColumns = [
  {
    Header: ({ words }) => {
      return <div>{words.BuldingId}</div>;
    },
    columnId: 1,
    accessor: "BuldingId",
  },
  {
    Header: ({ words }) => {
      return <div>{words.BuildingName}</div>;
    },
    columnId: 2,
    accessor: "BuildingName",
  },
];
