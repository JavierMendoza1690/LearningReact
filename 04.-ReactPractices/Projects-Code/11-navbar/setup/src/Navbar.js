import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerReft = useRef(null);
  const linksRef = useRef (null);

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height ;
    console.log(linksHeight);
    if(showLinks){
      linksContainerReft.current.style.height = `${linksHeight}px`
    }else{
      linksContainerReft.current.style.height = '0px'
    }
  },[showLinks])
  return (
    <nav>
      <div className="nav-center" onClick={() => setShowLinks(!showLinks)}>
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>

        <div
          className='links-container' ref={linksContainerReft}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
