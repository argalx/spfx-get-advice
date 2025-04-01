import * as React from "react";
import * as ReactDom from "react-dom";

import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import SpfxGetAdvice from "./components/SpfxGetAdvice";
import { ISpfxGetAdviceProps } from "./components/ISpfxGetAdviceProps";

export interface ISpfxGetAdviceWebPartProps {
  description: string;
}

export default class SpfxGetAdviceWebPart extends BaseClientSideWebPart<ISpfxGetAdviceWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ISpfxGetAdviceProps> =
      React.createElement(SpfxGetAdvice, {
        description: this.properties.description, // Pass the description prop
      });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    // Unmount the React component to avoid memory leaks
    ReactDom.unmountComponentAtNode(this.domElement);
  }
}
