import { List, ListItem } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
const UniqueList = ({ component, list }) => {
  return (
    <List>
      {list.map((item) => (
        <ListItem>{item}</ListItem>
      ))}
    </List>
  );
};

UniqueList.propTypes = {
  component: PropTypes.string,
  list: PropTypes.array,
};
export default UniqueList;
