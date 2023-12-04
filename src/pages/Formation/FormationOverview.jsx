import React, { useEffect, useState } from "react";
import PageContainer from "../../Assets/Shared/PageContainer";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { colors } from "../../Theme/Colors.styles";
import FormationImage from "./components/FormationImage";
import PlayerInfo from "./components/PlayerInfo";
import { useSelector } from "react-redux";
import { validatePlayersData } from "./Helper/FormationHelper";
import AppDialog from "../../Shared/AppAlert";
import Caution from "../../Assets/Icons/Caution";

function FormationOverview() {
  const roasterDetails = useSelector((state) => state?.players);
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("playerId");

  const [selectedPlayerDetails, setSelectedPlayerDetails] = useState();
  const [starters, setStarters] = useState();
  const [validationDetails, setValidationDetails] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const validation = validatePlayersData(roasterDetails?.playersData);
    console.log("choco Hitesh ~ file: FormationOverview.jsx:25 ~ useEffect ~ validation:", validation);

    if (!validation?.isValid) {
      setValidationDetails(validation);
      setOpen(!validation?.isValid);
    }

    if (validation?.isValid) {
      if (id) {
        setSelectedPlayerDetails(roasterDetails?.playersData?.find((player) => player?.id === Number(id)));
      } else {
        setSelectedPlayerDetails(roasterDetails?.playersData?.find((player) => player?.position === "Goalkeeper"));
      }
      setStarters(validation?.data);
      setValidationDetails(validation);
    }
  }, [JSON.stringify(roasterDetails)]);

  return (
    <PageContainer>
      <Stack>
        <Typography variant='O12500'>Formation Overview</Typography>
        <Typography variant='18600'>{roasterDetails?.teamName}</Typography>
      </Stack>
      <Box mt={4} sx={{ minHeight: "calc(100vh - 200px)", backgroundColor: colors.layout.secondary, radius: 8, padding: "35px 35px" }}>
        <Grid container spacing={1}>
          <Grid item xs={8} md={8} lg={8} xl={8}>
            <FormationImage setSelectedPlayerDetails={setSelectedPlayerDetails} selectedPlayerDetails={selectedPlayerDetails} isValid={validationDetails?.isValid} starters={starters} />
          </Grid>
          <Grid item xs={4} md={4} lg={4} xl={4}>
            <PlayerInfo playerInfo={selectedPlayerDetails} isValid={validationDetails?.isValid} />
          </Grid>
        </Grid>
      </Box>

      {!validationDetails?.isValid && (
        <AppDialog
          disableBackdropClick
          showCloseIcon={false}
          maxWidth='xs'
          open={open}
          setOpen={setOpen}
          dialogTitle={
            <Stack direction='row' spacing={2} display='flex' justifyContent='center'>
              <Caution />
              <Typography>{validationDetails?.error}</Typography>
            </Stack>
          }
        >
          <Stack direction='row' spacing={2} display='flex' justifyContent='center'>
            <Typography variant='14400' color={colors.text.normal}>
              {validationDetails?.subText}
            </Typography>
          </Stack>
        </AppDialog>
      )}
    </PageContainer>
  );
}

export default FormationOverview;
