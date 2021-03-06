import * as React from "react";
import { editAndGetBuilding } from "./actions";
import { toast } from "react-toastify";
const EditBuilding = ({
  words,
  context,
  hideRecordModal,
  recordDetails,
  //setIncommingRecords,
  index,
  //updateRecordInfo,
}) => {
  const [buildingname, setbuildingname] = React.useState(
    recordDetails.BuildingName
  );
  const [buildingId, setbuildingId] = React.useState(recordDetails.BuldingId);
  //   const [ReferenceNumber, setReferenceNumber] = React.useState(
  //     recordDetails.ReferenceNumber
  //   );
  //   const [IncomingRecordDate, setIncomingRecordDate] = React.useState(
  //     recordDetails.IncomingRecordDate
  //   );
  //   const [Subject, setSubject] = React.useState(recordDetails.Subject);
  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      Title: buildingname,
      BuldingId: buildingId,
      BuildingName: buildingname,

      //   SendingOrganizationName: sendingOrg,
      //   ReferenceNumber: ReferenceNumber,
      //   IncomingRecordDate: IncomingRecordDate,
      //   Subject: Subject,
    };
    editAndGetBuilding(context, recordDetails.BuldingId, data).then(
      (record) => {
        console.log(record);
        console.log(index);
        toast("Updated Successfully");
        // updateRecordInfo(record, index);
        setbuildingname(null);
        // setReferenceNumber(null);
        setbuildingId(null);
        // setIncomingRecordDate(null);
        // setSubject(null);
        hideRecordModal();
      }
    );
  };
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center text-center ">
        <h4>
          <b>{words.editRecord} Edit Building</b>
        </h4>
      </div>
      <hr />
      <div className="row justify-content-center text-center h-100">
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <form onSubmit={(event) => onSubmit(event)}>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                {words.fileName}
                buildingname
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={buildingname}
                  onChange={(e) => setbuildingname(e.target.value)}
                />
              </div>
            </div>
            <br />
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                {words.senderOrg}
                buildingid
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={buildingId}
                  onChange={(e) => setbuildingId(e.target.value)}
                />
              </div>
            </div>
            <br />

            <br />
            {/* <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                {words.referenceNumber}
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={ReferenceNumber}
                  onChange={(event) => setReferenceNumber(event.target.value)}
                />
              </div>
            </div> */}
            <br />
            {/* <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                {words.IncomingRecordDate}
              </label>
              <div className="col-sm-7">
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={IncomingRecordDate}
                  onChange={(event) =>
                    setIncomingRecordDate(event.target.value)
                  }
                />
              </div>
            </div> */}

            <br />
            {/* <div className="form-group row">
              <label className="col-sm-4 col-form-label">{words.subject}</label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={Subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
              </div>
            </div> */}
            <br />

            <br />
            <hr />
            <div className="form-group">
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn btn-secondary btn-sm float-left"
                    onClick={hideRecordModal}
                    type="reset"
                  >
                    {words.cancel}
                  </button>
                  <button
                    className=" btn btn-primary btn-sm float-right"
                    type="submit"
                  >
                    {words.submit}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBuilding;
