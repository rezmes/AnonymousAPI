import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'AnonymousApi2WebPartStrings';
import AnonymousApi2 from './components/AnonymousApi2';
import { IAnonymousApi2Props } from './components/IAnonymousApi2Props';

export interface IAnonymousApi2WebPartProps {
  description: string;
  apiURL: string;
  userID: string;
}

export default class AnonymousApi2WebPart extends BaseClientSideWebPart<IAnonymousApi2WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAnonymousApi2Props > = React.createElement(
      AnonymousApi2,
      {
        description: this.properties.description,
        context: this.context,
        apiURL: this.properties.apiURL,
        userID:this.properties.userID,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('apiURL', {
                  label: "New API URL"
                }),
                PropertyPaneTextField('userID', {
                  label: "User ID"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
