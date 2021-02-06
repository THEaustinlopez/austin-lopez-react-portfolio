import React from "react";
import profilePicture from "../../../static/assets/images/bio/austin-login-changes.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
        <div 
            className="left-column" 
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        />
      <div className="right-column">
        <p>I am a seasoned nerd, developer, and technical wizard. My tech skills include (but are not limited to): 
          Javascript, ReactJS, Python 3, UML, HTML5, CSS, Flask, JSON, Git, MongoDB, SQL Databases, SCSS/SASS, Flexbox, 
          CSS Grid, Visual Studio, ProTools. I’ve worn many hats in my ventures — developer, “IT-guy”, audio/video programmer, 
          studio technician, hardware manipulator, designer, composer, sound designer, empath, post production supervisor, and 
          keynote speaker. As a result, I have a unique ability to manage multi-disciplinary projects and to navigate complex 
          challenges. With that experience, I have found that my professional values have been molded into the following:
        </p>

        <ul>
          <li>I am a multi-linguist of Intermedia Music Technology (technology driven music). I speak fluent geek, development, IT, designer, music, bug-fixer, and human connection/emotion. Understanding means fewer missteps, and missteps cost you money.</li>
          <li>I don’t care who gets credit, I just want to succeed together.</li>
          <li>I dream big but so do a lot of people. Execution is what matters and I execute!</li>
          <li>I am a right brain main making my left brain highly efficient and effective.</li>
          <li>I am the passionate one.</li>
          <li>I welcome growth and hard things.</li>
          </ul>

        <p>I love making new professional acquaintances. Reach out if you want to talk tech, development, music/sound, or eSports (especially Overwatch).</p>
        <p>Niche specialities: Kyma, agile development training, Wwise, Reaper, Nuendo, Ableton Live, Logic Pro X, Sibelius, Max/MSP, Control4, Savant, Super Collider, and Chuck.</p>
        
      </div>
    </div>
  );
}