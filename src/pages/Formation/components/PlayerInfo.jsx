import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../Theme/Colors.styles";
import { capitalize, isEmpty } from "lodash";
import { convertToKg, convertToMetre } from "../../../Shared/Utils/helpers";

function PlayerInfo({ playerInfo: playerDetails, isValid }) {
  const fixedPostitonValues = ["appearances", "minutes played"];

  const playerImage = playerDetails?.["player image"];

  const playerPositionsArr =
    playerDetails?.position === "Goalkeeper" ? [...fixedPostitonValues, "clean sheets", "saves"] : [...fixedPostitonValues, "goals", "assists"];

  const playerValue = (key, value) => {
    switch (key) {
      case "Height":
        return convertToMetre(value);
      case "Weight":
        return convertToKg(value);

      default:
        return value;
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",

        backgroundColor: colors.layout.main,
        padding: { md: "5px 15px", lg: "10px 20px" }
      }}
    >
      {!isEmpty(playerDetails) && isValid && (
        <>
          <Box
            sx={{
              height: "50%",
              width: "100%",
              position: "relative",
              backgroundPosition: "center",
              backgroundSize: "250px 250px",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${playerImage})`
            }}
          >
            <Stack>
              <Stack>
                <Typography variant='41600' sx={{ textShadow: "12px -5px 5px #3A3731" }}>
                  {playerDetails?.["jersey number"]}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  position: "absolute",
                  bottom: "50px",
                  left: "20px",
                  opacity: 1
                }}
              >
                <Typography color={colors.text.heading} variant='24500'>
                  {playerDetails?.["player name"]}
                </Typography>
                <Typography color={colors.text.theme} variant='18600'>
                  {playerDetails?.["player name"]}
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Grid container spacing={{ md: 1, lg: 2 }}>
            {["Height", "Weight", "Nationality"]?.map((detail) => (
              <Grid item md={4} lg={4} xl={4}>
                <Stack>
                  <Typography variant='12400' color={colors.text.normal}>
                    {detail}
                  </Typography>
                  <Typography mt={1} variant='14500' color={colors.text.heading} display='flex' alignItems='center'>
                    {detail === "Nationality" && <Avatar sx={{ width: 24, height: 24, mr: 1 }} src={playerDetails?.["flag image"]} />} {""}
                    {playerValue(detail, playerDetails?.[`${detail?.toLowerCase()}`])}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Box mt={{ md: 1, lg: 2 }} mb={{ md: 1, lg: 2 }} sx={{ border: " 1px solid #494949" }} />
          <Box>
            <Grid container spacing={{ md: 1, lg: 2 }}>
              {playerPositionsArr?.map((value, index) => (
                <Grid item xs={6} lg={6}>
                  <Stack>
                    <Typography variant='24600' color={colors.primary.main}>
                      {playerValue(value, playerDetails?.[`${value}`])}
                    </Typography>
                    <Typography variant='12400' color={colors.text.normal}>
                      {capitalize( value)}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
}

export default PlayerInfo;
