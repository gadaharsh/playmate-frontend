import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import store from "../../redux/store";
import { useSelector } from "react-redux";
import api from "../../config/api";
import HorizontalBarChart from "../../Components/Charts/HorizontalBarChart";
import PieChart from "../../Components/Charts/PieChart";
import useWindowDimensions from "../../Components/useWindowDimensions";
import { randomColor } from "../../util/functions";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import PlayerCardExtra from "../../Components/PlayerCardExtra/playerExtraInfo";
import PlayerCard from "../../Components/PlayerCard/playerCard";
import Header from "../../Components/Header/header";

function PlayerProfile(props) {
  const match = useParams();
  const [playerDetails, setPlayerDetails] = useState({});
  const user = useSelector((state) => state.player.user);
  const [pieDetails, setPieDetails] = useState({});
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const [labels1, setLabels1] = useState([]);
  const [values1, setValues1] = useState([]);
  const [loading, setLoading] = useState(true);
  const { height, width } = useWindowDimensions();
  const [colors, setColors] = useState([]);

  const fetchPlayerDetails = () => {
    setLoading(true);
    axios
      .get(`${api}/player/profile/${match.id}`)
      .then((res) => {
        console.log(res.data);
        var keys = Object.keys(res.data.analysis);
        setPlayerDetails(res.data.playerDetails);
        setLabels(keys);
        console.log(keys);
        var value = Object.values(res.data.analysis);
        setValues(value);
        setLabels1(res.data.labels);
        setValues1(res.data.values);
        var bg = [];
        var border = [];
        for (var i = 0; i < res.data.values.length; i++) {
          var k = randomColor();
          bg.push(k[0]);
          border.push(k[1]);
        }
        var c = [bg, border];
        setColors(c);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    fetchPlayerDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container padding="30px" spacing={2}>
      <Grid item xs={12} sm={8} md={9.5} order={{ xs: 2, sm: 1 }}>
        <Grid container>
          <Header title="Player Profile" />
          <Paper
            elevation={0}
            style={{
              marginTop: 15,
              padding: 20,
              width: "100%",
              overflow: "auto",
              borderBottomWidth: 0,
            }}
          >
            {!loading && (
              <Grid container spacing={2}>
                <div>
                  <HorizontalBarChart value={values} />
                </div>
                <div>
                  <PieChart label={labels1} value={values1} />
                </div>
                <div>
                  <PlayerCardExtra />
                </div>
              </Grid>
            )}
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
        <PlayerCard />
        {/* <PlayerCardExtra /> */}

        {/* <Box display="grid">
          <Box gridColumn="span 8">
            <PlayerCard />
          </Box>
          <Box gridColumn="span 4">
            <PlayerCardExtra />
          </Box>
        </Box> */}
      </Grid>
    </Grid>
  );
}

export default PlayerProfile;
