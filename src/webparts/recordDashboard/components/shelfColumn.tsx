import * as React from "react";
export const shelfColumns = [
    {
        Header: ({ words }) => {
            return <div>{words.RoomName}</div>;
        },
        columnId: 2,
        accessor: "RoomName",
    },
    {
        Header: ({ words }) => {
            return <div>{words.ShelfId}</div>;
        },
        columnId: 1,
        accessor: "ShelfId",
    },
    {
        Header: ({ words }) => {
            return <div>{words.ShelfName}</div>;
        },
        columnId: 2,
        accessor: "ShelfName",
    },
];
