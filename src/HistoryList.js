import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchLink from "./SearchLink";

export default props => {
  return props.history.length > 0 ? (
    <List>
      {props.history.map(({ topic, query }, i) => (
        <ListItem key={i}>
          <ListItemText>
            <SearchLink topic={topic} query={query}>
              "{topic} {query}"
            </SearchLink>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  ) : null;
};
