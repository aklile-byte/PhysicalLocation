import * as React from "react";
import styles from "./RecordDashboard.module.scss";
import { AddLocationProps } from "./addLocationProps"
import { escape } from "@microsoft/sp-lodash-subset";
import { SPComponentLoader } from "@microsoft/sp-loader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as pnp from "sp-pnp-js";
import "./main.css";
import Modal from "./modal";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "jquery";
require("bootstrap");

import "react-tabs/style/react-tabs.css";
import { SPOperations } from "../Services/SPServices";
import { words } from "lodash";
import { toast } from "react-toastify";

export interface TableItems {
  physicalLoctionListTiltle: any[];
  buildingListTitle: any[];
  roomlistTitle: any[];
  shelflistTitle: any[];
  boxfileTitle: any[];
  selectedvalue: String;
  buldingdivcontainer: boolean;
  disableaddlocation: boolean;
  roomcontainer: boolean;
  shelfcontainer: boolean;
  boxfilecontainer: boolean;
  filecontainer: boolean;
  stratfrombuilding: boolean;
  buildingId: String;
  buildingname: String;
  createdDate: any;
  cratedby: String;
  updateDate: any;
  updatedby: String;
  roomname: String;
  roomid: String;
  shelfid: String;
  shelfname: String;
  selectedroomid: String;
  boxfileid: String;
  boxfilename: String;
  selectedshelfid: String;
  fileid: String;
  filename: String;
  selectedbosfileid: String;
  buildingnameError: String;
  buildingidError: String;
  roomnameError: String;
  roomidError: String;
  shelfnameError: String;
  shelfidError: String;
  roomidforshelfError: String;
  boxfilenameError: String;
  boxfileidError: String;
  roomidforboxfileError: String;
  filenameError: String;
  fileidError: String;
  roomidforfileError: String;
  boxfileidforfileError: String;
  buildingRecords: any;
}

export default class Addlocation extends React.Component<
  AddLocationProps,
  TableItems,
  {}
