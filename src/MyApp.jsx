import React, { useState } from "react";
import { Avatar,
  ShellBar,
  ShellBarItem } from "@ui5/webcomponents-react";

import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { useHistory } from "react-router-dom";


export function MyApp() {
	const history = useHistory();
	const handleLogoClick = () => {
	  history.push("./");
	};
  return (<>
			<ShellBar
			  logo={<img src="reactLogo.png" />}
			  profile={<Avatar image="profilePictureExample.png" />}
			  primaryTitle={"My App"}
			  onLogoClick={handleLogoClick}>
			   <ShellBarItem icon="sap-icon://add" text="Add" />
			</ShellBar>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/detail" component={Detail} />
				<Redirect from="/" to="/home" />
			</Switch>
		</>);
}