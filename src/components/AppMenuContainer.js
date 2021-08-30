import * as React from "react";
import { withRouter } from "react-router-dom";
import { Menu, MenuItem } from "@progress/kendo-react-layout";

const AppMenuContainer = (props) => {
    
  const onSelect = (event) => {
    props.history.push(event.item.data.route);
  };
 
  return (
    <React.Fragment>
      <Menu onSelect={onSelect} className="App-header">
        <MenuItem text="Home" data={{ route: "/" }} />
        <MenuItem text="Destinations" data={{ route: "/destinations" }} />
        <MenuItem text="Book" data={{ route: "/book" }}>
        </MenuItem>
      </Menu>
      <div className="App-content" style={{ padding: 20 }}>{props.children}</div>
    </React.Fragment>
  );
};

export default withRouter(AppMenuContainer);