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

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
// import { response } from './components/IAnonymousApiProps';
import {HttpClient, HttpClientResponse} from '@microsoft/sp-http';

export interface IAnonymousApiWebPartProps {
  description: string;
}

export default class AnonymousApiWebPart extends BaseClientSideWebPart<IAnonymousApiWebPartProps> {

  public render(): void {


    this.getUserDetails()
    .then((response) => {

    const element: React.ReactElement<IAnonymousApiProps > = React.createElement(
      AnonymousApi,
      {
        description: this.properties.description,
        id: response.id,
        name:response.name,
        username:response.username,
        email: response.email,
        address: 'Street: ' + response.address.street +' Suite: ' + response.address.suite +' City: ' + response.address.city +' Zipcode: ' + response.address.zipcode,
        phone: response.phone,
        website: response.website,
        company: 'Name: ' + response.company.name +' CatchPhrase: ' + response.company.catchPhrase +' BS: ' + response.company.bs
      }

    );

    ReactDom.render(element, this.domElement);
  }
);
}

  protected onInit(): Promise<void> {
    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }

private getUserDetails(): Promise<any> {
  return this.context.httpClient.get(`https://jsonplaceholder.typicode.com/users/2`, HttpClient.configurations.v1).then((response: HttpClientResponse) => {
    return response.json();
  })
  .then(jsonResponse => {
    return jsonResponse
  }) as Promise<any>;
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
