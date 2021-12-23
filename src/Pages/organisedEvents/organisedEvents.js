import React, { useCallback, useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Input,
  TextField,
  InputAdornment,
  Stack,
  Button,
  Paper,
  Box,
  Avatar,
  List,
  ListItem,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "./organisedEvents.css";
import { useSelector } from "react-redux";
import useWindowDimensions from "../../Components/useWindowDimensions";
import { SIZE } from "../../Components/ConstantData/apiConstants";
import store from "../../redux/store";
import { getEventsNearMe } from "../../redux/events/eventActions";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function OrganisedEvents() {
  const authenticated = useSelector((state) => state.player.authenticated);
  const user = useSelector((state) => state.player.user);
  const { height, width } = useWindowDimensions();
  const [page, setPage] = useState(1);

  return (
    <Grid container padding="25px" spacing={2}>
      <Grid container paddingLeft="15px" paddingRight="15px" spacing={2}>
        <Grid
          marginTop="15px"
          item
          xs={12}
          sm={8}
          md={9.5}
          order={{ xs: 2, sm: 1 }}
        >
          <Grid container>
            <Paper
              elevation={0}
              style={{
                height: "79vh",
                marginTop: 15,
                width: "100%",
                overflow: "auto",
                borderBottomWidth: 0,
              }}
            >
              {" "}
              <Typography variant="h4" gutterBottom component="div">
                Organised Events
              </Typography>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
              <h4>Hmmmmm</h4>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          marginTop="15px"
          item
          xs={12}
          sm={4}
          md={2.5}
          order={{ xs: 1, sm: 2 }}
        >
          <Paper variant="outlined" elevation={5}>
            <Grid conatiner>
              {authenticated && (
                <Grid
                  container
                  paddingTop="15px"
                  paddingBottom="15px"
                  spacing={2}
                >
                  <Grid textAlign="center" item xs={4} sm={12}>
                    <img
                      alt="user"
                      src={user.image}
                      style={{
                        height: width / 9,
                        width: width / 9,
                        borderRadius: width / 18,
                        resize: "cover",
                        minWidth: 85,
                        minHeight: 85,
                      }}
                    />
                  </Grid>
                  <Grid item xs={8} sm={12}>
                    <Grid container>
                      <Grid item xs={0} sm={4}></Grid>
                      <Grid item textAlign="center" xs={0} sm={4}>
                        <Typography variant="h5">{user.name}</Typography>
                      </Grid>
                      <Grid item xs={0} sm={4}></Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/* <Grid conatiner>
            {authenticated && (
              <Grid
                container
                paddingTop="15px"
                paddingBottom="15px"
                spacing={2}
              >
                <Grid textAlign="center" item xs={4} sm={12}>
                  <img
                    alt="user"
                    src={user.image}
                    style={{
                      height: width / 9,
                      width: width / 9,
                      borderRadius: width / 18,
                      resize: "cover",
                      minWidth: 85,
                      minHeight: 85,
                    }}
                  />
                </Grid>
                <Grid item xs={8} sm={12}>
                  <Grid container>
                    <Grid item xs={0} sm={4}></Grid>
                    <Grid item textAlign="center" xs={0} sm={4}>
                      <Typography variant="h5">{user.name}</Typography>
                    </Grid>
                    <Grid item xs={0} sm={4}></Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid container>
          <Paper
            elevation={0}
            style={{
              height: "79vh",
              marginTop: 15,
              width: "100%",
              overflow: "auto",
              borderBottomWidth: 0,
            }}
          >
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
            <h4>Hmmmmm</h4>
          </Paper>
        </Grid> */}
    </Grid>
  );
}

export default OrganisedEvents;
