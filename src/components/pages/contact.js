import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/contact/Austin_contact.jpg";

export default function() {
    return (
      <div className="content-page-wrapper">
        <div
          className="left-column"
          style={{
            background: "url(" + contactPagePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="right-column">
          <div className="contact-bullet-points">
            <div className="greeting">
                <h1>Let's be friends!</h1>
            </div>
            <div className="bullet-point-group">
                
              <div className="icon">
                <FontAwesomeIcon icon="phone" />
              </div>
  
              <div className="text">917.920.0037</div>
            </div>
  
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="envelope" />
              </div>
  
              <div className="text">austin@neotericstudios.com</div>
            </div>
  
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="map-marked-alt" />
              </div>
  
              <div className="text">Lehi, UT</div>
            </div>
          </div>
        </div>
      </div>
    );
  }