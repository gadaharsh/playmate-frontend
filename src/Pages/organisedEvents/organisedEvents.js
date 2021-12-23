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
import "./organisedEvents.css";
import { useSelector } from "react-redux";
import useWindowDimensions from "../../Components/useWindowDimensions";
import { SIZE } from "../../Components/ConstantData/apiConstants";
import store from "../../redux/store";
import { getEventsNearMe } from "../../redux/events/eventActions";

function OrganisedEvents() {
  const authenticated = useSelector((state) => state.player.authenticated);
  const user = useSelector((state) => state.player.user);
  const { height, width } = useWindowDimensions();
  const [page, setPage] = useState(1);

  return (
    <Grid container padding = "25px" spacing={2}>
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
    </Grid>

  );
}

export default OrganisedEvents;
