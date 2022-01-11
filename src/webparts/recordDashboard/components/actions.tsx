import {
  SPHttpClient,
  SPHttpClientResponse,
  ISPHttpClientOptions,
} from "@microsoft/sp-http";
import { WebPartContext } from "@microsoft/sp-webpart-base";
export function getOneBuilding(context, id): Promise<any> {
  // "/_api/web/lists/getByTitle('OutgoingLibrary')/items(" +
  // "/sites/demo/physicalLocation/_api/web/lists/getbytitle('Building')/items(" +
  let siteUrl =
    context.pageContext.web.absoluteUrl +
    "/sites/demo/physicalLocation/_api/web/lists/getbytitle('Building')/items?$filter=BuldingId eq '" +
    id +
    ")";
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
  //"/_api/web/lists/getByTitle('OutgoingLibrary')/items(" +
  //    "/sites/demo/physicalLocation/_api/web/lists/getbytitle('Rooms')/items?$filter=BuldingId eq '" +
  //      roomid +
  //      "'";
  //"/sites/demo/physicalLocation/_api/web/lists/getbytitle('Building')/items(" +
  console.log(id, inputs);
  const url: string =
    context.pageContext.web.absoluteUrl +
    "/sites/demo/physicalLocation/_api/web/lists/getbytitle('Building')/items(" +
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
