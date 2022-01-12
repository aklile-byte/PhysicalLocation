import * as React from "react";
import Table from "./table";

const Building = ({
  words,
  context,
  columns,
  data,
}) => {
  return (
    <div className="">
      {/* <div className="row">
        <div className="col-12">
          <button
            className="btn btn-primary float-right btnStyle"
            onClick={() => showModal("Incomming")}
          >
            {words.addRecord}
          </button>
          <br />
        </div>
      </div> */}
    
      <div className="row table-overflow">
        <div className="col-12">
          <Table
            data={data}
            context={context}
            columns={columns}
            words={words}
          />
        </div>
      </div>
    </div>
  );
};

export default Building;
