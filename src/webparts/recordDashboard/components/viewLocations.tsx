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
            <button className="btn btn-success m-3" onClick={
                onClickBuilding
            } type='button' >Buildings</button>
            <button className="btn btn-primary m-3" onClick={
                onClickRoom
            } type='button' >Rooms</button>
            <button className="btn btn-warning m-3" onClick={
                onClickShelf
            } type='button' >Shelfs</button>
            <button className="btn btn-danger m-3" onClick={
                onClickBoxFile
            } type='button' >BoxFiles</button>
            <button className="btn btn-info m-3" onClick={
                onClickFile
            } type='button' >Files</button>
            {buildings && buildingTable}
            {rooms && roomTable}
            {shelfs && shelfTable}
            {boxFiles && boxFileTable}
            {files && fileTable}
        </div>
    )
}

export default viewLocations
