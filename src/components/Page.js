import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import PageHeader from "./PageHeader";

const Page = ({ title, description }) => (
  <Grid container>
    <Grid item xs={12}>
      <PageHeader title={title} description={description} />
    </Grid>
  </Grid>
);

Page.propTypes = {
  description: PropTypes.string,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
};

export { Page as default };
