import { WebPartContext } from "@microsoft/sp-webpart-base";
import {
  SPHttpClient,
  SPHttpClientResponse,
  ISPHttpClientOptions,
} from "@microsoft/sp-http";

export class SPOperations {
  public GetBuilding(context: WebPartContext): Promise<any> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getbytitle('Building')/items";

    return context.spHttpClient
      .get(locationUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response?.json();
      })
      .then((json: any) => {
        console.log(json.value);
        return json?.value;
      }) as Promise<any>;
  }
  public GetSpecificBuilding(
    context: WebPartContext,
    buildingId: String
  ): Promise<any[]> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getbytitle('Building')/items?$filter=BuldingId eq '" +
      buildingId +
      "'";
    return context.spHttpClient
      .get(locationUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response?.json();
      })
      .then((json: any) => {
        console.log(json);
        return json?.value;
      }) as Promise<any>;
  }
  public Createbuilding(
    context: WebPartContext,
    buildingInfo: object
  ): Promise<String> {
    console.log(buildingInfo);
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getByTitle('Building')/items";
    const body: string = JSON.stringify(buildingInfo);
    const options: ISPHttpClientOptions = {
      body: body,
    };

    return new Promise<String>(async (resolve, reject) => {
      context.spHttpClient
        .post(locationUrl, SPHttpClient.configurations.v1, options)
        .then((response: SPHttpClientResponse) => {
          response.json().then(
            (result: any) => {
              resolve("Item with id created sucessfuly");
            },
            (error: any) => {
              reject("Error ocured" + error);
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  public Createroom(
    context: WebPartContext,
    roomInfo: object
  ): Promise<String> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getByTitle('Rooms')/items";
    const body: string = JSON.stringify(roomInfo);
    console.log(roomInfo);
    const options: ISPHttpClientOptions = {
      headers: {
        Accept: "application/json;odata=nometadata",
        "content-type": "application/json;odata=nometadata",
        "odata-version": "",
      },
      body: body,
    };

    return new Promise<String>(async (resolve, reject) => {
      context.spHttpClient
        .post(locationUrl, SPHttpClient.configurations.v1, options)
        .then((response: SPHttpClientResponse) => {
          response.json().then(
            (result: any) => {
              resolve("Item with id created sucessfuly");
            },
            (error: any) => {
              reject("Error ocured" + error);
            }
          );
        });
    });
  }
  public GetAllRooms(context: WebPartContext): Promise<any> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getbytitle('Rooms')/items?$select=*,Building/BuildingName&$expand=Building";

    return context.spHttpClient
      .get(locationUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response?.json();
      })
      .then((json: any) => {
        return json?.value;
      }) as Promise<any>;
  }
  public Getrooms(context: WebPartContext, buildingId: String): Promise<any[]> {
    console.log(buildingId);
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getbytitle('Rooms')/items?$filter=Building eq " +
      buildingId;

    return context.spHttpClient
      .get(locationUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response?.json();
      })
      .then((json: any) => {
        console.log(json);
        return json?.value;
      }) as Promise<any>;
  }
  public Createshelf(
    context: WebPartContext,
    shelfInfo: object
  ): Promise<String> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getByTitle('Shelf')/items";
    const body: string = JSON.stringify(shelfInfo);
    const options: ISPHttpClientOptions = {
      headers: {
        Accept: "application/json;odata=nometadata",
        "content-type": "application/json;odata=nometadata",
        "odata-version": "",
      },
      body: body,
    };

    return new Promise<String>(async (resolve, reject) => {
      context.spHttpClient
        .post(locationUrl, SPHttpClient.configurations.v1, options)
        .then((response: SPHttpClientResponse) => {
          response.json().then(
            (result: any) => {
              resolve("Item with id created sucessfuly");
            },
            (error: any) => {
              reject("Error ocured" + error);
            }
          );
        });
    });
  }
  public GetAllShelfs(context: WebPartContext): Promise<any> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getbytitle('Shelf')/items?$select=*,Room/RoomName&$expand=Room";

    return context.spHttpClient
      .get(locationUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response?.json();
      })
      .then((json: any) => {
        console.log(json);
        return json?.value;
      }) as Promise<any>;
  }
  public Getshelfs(context: WebPartContext, roomid: String): Promise<any[]> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getbytitle('Shelf')/items?$filter=RoomId eq '" +
      roomid +
      "'";
    return context.spHttpClient
      .get(locationUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      })
      .then((json: any) => {
        console.log(json);
        return json.value;
      }) as Promise<any>;
  }
  public Creatboxfile(
    context: WebPartContext,
    boxInfo: object
  ): Promise<String> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getByTitle('BoxFile')/items";
    const body: string = JSON.stringify(boxInfo);
    const options: ISPHttpClientOptions = {
      headers: {
        Accept: "application/json;odata=nometadata",
        "content-type": "application/json;odata=nometadata",
        "odata-version": "",
      },
      body: body,
    };

    return new Promise<String>(async (resolve, reject) => {
      context.spHttpClient
        .post(locationUrl, SPHttpClient.configurations.v1, options)
        .then((response: SPHttpClientResponse) => {
          response.json().then(
            (result: any) => {
              resolve("Item with id created sucessfuly");
            },
            (error: any) => {
              reject("Error ocured" + error);
            }
          );
        });
    });
  }
  public GetAllBoxFiles(context: WebPartContext): Promise<any> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getbytitle('BoxFile')/items?$select=*,Shelf/ShelfName&$expand=Shelf";

    return context.spHttpClient
      .get(locationUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response?.json();
      })
      .then((json: any) => {
        console.log(json);
        return json?.value;
      }) as Promise<any>;
  }
  public Getboxfiles(context: WebPartContext, shelfId: String): Promise<any[]> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getbytitle('BoxFile')/items?$filter=ShelfId eq '" +
      shelfId +
      "'";
    return context.spHttpClient
      .get(locationUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      })
      .then((json: any) => {
        console.log(json);
        return json.value;
      }) as Promise<any>;
  }
  public GetAllFiles(context: WebPartContext): Promise<any> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getbytitle('File')/items?$select=*,BoxFile/BoxFileName&$expand=BoxFile";

    return context.spHttpClient
      .get(locationUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response?.json();
      })
      .then((json: any) => {
        console.log(json);
        return json?.value;
      }) as Promise<any>;
  }
  public Createfile(
    context: WebPartContext,
    fileInfo: object
  ): Promise<String> {
    let locationUrl: string =
      context.pageContext.web.absoluteUrl +
      "/sites/demo/physicalLocation/_api/web/lists/getByTitle('File')/items";
    const body: string = JSON.stringify(fileInfo);
    const options: ISPHttpClientOptions = {
      headers: {
        Accept: "application/json;odata=nometadata",
        "content-type": "application/json;odata=nometadata",
        "odata-version": "",
      },
      body: body,
    };

    return new Promise<String>(async (resolve, reject) => {
      context.spHttpClient
        .post(locationUrl, SPHttpClient.configurations.v1, options)
        .then((response: SPHttpClientResponse) => {
          response.json().then(
            (result: any) => {
              resolve("Item with id created sucessfuly");
            },
            (error: any) => {
              reject("Error ocured" + error);
            }
          );
        });
    });
  }
}
