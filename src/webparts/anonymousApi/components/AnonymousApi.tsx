import * as React from "react";
import styles from "./AnonymousApi.module.scss";
import { IAnonymousApiProps } from "./IAnonymousApiProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class AnonymousApi extends React.Component<
  IAnonymousApiProps,
  {}
> {
  public render(): React.ReactElement<IAnonymousApiProps> {
    return (
      <div className={styles.anonymousApi}>
        <div>
          <strong>ID: </strong>
          {this.props.id}
        </div>
        <br />
        <div>
          <strong>User Name: </strong>
          {this.props.username}
        </div>
        <br />
        <div>
          <strong>Name:</strong>
          {this.props.name}
        </div>
        <br />
        <div>
          <strong>Email: </strong>
          {this.props.email}
        </div>
        <br />
        <div>
          <strong>Phone: </strong>
          {this.props.phone}
        </div>
        <br />
        <div>
          <strong>Address: </strong>
          {this.props.address}
        </div>
        <br />
        <div>
          <strong>Website: </strong>
          {this.props.website}
        </div>
        <br />
        <div>
          <strong>Company: </strong>
          {this.props.company}
        </div>
        <br />
      </div>
    );
  }
}
