import React, { Component } from "react";

class Footer extends Component {
  render() {
    let networks;
    if (this.props.sharedBasicInfo) {
      networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="email-section">
            <h3>Let's Connect</h3>
            <p>Have a question or want to collaborate?</p>
            {/* Directly link to the email address provided */}
            <a
              href="mailto:laprasad20@gmail.com"
              className="email-button"
            >
              Get in touch
            </a>
          </div>

          <div className="social-links">{networks}</div>

          <div className="achievements-container">
            <div className="copyright py-4 text-center">
              <div className="container">
                <small>
                  Copyright &copy;{" "}
                  {this.props.sharedBasicInfo
                    ? this.props.sharedBasicInfo.name
                    : "???"}
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
