import React, { Component } from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Whitelabel from '../components/Whitelabel';
import Integrations from '../components/Integrations';
import WLFeaturesList from '../components/WLFeaturesList';

class WhitelabelContent extends Component {
  render() {
    return (
      <Layout>
        <Seo
          title={config.titleWhitelabel}
          description={config.WhitelabelDescription}
          url={`${config.siteUrl}`}
          image={config.image}
          keywords={config.keywordsWhitelabel}
        />
        <Whitelabel />
        <WLFeaturesList />
        <Integrations />
        <span className="integrations">
          <span className="singleOffer core">
            <span className="companyLogo">
              <img src="/img/core.png" alt="iphone" border="0" height="150" />
            </span>
            <h2>CORE</h2>
            <h5>
              All the basic features you need on the wallet, in your hand since
              day zero
            </h5>
          </span>
          <span className="singleOffer pro">
            <span className="companyLogo">
              <img
                src="/img/pro.png"
                alt="company logo"
                border="0"
                height="150"
              />
            </span>
            <h2>PRO</h2>
            <h5>
              All the core features plus the exclusive pro functionalities in
              one easy-to-use package
            </h5>
          </span>

          <span className="singleOffer custom">
            <span className="companyLogo">
              <img
                src="/img/custom.png"
                alt="custom wallet"
                border="0"
                height="150px"
              />
            </span>
            <h2>CUSTOM</h2>
            <h5>Do you have any specific feature or need? Let us know.</h5>
          </span>
        </span>

        <span className="whitelabelCTAtitle">
          <h1 className="sectionTitle">
            Want to know more?
            <br />
            Want a quote or try a demo?
            <br />
            Contact Us. No strings attached.
          </h1>
          <a className="wlButton" href="mailto:founders@dexlab.io">
            Get in Touch
          </a>
        </span>
      </Layout>
    );
  }
}

export default WhitelabelContent;
