import * as React from "react";
import { English, AMHARIC } from "./words";
export const boxFileColumn = [
    {
        Header: ({ words }) => {
            return <div>{words.ShelfName}</div>;
        },
        columnId: 1,
        accessor: "ShelfName",
    },
    {
        Header: ({ words }) => {
            return <div>{words.BoxFileId}</div>;
        },
        columnId: 2,
        accessor: "BoxFileId",
    },
    {
        Header: ({ words }) => {
            return <div>{words.BoxFileName}</div>;
        },
        columnId: 2,
        accessor: "BoxFileName",
    },
];
