import { List, ListItem, Typography } from "@material-ui/core";
import useStyles from "hooks/useStyles";
import PropTypes from "prop-types";
import React from "react";

const ChangeList = ({ changes, changeSet, id }) => {
  const classes = useStyles();
  return (
    <div className={classes.changeList}>
      <Typography variant="overline">{changeSet}</Typography>
      <List component="ul">
        {changes.map((change, idx) => (
          <ListItem key={`${id}-${idx + 1}`}>{change}</ListItem>
        ))}
      </List>
    </div>
  );
};

ChangeList.propTypes = {
  changes: PropTypes.array.isRequired,
  changeSet: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ChangeList;
