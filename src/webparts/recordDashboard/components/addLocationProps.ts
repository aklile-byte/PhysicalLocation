import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface AddLocationProps {
  description: string;
  context: WebPartContext;
  webURL: string;
  words: any;
}
