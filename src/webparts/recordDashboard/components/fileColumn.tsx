import * as React from "react";
import { English, AMHARIC } from "./words";
export const fileColumns = [
    {
        Header: ({ words }) => {
            return <div>{words.BoxFileName}</div>;
        },
        columnId: 1,
        accessor: "BoxFileName",
    },
    {
        Header: ({ words }) => {
            return <div>{words.FileId}</div>;
        },
        columnId: 1,
        accessor: "FileId",
    },
    {
        Header: ({ words }) => {
            return <div>{words.FileName}</div>;
        },
        columnId: 2,
        accessor: "FileName",
    },
];