> {
  // public htmlData=``;
  public _spOps: SPOperations;
  public data: object;
  public selctedlocation: String;
  public buildingidforroom: any;
  public roomidforshelf: String;
  public shelfidforboxfile: String;
  public boxfileforfile: String;
  public intilBuildingvalues: { BuildgingId: ""; BuildgingName: "" };

  public constructor(props: AddLocationProps) {
    super(props);
    this._spOps = new SPOperations();
    this.state = {
      physicalLoctionListTiltle: [],
      buildingListTitle: [],
      roomlistTitle: [],
      shelflistTitle: [],
      boxfileTitle: [],
      selectedvalue: "",
      buldingdivcontainer: false,
      disableaddlocation: false,
      roomcontainer: false,
      shelfcontainer: false,
      boxfilecontainer: false,
      filecontainer: false,
      stratfrombuilding: false,
      buildingId: "",
      buildingname: "",
      createdDate: null,
      cratedby: "",
      updateDate: null,
      updatedby: "",
      roomname: "",
      roomid: "",
      shelfid: "",
      shelfname: "",
      selectedroomid: "",
      boxfileid: "",
      boxfilename: "",
      selectedshelfid: "",
      fileid: "",
      filename: "",
      selectedbosfileid: "",
      buildingnameError: "",
      buildingidError: "",
      roomnameError: "",
      roomidError: "",
      shelfnameError: "",
      shelfidError: "",
      roomidforshelfError: "",
      boxfilenameError: "",
      boxfileidError: "",
      roomidforboxfileError: "",
      filenameError: "",
      fileidError: "",
      roomidforfileError: "",
      boxfileidforfileError: "",
      buildingRecords: null,
    };
    //this.setBuildingRecords;
    this._spOps.GetAllList(this.props.context).then((result: any[]) => {
      this.setState({ physicalLoctionListTiltle: result });
    });
  }
  // public componentDidMount() {
  //   this._spOps.GetAllList(this.props.context).then((result: any[]) => {
  //     this.setState({ physicalLoctionListTiltle: result });
  //   });
  //   // this._spOps.GetBuilding(this.props.context).then((result: any[]) => {
  //   //   this.setState({ buildingListTitle: result });
  //   // });
  //   // this._spOps
  //   //   .Getrooms(this.props.context, this.state.selectedroomid)
  //   //   .then((result: any[]) => {
  //   //     this.setState({ roomlistTitle: result });
  //   //   });
  // }

  public onChangebuildingname = (e) => {
    this.setState({
      buildingname: e.target.value,
    });
  };
  public onChangebuildingID = (e) => {
    this.setState({
      buildingId: e.target.value,
    });
  };
  public onChangecrateddate = (event, value: string) => {
    this.setState({
      createdDate: value,
    });
  };
  public onChangecratedby = (event, value: string) => {
    this.setState({
      cratedby: value,
    });
  };
  public onChangeupdatedby = (event, value: string) => {
    this.setState({
      updatedby: value,
    });
  };
  public onChangeupdatedate = (event, value: string) => {
    this.setState({
      updateDate: value,
    });
  };
  public onChangeroomname = (e) => {
    this.setState({
      roomname: e.target.value,
    });
  };
  public onChangeroomid = (e) => {
    this.setState({
      roomid: e.target.value,
    });
  };
  public onChangeshelfname = (e) => {
    this.setState({
      shelfname: e.target.value,
    });
  };
  public onChangeshelfid = (e) => {
    this.setState({
      shelfid: e.target.value,
    });
  };
  public onChangeboxfilename = (e) => {
    this.setState({
      boxfilename: e.target.value,
    });
  };
  public onChangeboxfileid = (e) => {
    this.setState({
      boxfileid: e.target.value,
    });
  };
  public onChangefilename = (e) => {
    this.setState({
      filename: e.target.value,
    });
  };
  public onChangefileid = (e) => {
    this.setState({
      fileid: e.target.value,
    });
  };

  public handlechange = (e) => {
    // this.setState({disablelocation:true});

    if (this.selctedlocation == "Building") {
      this.setState({ buldingdivcontainer: !this.state.buldingdivcontainer });
      this.setState({ disableaddlocation: !this.state.disableaddlocation });

      // this.selectbuilding(e);
      this.setState({ roomcontainer: false });
      this.setState({ shelfcontainer: false });
      this.setState({ boxfilecontainer: false });
      this.setState({ filecontainer: false });
      // this.setState({ selectedvalue: "" });
    } else if (this.selctedlocation == "Rooms") {
      this.setState({ roomcontainer: !this.state.roomcontainer });
      this.setState({ disableaddlocation: !this.state.disableaddlocation });
      this.setState({ buldingdivcontainer: false });
      this.setState({ shelfcontainer: false });
      this.setState({ boxfilecontainer: false });
      this.setState({ filecontainer: false });
      // this.setState({ selectedvalue: "" });
    } else if (this.selctedlocation == "Shelf") {
      this.setState({ shelfcontainer: !this.state.shelfcontainer });
      this.setState({ disableaddlocation: !this.state.disableaddlocation });
      this.setState({ buldingdivcontainer: false });
      this.setState({ roomcontainer: false });
      this.setState({ boxfilecontainer: false });
      this.setState({ filecontainer: false });
      //this.setState({ selectedvalue: "" });
    } else if (this.selctedlocation == "BoxFile") {
      this.setState({ boxfilecontainer: !this.state.boxfilecontainer });
      this.setState({ disableaddlocation: !this.state.disableaddlocation });
      this.setState({ buldingdivcontainer: false });
      this.setState({ roomcontainer: false });
      this.setState({ shelfcontainer: false });
      this.setState({ filecontainer: false });
      // this.setState({ selectedvalue: "" });
    } else if (this.selctedlocation == "File") {
      this.setState({ filecontainer: !this.state.filecontainer });
      this.setState({ disableaddlocation: !this.state.disableaddlocation });
      this.setState({ buldingdivcontainer: false });
      this.setState({ roomcontainer: false });
      this.setState({ shelfcontainer: false });
      this.setState({ boxfilecontainer: false });
    }
  };
  public handlechangebuilding = (e) => {
    const isValid: any = this.validate();
    if (isValid) {
      this.setState({ buldingdivcontainer: !this.state.buldingdivcontainer });
      this.setState({ disableaddlocation: !this.state.disableaddlocation });
      this.submitbuilding(e);
    }
  };
  public handlechangeroom = (e) => {
    const isValid: any = this.validateroom();
    if (isValid) {
      this.setState({ roomcontainer: !this.state.roomcontainer });
      this.setState({ disableaddlocation: !this.state.disableaddlocation });
      this.submitroom(e);
    }
  };
  public handlechangeshelf = (e) => {
    const isValid: any = this.validateshelf();
    if (isValid) {
      this.setState({ shelfcontainer: !this.state.shelfcontainer });
      this.setState({ disableaddlocation: !this.state.disableaddlocation });
      this.submitshelf(e);
    }
  };
  public handlechangeboxfile = (e) => {
    const isValid: any = this.validatboxfile();
    if (isValid) {
      this.setState({ boxfilecontainer: !this.state.boxfilecontainer });
      this.setState({ disableaddlocation: !this.state.disableaddlocation });
      this.submitboxfile(e);
    }
  };
  public handlechangefile = (e) => {
    const isValid: any = this.validatfile();
    if (isValid) {
      this.setState({ filecontainer: !this.state.filecontainer });
      this.setState({ disableaddlocation: !this.state.disableaddlocation });
      this.submitfile(e);
    }
  };
  public validate = () => {
    let buildingnameError = "";
    let buildingidError = "";

    if (!this.state.buildingname) {
      buildingnameError = "Building Name is Required";
    }
    if (!this.state.buildingId) {
      buildingidError = "Building ID is Required";
    }

    if (buildingnameError || buildingidError) {
      this.setState({ buildingnameError, buildingidError });
      return false;
    }

    return true;
  };
  validateroom = () => {
    let roomnameError = "";
    let roomidError = "";
    if (!this.state.roomname) {
      roomnameError = "Room name is Required";
    }
    if (!this.state.roomid) {
      roomidError = "Room ID is Required";
    }
    if (roomnameError || roomidError) {
      this.setState({ roomnameError, roomidError });
      return false;
    }
    return true;
  };
  validateshelf = () => {
    let shelfnameError = "";
    let shelfidError = "";
    let roomidforshelfError = "";
    if (!this.state.shelfname) {
      shelfnameError = "Shelf name is Required";
    }
    if (!this.state.shelfid) {
      shelfidError = "Shelf ID is Required";
    }
    if (!this.roomidforshelf) {
      roomidforshelfError = " Room is  is Required";
    }
    if (shelfnameError || shelfidError || roomidforshelfError) {
      this.setState({ shelfnameError, shelfidError, roomidforshelfError });
      return false;
    }

    return true;
  };
  validatboxfile = () => {
    let boxfilenameError = "";
    let boxfileidError = "";
    let roomidforboxfileError = "";

    if (!this.state.boxfilename) {
      boxfilenameError = "BoxFile name is Required";
    }
    if (!this.state.boxfileid) {
      boxfileidError = "BoxFile ID is Required";
    }

    if (!this.state.selectedshelfid) {
      roomidforboxfileError = " Room is  is Required";
    }

    if (boxfilenameError || boxfileidError || roomidforboxfileError) {
      this.setState({
        boxfilenameError,
        boxfileidError,
        roomidforboxfileError,
      });
      return false;
    }

    return true;
  };
  validatfile = () => {
    let filenameError = "";
    let fileidError = "";
    let roomidforfileError = "";
    let boxfileidforfileError = "";

    if (!this.state.filename) {
      filenameError = "File name is Required";
    }
    if (!this.state.fileid) {
      fileidError = "File ID is Required";
    }
    if (!this.state.selectedshelfid) {
      roomidforfileError = " Room is  is Required";
    }
    if (!this.boxfileforfile) {
      boxfileidforfileError = " BoxFile is  is Required";
    }
    if (
      filenameError ||
      fileidError ||
      roomidforfileError ||
      boxfileidforfileError
    ) {
      this.setState({
        filenameError,
        fileidError,
        roomidforfileError,
        boxfileidforfileError,
      });
      return false;
    }

    return true;
  };

  public submitbuilding(e) {
    e.preventDefault();
    console.log("under submit building");

    const isValid: any = this.validate();

    const datanew: object = {
      Title: this.state.buildingname,
      BuldingId: this.state.buildingId,
      BuildingName: this.state.buildingname,
      createddate: this.state.createdDate,
      createdby: this.state.cratedby,
      updateddate: this.state.updateDate,
      updatedby: this.state.updatedby,
    };
    this.data = datanew;
    if (isValid) {
      this._spOps
        .Createbuilding(this.props.context, this.data)
        .then((result) => {
          console.log("under response");
          console.log(result);
          this.data = {};
          toast("Building Added Succesfully");
        });
      console.log(this.state.boxfilename, this.state.buildingId);
      this.setState({ buildingId: "" });
      this.setState({ buildingname: "" });
      this.setState({ buildingidError: "" });
      this.setState({ buildingnameError: "" });
      this.clearSelection();
    }
  }
  public submitroom(e) {
    e.preventDefault();

    const isValid: any = this.validateroom();
    console.log("selected" + this.state.selectedvalue);
    const datanew: object = {
      Title: this.state.roomname,
      BuildingId: parseInt(this.buildingidforroom),
      RoomId: this.state.roomid,
      RoomName: this.state.roomname,
    };
    this.data = datanew;

    if (isValid) {
      this._spOps
        .Createroom(this.props.context, this.data)
        .then((result: string) => {
          this.data = {};
          toast("Room Added Succesfully");
        },(err) =>
        {
          toast.error("Something went wrong!")
            
        }).catch((e)=>{
          toast.error("Something went wrong!")

        });
      console.log(this.state.boxfilename, this.state.buildingId);
      this.setState({ roomid: "" });
      this.setState({ roomname: "" });
      this.setState({ roomidError: "" });
      this.setState({ roomnameError: "" });
      this.clearSelection();
    }
  }
  public submitshelf(e) {
    e.preventDefault();

    const isValid: any = this.validateshelf();
    console.log("selected" + this.state.selectedvalue);
    const datanew: object = {
      Title: this.state.shelfname,
      RoomId: this.roomidforshelf,
      ShelfId: this.state.shelfid,
      ShelfName: this.state.shelfname,
    };
    console.log(datanew)
    this.data = datanew;
    if (isValid) {
      console.log("selected room" + this.state.selectedroomid);
      this._spOps
        .Creatshelf(this.props.context, this.data)
        .then((result: string) => {
          this.data = {};
          toast("Shelf Added Succesfully");
        },(err) =>
        {
          toast.error("Something went wrong!")
            
        }).catch((e)=>{
          toast.error("Something went wrong!")

        });
      this.setState({ shelfid: "" });
      this.setState({ shelfname: "" });
      this.setState({ shelfidError: "" });
      this.setState({ shelfnameError: "" });
      this.roomidforshelf = "";
      this.clearSelection();
    }

    //             }
  }
  public submitboxfile(e) {
    e.preventDefault();

    const isValid: any = this.validatboxfile();
    console.log("selected" + this.state.selectedvalue);
    const datanew: object = {
      Title: this.state.boxfilename,
      ShelfId: this.shelfidforboxfile,
      BoxFileId: this.state.boxfileid,
      BoxFileName: this.state.boxfilename,
    };
    this.data = datanew;
    if (isValid) {
      this._spOps
        .Creatboxfile(this.props.context, this.data)
        .then((result: string) => {
          this.data = {};
          toast("BoxFile Added Succesfully");
        },(err) =>
        {
          toast.error("Something went wrong!")
            
        }).catch((e)=>{
          toast.error("Something went wrong!")

        });
      console.log(this.state.boxfilename, this.state.buildingId);
      this.setState({ boxfileid: "" });
      this.setState({ boxfilename: "" });
      this.setState({ boxfileidError: "" });
      this.setState({ boxfilenameError: "" });
      this.setState({ selectedshelfid: "" });
      this.clearSelection();
    }
    //             }
  }
  public submitfile(e) {
    e.preventDefault();

    const isValid: any = this.validatfile();
    console.log("selected" + this.state.selectedvalue);
    const datanew: object = {
      Title: this.state.filename,
      BoxFileId: this.boxfileforfile,
      FileId: this.state.fileid,
      FileName: this.state.filename,
    };
    this.data = datanew;
    if (isValid) {
      this._spOps
        .Creatfile(this.props.context, this.data)
        .then((result: string) => {
          this.data = {};
          toast("File Added Succesfully");
        },(err) =>
        {
          toast.error("Something went wrong!")
            
        }).catch((e)=>{
          toast.error("Something went wrong!")

        });
      this.setState({ fileid: "" });
      this.setState({ filename: "" });
      this.setState({ fileidError: "" });
      this.setState({ filenameError: "" });
      this.setState({ selectedshelfid: "" });
      this.boxfileforfile = "";
      this.clearSelection();
    }
  }
  public selectbuilding(e) {
    console.log("reached here", e.target.value);

    this._spOps.GetBuilding(this.props.context).then((result: any[]) => {
      this.setState({ buildingListTitle: result });
    });
  }

  public selectroomforshelf(e) {
    console.log("reached here", e.target.value);
    this.setState({ selectedroomid: e.target.value });
    this._spOps.Getrooms(this.props.context, e.target.value).then((result) => {
      console.log(result);
      this.setState({ roomlistTitle: result });
    });
  }
  public selectshelfforboxfile(e) {
    let selectstring = "Open this select menu";
    let select = " Open this select menu";
    if (selectstring.trim() === e.target.value.trim()) {
      console.log("select menu called");
      console.log("trimmed" + e.target.value.trim());
      this.setState({ selectedshelfid: "" });
    } else {
      console.log("reached here", e.target.value);
      this.setState({ selectedshelfid: e.target.value });
      this._spOps
        .Getshelfs(this.props.context, e.target.value)
        .then((result) => {
          console.log(result);
          this.setState({ shelflistTitle: result });
        });
    }
  }
  public selectboxfileforfile(e) {
    console.log("reached here", e.target.value);
    this.setState({ selectedbosfileid: e.target.value });
    this._spOps
      .Getboxfiles(this.props.context, e.target.value)
      .then((result) => {
        console.log(result);
        this.setState({ boxfileTitle: result });
      });
  }


  clearSelection()
  {
    (document.getElementById('dropdownMain') as HTMLSelectElement).options[0].selected= true;
  }

  newstate = "";

  physicallocation = {
    location: ["Building", "Rooms", "Shelf", "BoxFile", "File"],
  };
  building = {
    buildings: ["Bulding1", "Bulding2", "Bulding3", "Bulding4"],
  };
  room = {
    rooms: ["Room1", "Room2", "Room3", "Room4"],
  };
  shelf = {
    shelfs: ["Shelf1", "Shelf2", "Shelf3", "Shelf4"],
  };
  boxfile = {
    boxfiles: ["BoxFile1", "BoxFile2", "BoxFile3", "BoxFile4"],
  };
  selected(e) {
    this.selctedlocation = e.target.value;

    this.setState({ selectedvalue: e.target.value });
    this._spOps.GetBuilding(this.props.context).then((result: any[]) => {
      this.setState({ buildingListTitle: result });
    });

    this.handlechange(e);
  }
  selectedbuilding(e) {
    this.buildingidforroom = e.target.value;
  }
  selectedroom(e) {
    let selectstring = "Open this select menu";
    let select = " Open this select menu";
    if (selectstring.trim() === e.target.value.trim()) {
      console.log("select menu called");
      console.log("trimmed" + e.target.value.trim());
      this.roomidforshelf = "";
    } else {
      console.log(e.target.value);
      console.log("calledseletedroom");
      this.roomidforshelf = e.target.value;
    }
  }
  selecteshelf(e) {
    this.shelfidforboxfile = e.target.value;
    //
  }
  selectboxfile(e) {
    let selectstring = "Open this select menu";
    let select = " Open this select menu";
    if (selectstring.trim() === e.target.value.trim()) {
      console.log("select menu called");
      console.log("trimmed" + e.target.value.trim());
      this.boxfileforfile = "";
    } else {
      this.boxfileforfile = e.target.value;
    }
  }
  disableaddlocation() {
    this.setState({
      disableaddlocation: false,
    });
  }


  setBuildingRecords = () => {
    this._spOps.GetBuilding(this.props.context).then((result: any[]) => {
      const data: any = [];
      result.map((item) => {
        data.push({
          Id: item.Id,
          Title: item.Title,
          BuldingId: item.BuldingId,
          BuildingName: item.BuildingName,
        });
      });
      this.setState({
        buildingRecords: data,
      });
    });
  };

  public render(): React.ReactElement<AddLocationProps> {
    console.log(this.state.physicalLoctionListTiltle);
    console.log(this.state.buildingListTitle);

    let cssURL =
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);
    SPComponentLoader.loadCss(
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
    );

    return (
      <>

        <div className="row mt-3">
          <form className="col-md-6 col-md-offset-3">
            <div className="form-group">
              <label>{this.props.words.selectlocation}</label>
              <select
                className="form-control"
                aria-label="Default select example"
                id="dropdownMenu"
                onChange={(e) => this.selected(e)}
              >
                <option selected>Open this select menu</option>
                {this.physicallocation.location.map((data) => (
                  <option value={data}>{data}</option>
                ))}
              </select>
            </div>
          </form>
        </div>
        {this.state.buldingdivcontainer && (
          <form className="col-md-6 col-md-offset-3">
            <div className="form-group ">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  {this.props.words.BuildgingName}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Buildging Name"
                    onChange={(e) => this.onChangebuildingname(e)}
                  />
                  <div style={{ color: "red" }}>
                    {this.state.buildingnameError}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group ">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  {this.props.words.BuildgingId}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Buildging Id"
                    onChange={(e) => this.onChangebuildingID(e)}
                  />
                  <div style={{ color: "red" }}>
                    {this.state.buildingidError}
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary  "
                style={{ marginLeft: "0.8rem" }}
                onClick={this.handlechangebuilding}
              >
                {this.props.words.AddBuilding}
              </button>

              <button
                type="button"
                className="btn btn-primary "
                style={{ marginLeft: "0.8rem" }}
                onClick={() => {
                  this.setState({
                    buldingdivcontainer: !this.state.buldingdivcontainer,
                  });
                  this.setState({
                    disableaddlocation: !this.state.disableaddlocation,
                  });
                  this.setState({ buildingidError: "" });
                  this.setState({ buildingnameError: "" });
                  this.clearSelection();
                }}
              >
                {this.props.words.Cancel}
              </button>
            </div>
          </form>
        )}
        {this.state.roomcontainer && (
          <form className="col-md-6 col-md-offset-3">
            {this.state.stratfrombuilding || (
              <div className="form-group">
                <label>{this.props.words.Selectbuilding}</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  id="dropdown"
                  onChange={(e) => this.selectedbuilding(e)}
                >
                  <option selected>Open this select menu</option>
                  {this.state.buildingListTitle.map((data) => {
                    return (
                      <>
                        <option value={data.Id}>
                          {data.BuildingName}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
            )}

            <div className="form-group">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  {this.props.words.RoomName}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Room Name"
                    onChange={(e) => this.onChangeroomname(e)}
                  />
                  <div style={{ color: "red" }}>{this.state.roomnameError}</div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  {this.props.words.RoomId}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Room Id"
                    onChange={(e) => this.onChangeroomid(e)}
                  />
                  <div style={{ color: "red" }}>{this.state.roomidError}</div>
                </div>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "0.8rem" }}
                onClick={this.handlechangeroom}
              >
                {this.props.words.AddRoom}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "0.8rem" }}
                onClick={() => {
                  this.setState({ roomcontainer: !this.state.roomcontainer });
                  this.setState({
                    disableaddlocation: !this.state.disableaddlocation,
                  });
                  this.setState({ roomidError: "" });
                  this.setState({ roomnameError: "" });
                  this.clearSelection();
                }}
              >
                {this.props.words.Cancel}
              </button>
            </div>
          </form>
        )}
        {this.state.shelfcontainer && (
          <form className="col-md-6 col-md-offset-3">
            {this.state.stratfrombuilding || (
              <div className="form-group">
                <label>{this.props.words.Selectbuilding}</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  id="dropdown"
                  onChange={(e) => this.selectroomforshelf(e)}
                >
                  <option selected>Open this select menu</option>
                  {this.state.buildingListTitle.map((data) => {
                    return (
                      <>
                        <option value={data.Id}>
                          {data.BuildingName}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
            )}

            {this.state.stratfrombuilding || (
              <div className="form-group">
                <label>{this.props.words.Selectroom}</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  id="dropdown"
                  onChange={(e) => this.selectedroom(e)}
                >
                  <option selected>Open this select menu</option>
                  {this.state.roomlistTitle.map((data) => {
                    return (
                      <>
                        <option value={data.Id}>{data.RoomName}</option>
                      </>
                    );
                  })}
                </select>
                <div style={{ color: "red" }}>
                  {this.state.roomidforshelfError}
                </div>
              </div>
            )}

            <div className="form-group">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  {this.props.words.ShelfName}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Shelf Name"
                    onChange={(e) => this.onChangeshelfname(e)}
                  />
                  <div style={{ color: "red" }}>
                    {this.state.shelfnameError}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  {this.props.words.ShelfId}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Shelf Id"
                    onChange={(e) => this.onChangeshelfid(e)}
                  />
                  <div style={{ color: "red" }}>{this.state.shelfidError}</div>
                </div>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "0.8rem" }}
                onClick={this.handlechangeshelf}
              >
                {this.props.words.Addshelf}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "0.8rem" }}
                onClick={() => {
                  this.setState({ shelfcontainer: !this.state.shelfcontainer });
                  this.setState({
                    disableaddlocation: !this.state.disableaddlocation,
                  });
                  this.setState({ shelfnameError: "" });
                  this.setState({ shelfidError: "" });
                  this.setState({ roomidforshelfError: "" });
                  this.roomidforshelf = "";
                  this.clearSelection();
                }}
              >
                {this.props.words.Cancel}
              </button>
            </div>
          </form>
        )}
        {this.state.boxfilecontainer && (
          <form className="col-md-6 col-md-offset-3">
            {this.state.stratfrombuilding || (
              <div className="form-group">
                <label>{this.props.words.Selectbuilding}</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  id="dropdown"
                  onChange={(e) => this.selectroomforshelf(e)}
                >
                  <option selected>Open this select menu</option>
                  {this.state.buildingListTitle.map((data) => {
                    return (
                      <>
                        <option value={data.Id}>
                          {data.BuildingName}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
            )}

            {this.state.stratfrombuilding || (
              <div className="form-group">
                <label>{this.props.words.Selectroom}</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  id="dropdown"
                  onChange={(e) => this.selectshelfforboxfile(e)}
                >
                  <option selected>Open this select menu</option>

                  {this.state.roomlistTitle.map((data) => {
                    return (
                      <>
                        <option value={data.Id}>{data.RoomName}</option>
                      </>
                    );
                  })}
                </select>
                <div style={{ color: "red" }}>
                  {this.state.roomidforboxfileError}
                </div>
              </div>
            )}

            {this.state.stratfrombuilding || (
              <div className="form-group">
                <label>{this.props.words.Selectshelf}</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  id="dropdown"
                  onChange={(e) => this.selecteshelf(e)}
                >
                  <option selected>Open this select menu</option>
                  {this.state.shelflistTitle.map((data) => {
                    return (
                      <>
                        <option value={data.Id}>{data.ShelfName}</option>
                      </>
                    );
                  })}
                </select>
              </div>
            )}

            <div className="form-group">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  {this.props.words.BoxFileName}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="BoxFile Name"
                    onChange={(e) => this.onChangeboxfilename(e)}
                  />
                  <div style={{ color: "red" }}>
                    {this.state.boxfilenameError}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  {this.props.words.BoxFileId}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="BoxFile Id"
                    onChange={(e) => this.onChangeboxfileid(e)}
                  />
                  <div style={{ color: "red" }}>
                    {this.state.boxfileidError}
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "0.8rem" }}
                onClick={this.handlechangeboxfile}
              >
                {this.props.words.AddBoxFile}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "0.8rem" }}
                onClick={() => {
                  this.setState({
                    boxfilecontainer: !this.state.boxfilecontainer,
                  });
                  this.setState({
                    disableaddlocation: !this.state.disableaddlocation,
                  });
                  this.setState({ boxfileidError: "" });
                  this.setState({ boxfilenameError: "" });
                  this.setState({ selectedshelfid: "" });
                  this.clearSelection();
                }}
              >
                {this.props.words.Cancel}
              </button>
            </div>
          </form>
        )}
        {this.state.filecontainer && (
          <form className="col-md-6 col-md-offset-3">
            {this.state.stratfrombuilding || (
              <div className="form-group">
                <label>{this.props.words.Selectbuilding}</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  id="dropdown"
                  onChange={(e) => this.selectroomforshelf(e)}
                >
                  <option selected>Open this select menu</option>
                  {this.state.buildingListTitle.map((data) => {
                    return (
                      <>
                        <option value={data.Id}>
                          {data.BuildingName}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
            )}
            {this.state.stratfrombuilding || (
              <div className="form-group">
                <label>{this.props.words.Selectroom}</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  id="dropdown"
                  onChange={(e) => this.selectshelfforboxfile(e)}
                >
                  <option selected>Open this select menu</option>
                  {this.state.roomlistTitle.map((data) => {
                    return (
                      <>
                        <option value={data.Id}>{data.RoomName}</option>
                      </>
                    );
                  })}
                </select>
                <div style={{ color: "red" }}>
                  {this.state.roomidforfileError}
                </div>
              </div>
            )}
            {this.state.stratfrombuilding || (
              <div className="form-group">
                <label>{this.props.words.Selectshelf}</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  id="dropdown"
                  onChange={(e) => this.selectboxfileforfile(e)}
                >
                  <option selected>Open this select menu</option>
                  {this.state.shelflistTitle.map((data) => {
                    return (
                      <>
                        <option value={data.Id}>{data.ShelfName}</option>
                      </>
                    );
                  })}
                </select>
              </div>
            )}
            {this.state.stratfrombuilding || (
              <div className="form-group">
                <label>{this.props.words.SelectBoxfile}</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  id="dropdown"
                  onChange={(e) => this.selectboxfile(e)}
                >
                  <option selected>Open this select menu</option>
                  {this.state.boxfileTitle.map((data) => {
                    return (
                      <>
                        <option value={data.Id}>
                          {data.BoxFileName}
                        </option>
                      </>
                    );
                  })}
                </select>
                <div style={{ color: "red" }}>
                  {this.state.boxfileidforfileError}
                </div>
              </div>
            )}

            <div className="form-group">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  {this.props.words.FileName}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="File Name"
                    onChange={(e) => this.onChangefilename(e)}
                  />
                  <div style={{ color: "red" }}>{this.state.filenameError}</div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                  {this.props.words.FileId}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="File Id"
                    onChange={(e) => this.onChangefileid(e)}
                  />
                  <div style={{ color: "red" }}>{this.state.fileidError}</div>
                </div>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "0.8rem" }}
                onClick={this.handlechangefile}
              >
                {this.props.words.AddFile}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "0.8rem" }}
                onClick={() => {
                  this.setState({ filecontainer: !this.state.filecontainer });
                  this.setState({
                    disableaddlocation: !this.state.disableaddlocation,
                  });
                  this.setState({ fileidError: "" });
                  this.setState({ filenameError: "" });
                  this.setState({ selectedshelfid: "" });
                  this.boxfileforfile = "";
                  this.clearSelection();
                }}
              >
                {this.props.words.Cancel}
              </button>
            </div>
          </form>
        )}

{/* <ToastContainer /> */}
      </>
    );
  }
}
