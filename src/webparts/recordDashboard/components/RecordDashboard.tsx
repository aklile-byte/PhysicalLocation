import * as React from "react";
import { IRecordDashboardProps } from "./IRecordDashboardProps";
import { SPComponentLoader } from "@microsoft/sp-loader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./main.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { English, AMHARIC } from "./words";
import "react-tabs/style/react-tabs.css";
import addlocation from "./addlocation";
import Addlocation from "./addlocation";
import { buildingColumns } from "./buildingcolumns";
import Building from "./buildingtable";
import { SPOperations } from "../Services/SPServices";
import ViewLocations from "./viewLocations";
export interface TableItems {
  incommingRecords: any;
  outgoingRecords: any;
  show: boolean;
  words: any;
  caller: any;
  tabIndex: number;
  buildingRecords: any;
}

export default class RecordDashboard extends React.Component<
  IRecordDashboardProps,
  TableItems,
  {}
> {
  public _spOps: SPOperations;
  public constructor(props: IRecordDashboardProps) {
    super(props);
    this._spOps = new SPOperations();
    this.state = {
      words: English,
      buildingRecords: null,
      outgoingRecords: null,
      incommingRecords: null,
      show: false,
      caller: null,
      tabIndex: 0,
    };
    this.setBuildingRecords();
  }
  setLangEnglish = () => {
    this.setState({
      words: English,
    });
  };

  // for changing lang to amharic
  setLangAmharic = () => {
    this.setState({
      words: AMHARIC,
    });
  };
  setBuildingRecords = () => {
    this._spOps.GetBuilding(this.props.context).then((result) => {
      console.log(result);
      // this.setState({ buildingListTitle: result });
      // });
      // GetRecords(this.props.context, "Incomming").then((response) => {
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

  public render(): React.ReactElement<IRecordDashboardProps> {
    let cssURL =
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);
    SPComponentLoader.loadCss(
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
    );

    return (
      <>
        {/* for rendering incoming and outgoing tabs */}
        <div className="container">
          <button className="btn btn-primary" onClick={this.setLangEnglish}>
            EN
          </button>
          <button className="btn btn-warning" onClick={this.setLangAmharic}>
            AM
          </button>
        </div>
        <Tabs defaultIndex={1}>
          <TabList>
            <Tab>Add Location</Tab>
            <Tab>view Location</Tab>
          </TabList>

          <TabPanel>
            {
              <Addlocation
                description={this.props.description}
                context={this.props.context}
                webURL={this.props.webURL}
                words={this.state.words}
              />
            }
          </TabPanel>
          <TabPanel>
            <ViewLocations
              spops={this._spOps}
              context={this.props.context}
              words={this.state.words}
            />
          </TabPanel>
        </Tabs>
        <ToastContainer />
      </>
    );
  }
}
