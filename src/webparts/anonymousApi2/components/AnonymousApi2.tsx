import * as React from "react";
import styles from "./AnonymousApi2.module.scss";
import { IAnonymousApi2Props } from "./IAnonymousApi2Props";
import { escape } from "@microsoft/sp-lodash-subset";
import IAnonymosApiState from "./IAnonymosApiState";

export default class AnonymousApi2 extends React.Component<
  IAnonymousApi2Props,
  IAnonymosApiState
> {
  public constructor(props: IAnonymousApi2Props, state: IAnonymosApiState) {
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

  public render(): React.ReactElement<IAnonymousApi2Props> {
    return <div className={styles.anonymousApi2}></div>;
  }
}
