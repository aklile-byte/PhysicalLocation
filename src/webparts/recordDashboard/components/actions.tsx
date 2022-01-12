import {
  SPHttpClient,
  SPHttpClientResponse,
  ISPHttpClientOptions,
} from "@microsoft/sp-http";
import { WebPartContext } from "@microsoft/sp-webpart-base";
export function getOneBuilding(context, id): Promise<any> {
  let siteUrl =
    context.pageContext.web.absoluteUrl +
    "/_api/web/lists/getByTitle('Building')/items?$filter=Id eq '" +
    id +
    "'";
  return context.spHttpClient
    .get(siteUrl, SPHttpClient.configurations.v1)
    .then((response: SPHttpClientResponse) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
}
export function editBuilding(context: WebPartContext, id: String, inputs: any) {
  console.log(id, inputs);
  const url: string =
    context.pageContext.web.absoluteUrl +
    "/_api/web/lists/getbytitle('Building')/items(" +
    id +
    ")";
  const headers: any = {
    "X-HTTP-Method": "MERGE",
    "IF-MATCH": "*",
  };
  const recordOption: ISPHttpClientOptions = {
    headers: headers,
    body: JSON.stringify(inputs),
  };

  return context.spHttpClient
    .post(url, SPHttpClient.configurations.v1, recordOption)
    .then((response: SPHttpClientResponse) => {
      return response;
    })
    .catch((err) => console.log(err));
}
export function editAndGetBuilding(
  context: WebPartContext,
  id: String,
  inputs
): Promise<any> {
  console.log(id, inputs);
  return editBuilding(context, id, inputs).then((response) => {
    return getOneBuilding(context, id).then((json) => {
      return json;
    }) as Promise<any>;
  });
}
export function getOneRoom(context, id): Promise<any> {
  let siteUrl =
    context.pageContext.web.absoluteUrl +
    "/_api/web/lists/getByTitle('Rooms')/items?$filter=Id eq '" +
    id +
    "'";
  return context.spHttpClient
    .get(siteUrl, SPHttpClient.configurations.v1)
    .then((response: SPHttpClientResponse) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
}
export function editRoom(context: WebPartContext, id: String, inputs: any) {
  console.log(id, inputs);
  const url: string =
    context.pageContext.web.absoluteUrl +
    "/_api/web/lists/getbytitle('Rooms')/items(" +
    id +
    ")";
  const headers: any = {
    "X-HTTP-Method": "MERGE",
    "IF-MATCH": "*",
  };
  const recordOption: ISPHttpClientOptions = {
    headers: headers,
    body: JSON.stringify(inputs),
  };

  return context.spHttpClient
    .post(url, SPHttpClient.configurations.v1, recordOption)
    .then((response: SPHttpClientResponse) => {
      return response;
    })
    .catch((err) => console.log(err));
}
export function editAndGetRoom(
  context: WebPartContext,
  id: String,
  inputs
): Promise<any> {
  console.log(id, inputs);
  return editRoom(context, id, inputs).then((response) => {
    return getOneRoom(context, id).then((json) => {
      return json;
    }) as Promise<any>;
  });
}
export function Getrooms(
  context: WebPartContext,
  roomid: String
): Promise<any[]> {
  console.log("roomid" + roomid);
  //
  // "/_api/web/lists/getbytitle('Rooms')/items?$filter[BuldingId] eq(" +//

  // let locationUrl:string=context.pageContext.web.absoluteUrl+"/_api/web/getByTitle('Building')/items";
  let locationUrl: string =
    context.pageContext.web.absoluteUrl +
    "/_api/web/lists/getbytitle('Rooms')/items?$filter=Building eq '" +
    roomid +
    "'";

  //let resturl:string=context.
  var locationTitle: any[] = [];

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
