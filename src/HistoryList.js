import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

export default props => {
  const QueryLink = props.link;

  return props.history.length > 0 ? (
    <List>
      {props.history.map(({ topic, query }, i) => (
        <ListItem key={i}>
          <ListItemText>
            <QueryLink query={`${topic} ${query}`}>
              "{topic} {query}"
            </QueryLink>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  ) : null;
};
