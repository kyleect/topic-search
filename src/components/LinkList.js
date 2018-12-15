import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import React, { Fragment } from "react";

export default props => {
  const { items } = props;

  return (
    <List>
      {items.map((item, i) => (
        <Fragment key={i}>
          <ListItem>
            <ListItemText>{props.children(item)}</ListItemText>
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};
