import axios from "axios";
import React, { Component } from "react";
import { ServerStyleSheet } from "styled-components";

export default {
  siteRoot: "https://lennartbrandt.com",
  getSiteData: () => ({
    title: "Lennart Brandt | Design X Entrepreneurship",
    metaDescription:
      "Hi! I'm Lennart, an enthusiastic product designer with a huge passion for entrepreneurship. Currently, I'm working with elbstack on exploring new business models within the space of Fitness and Blockchain. You can find my design work on Dribbble, follow me behind the scenes via Instagram and explore my daily thoughts on Twitter."
  }),
  getRoutes: async () => {
    return [
      {
        path: "/",
        component: "src/containers/Home"
      },
      {
        path: "/imprint",
        component: "src/containers/Imprint"
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta, siteData } = this.props;
      return (
        <Html>
          <Head>
            <title>{siteData.title}</title>
            <meta charSet="UTF-8" />
            <meta name="description" content={siteData.metaDescription} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
