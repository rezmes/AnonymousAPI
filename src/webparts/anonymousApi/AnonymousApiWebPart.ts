import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'AnonymousApiWebPartStrings';
import AnonymousApi from './components/AnonymousApi';
import { IAnonymousApiProps } from './components/IAnonymousApiProps';

export interface IAnonymousApiWebPartProps {
  description: string;
}

export default class AnonymousApiWebPart extends BaseClientSideWebPart<IAnonymousApiWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAnonymousApiProps > = React.createElement(
      AnonymousApi,
      {
        description: this.properties.description,
        id: Response.id,
        name:Response.name,
        username:Response.username,
        email: Response.email,
        address: 'Street: ' + response.address.street +' Suite: ' + response.address.suite +' City: ' + response.address.city +' Zipcode: ' + response.address.zipcode,
        phone: Response.phone,
        website: Response.website,
        company: 'Name: ' + response.company.name +' CatchPhrase: ' + response.company.catchPhrase +' BS: ' + response.company.bs
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
