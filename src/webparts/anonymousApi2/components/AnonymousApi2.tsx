import * as React from "react";
import styles from "./AnonymousApi2.module.scss";
import { IAnonymousApi2Props } from "./IAnonymousApi2Props";
import { escape } from "@microsoft/sp-lodash-subset";
import IAnonymosApi2State from "./IAnonymosApi2State";
import { registerCustomRequestClientFactory } from "@pnp/sp";
import { HttpClient, HttpClientResponse } from "@microsoft/sp-http";

export default class AnonymousApi2 extends React.Component<
  IAnonymousApi2Props,
  IAnonymosApi2State
> {
  public constructor(props: IAnonymousApi2Props, state: IAnonymosApi2State) {
    super(props);
    this.state = {
      id: null,
      name: null,
      username: null,
      email: null,
      address: null,
      phone: null,
      website: null,
      company: null,
    };
  }
  /**
   * getUserDetails
   */
  public async getUserDetails(): Promise<any> {
    let url: string = this.props.apiURL + "/" + this.props.userID;
    return this.props.context.httpClient
      .get(url, HttpClient.configurations.v1)
      .then((respons: HttpClientResponse) => {
        return respons.json();
      })
      .then((jsonResponse) => {
        return jsonResponse;
      }) as Promise<any>;
  }

  /**
   * InvokeAPIAndSetDataIntoState
   */
  public InvokeAPIAndSetDataIntoState() {
    this.getUserDetails().then((response) => {
      this.setState({
        id: response.id,
        name: response.name,
        username: response.username,
        email: response.email,
        address:
          "Street: " +
          response.address.street +
          "Suite: " +
          response.address.suite +
          "City" +
          response.address.city +
          "zipcode" +
          response.address.zipcode,
        website: response.website,
        company: response.company.name,
        phone: response.phone,
      });
    });
  }

  /**
   * componentDidMount
   */
  public componentDidMount() {
    this.InvokeAPIAndSetDataIntoState();
  }

  /**
   * componentDidUpdate
   */
  public componentDidUpdate(
    prevProps: IAnonymousApi2Props,
    prevState: IAnonymosApi2State,
    prevContext: any
  ): void {
    this.InvokeAPIAndSetDataIntoState();
  }

  public render(): React.ReactElement<IAnonymousApi2Props> {
    return (
      <div className={styles.anonymousApi2}>
        <span className={styles.description}>User Detailes:</span>
        <div>
          <strong>ID: </strong>
          {this.state.id}
        </div>
        <br />

        <div>
          <strong>User Name: </strong>
          {this.state.username}
        </div>
        <br />
        <div>
          <strong>Name: </strong>
          {this.state.name}
        </div>
        <br />
        <div>
          <strong>Address: </strong>
          {this.state.address}
        </div>
        <br />
        <div>
          <strong>Email: </strong>
          {this.state.email}
        </div>
        <br />
        <div>
          <strong>Phone: </strong>
          {this.state.phone}
        </div>
      </div>
    );
  }
}
