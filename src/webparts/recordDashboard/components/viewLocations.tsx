import * as React from 'react'
import Building from "./buildingtable";
import Shelf from './shelfTable';
import Room from './roomTable';
import BoxFile from './BoxFileTable';
import File from './FileTable';
import { buildingColumns } from "./buildingcolumns"
import { roomColumns } from "./roomColumn"
import { shelfColumns } from "./shelfColumn"
import { boxFileColumn } from "./boxFileColumn"
import { fileColumns } from "./fileColumn"
function viewLocations({ spops, context, words }) {
    const [buildings, setBuildings] = React.useState(null)
    const [rooms, setRooms] = React.useState(null)
    const [shelfs, setShelfs] = React.useState(null)
    const [boxFiles, setBoxFiles] = React.useState(null)
    const [files, setFiles] = React.useState(null)


    const getBuildings = () => {
        spops.GetBuilding(context).then((result) => {
            console.log(result);
            const data: any = [];
            result.map((item) => {
                data.push({
                    Id: item.Id,
                    Title: item.Title,
                    BuldingId: item.BuldingId,
                    BuildingName: item.BuildingName,
                });
            });
            setBuildings(data)
        });
    }
    const getRooms = () => {
        spops.GetAllRooms(context).then((result) => {
            const data: any = [];
            result.map((item) => {
                data.push({
                    Id: item.Id,
                    Title: item.Title,
                    RoomId: item.RoomId,
                    RoomName: item.RoomName,
                    BuildingName: item.Building ? item.Building.BuildingName : null
                });
            });
            setRooms(data)
        });
    }
    const getShelfs = () => {
        spops.GetAllShelfs(context).then((result) => {
            console.log(result);
            const data: any = [];
            result.map((item) => {
                data.push({
                    Id: item.Id,
                    Title: item.Title,
                    ShelfId: item.ShelfId,
                    ShelfName: item.ShelfName,
                    RoomName: item.Room ? item.Room.RoomName : null,
                });
            });
            setShelfs(data)
        });
    }
    const getBoxFiles = () => {
        spops.GetAllBoxFiles(context).then((result) => {
            console.log(result);
            const data: any = [];
            result.map((item) => {
                data.push({
                    Id: item.Id,
                    Title: item.Title,
                    BoxFileId: item.BoxFileId,
                    BoxFileName: item.BoxFileName,
                    ShelfName: item.Shelf ? item.Shelf.ShelfName : null,
                });
            });
            setBoxFiles(data)
        });
    }
    const getFiles = () => {
        spops.GetAllFiles(context).then((result) => {
            console.log(result);
            const data: any = [];
            result.map((item) => {
                data.push({
                    Id: item.Id,
                    Title: item.Title,
                    FileId: item.FileId,
                    FileName: item.FileName,
                    BoxFileName: item.BoxFile ? item.BoxFile.BoxFileName : null,
                });
            });
            setFiles(data)
        });
    }
    let buildingTable = (
        <Building
            context={context}
            words={words}
            data={buildings}
            columns={buildingColumns}
        />)
    let roomTable = (
        <Room
            context={context}
            words={words}
            data={rooms}
            columns={roomColumns}
        />
    )
    let shelfTable = (
        <Shelf
            context={context}
            words={words}
            data={shelfs}
            columns={shelfColumns}
        />
    )
    let boxFileTable = (
        <BoxFile
            context={context}
            words={words}
            data={boxFiles}
            columns={boxFileColumn}
        />
    )
    let fileTable = (
        <File
            context={context}
            words={words}
            data={files}
            columns={fileColumns}
        />
    )
    const onClickBuilding = () => {
        getBuildings()
        setRooms(null)
        setShelfs(null)
        setBoxFiles(null)
        setFiles(null)
    }
    const onClickRoom = () => {
        getRooms()
        setBuildings(null)
        setShelfs(null)
        setBoxFiles(null)
        setFiles(null)
    }
    const onClickShelf = () => {
        getShelfs()
        setBuildings(null)
        setRooms(null)
        setBoxFiles(null)
        setFiles(null)
    }
    const onClickBoxFile = () => {
        getBoxFiles()
        setBuildings(null)
        setRooms(null)
        setShelfs(null)
        setFiles(null)
    }
    const onClickFile = () => {
        getFiles()
        setBuildings(null)
        setRooms(null)
        setShelfs(null)
        setBoxFiles(null)
    }
    getBuildings()
    return (
        <div>
            <br />
            <br />
            <div className="row">

                <div className="col-md-3 sidebar ml-2 mt-2" style={{ height: "max-content" }} id="sidebar">
                    <ul className="list-unstyled components " >
                        <li>
                            <a onClick={
                                onClickBuilding
                            } type='button' >{words.Buildings}</a>
                        </li>
                        <hr />
                        <li>
                            <a onClick={
                                onClickRoom
                            } type='button' >{words.Rooms}</a>
                        </li>
                        <hr />
                        <li>
                            <a onClick={
                                onClickShelf
                            } type='button' >{words.Shelfs}</a>
                        </li>
                        <hr />

                        <li>
                            <a onClick={
                                onClickBoxFile
                            } type='button' >{words.BoxFiles}</a>
                        </li>
                        <hr />

                        <li>
                            <a type="button" onClick={
                                onClickFile
                            }>{words.Files}</a>

                        </li>
                    </ul>
                </div>

                <div className="col-md-8">
                    {buildings && buildingTable}
                    {rooms && roomTable}
                    {shelfs && shelfTable}
                    {boxFiles && boxFileTable}
                    {files && fileTable}

                </div>


            </div>


        </div>
    )
}

export default viewLocations
