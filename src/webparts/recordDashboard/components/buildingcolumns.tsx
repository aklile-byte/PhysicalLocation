import * as React from "react";
import EditBuilding from "./editbuildingform";
import Modal from "./modal";
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
  {
    Header: () => {
      return null;
    },
    accessor: "modal",
    columnId: 3,
    Cell: (props) => {
      const [editModal, setEditModal] = React.useState(false);
      const [viewRecord, setViewRecord] = React.useState(false);
      const [remarkModal, setRemarkModal] = React.useState(false);
      const data = props.row.original;
      return (
        <>
          <div>
            <td>
              {/* <button type="button" className="btn btn-primary btn-margin">
                <i
                  className="fa fa-eye"
                  onClick={() => setViewRecord(true)}
                ></i>
              </button> */}
              <button
                type="button"
                className="btn btn-success btn-margin"
                onClick={() => setEditModal(true)}
              >
                <i className="fa fa-edit"></i>
              </button>
              {/* <button
                type="button"
                className="btn btn-primary mr-2 btn-margin"
                onClick={() => setRemarkModal(true)}
              >
                <i className="fa fa-plus"></i>
              </button> */}
            </td>
          </div>
          <Modal
            show={editModal}
            handleClose={() => setEditModal(false)}
            // additionalStyles={{}}
          >
            <EditBuilding
              words={props.words}
              context={props.context}
              hideRecordModal={() => setEditModal(false)}
              recordDetails={data}
              //setIncommingRecords={props.setRecords}
              index={props.index}
              // updateRecordInfo={props.updateRecordInfo}
            />
          </Modal>
        </>
      );
    },
  },
];
