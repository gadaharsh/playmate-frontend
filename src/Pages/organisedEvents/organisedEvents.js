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

export default function organisedEvents() {
    return (
        <Grid marginTop="15px" item xs={10} sm={6} md={4}>
              <Button variant="contained" type="submit">
                Profile
              </Button>
            </Grid>
    )
}
