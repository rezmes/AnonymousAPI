import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IAnonymousApi2Props {
  description: string;
  apiURL: string;
  userID: string;
  context: WebPartContext;

}
