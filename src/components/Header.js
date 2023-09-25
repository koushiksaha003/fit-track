import React from "react";
import './Header.css'
import { useAuth0 } from "@auth0/auth0-react";
export default function Header() {
  const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
  return (
    <div classNameName="header">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<div className="navbar navbar-fixed-top container-fluid" id="navbar">
  	 <div className="navbar-header">
      <button type="button" className="navbar-toggle navbar-default" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
     <h3>Fit Track</h3>
    </div>
    <div className="collapse navbar-right navbar-collapse" id="myNavbar">
    	<ul className="nav navbar-nav">
    		<li>Home</li>
    		<li>About</li>
    		<li>Contact</li>
        {
          isAuthenticated?
          <li onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut
          </li>
          :
    		<li onClick={() => loginWithRedirect()}>Login</li>
        }
    	</ul>
    </div>
  </div>
    </div>
  );
}
