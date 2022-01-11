import * as React from "react";
export const roomColumns = [
    {
        Header: ({ words }) => {
            return <div>{words.BuildingName}</div>;
        },
        columnId: 1,
        accessor: "BuildingName",
    },
    {
        Header: ({ words }) => {
            return <div>{words.RoomId}</div>;
        },
        columnId: 2,
        accessor: "RoomId",
    },
    {
        Header: ({ words }) => {
            return <div>{words.RoomName}</div>;
        },
        columnId: 2,
        accessor: "RoomName",
    },
];
