import React, { useMemo, useState } from "react";
import AppDialog from "../../../Shared/AppAlert";
import { Box, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import AppButton from "../../../Shared/AppButton";
import { colors } from "../../../Theme/Colors.styles";
import Formfield from "../../../Shared/Formfield";
import SelectDropDown from "../../../Shared/SelectDropDown";
import { isEqual } from "lodash";
import { useDispatch } from "react-redux";
import { updatePlayers } from "../../../Store/slices/playersSlice";

function ActionPrompts(props) {
  const {
    editDailog,
    setEditDailog,
    setDeleteDailog,
    deleteDailog,
    filteredData,
    setFilteredData,
    handleEditDeleteModalClose,
    selectedRowId,
    importedData,
    nationalityOptions
  } = props;

  const dispatch = useDispatch();

  const [playerData, setPlayerData] = useState(filteredData?.find((player) => player?.id === selectedRowId));

  const initialPlayerData = useMemo(() => filteredData?.find((player) => player?.id === selectedRowId), [filteredData, selectedRowId]);
  const allPostions = useMemo(() => ["Goalkeeper", "Defender", "Midfielder", "Forward"], []);

  function deletePlayer() {
    const filtereDataCopy = [...filteredData];
    const importDataCopy = [...importedData];
    const filtereDataIndex = filteredData.findIndex((x) => x.id === selectedRowId);
    const importedDataIndex = importedData.findIndex((x) => x.id === selectedRowId);
    importDataCopy.splice(importedDataIndex, 1);
    dispatch(updatePlayers(importDataCopy));
    filtereDataCopy.splice(filtereDataIndex, 1);
    setFilteredData(filtereDataCopy);
    handleEditDeleteModalClose();
  }

  function editPlayer() {
    const filtereDataCopy = [...filteredData];
    const importDataCopy = [...importedData];
    const filtereDataIndex = filteredData.findIndex((x) => x.id === selectedRowId);
    const importedDataIndex = importedData.findIndex((x) => x.id === selectedRowId);
    importDataCopy.splice(importedDataIndex, 1, { ...playerData });
    dispatch(updatePlayers(importDataCopy));
    filtereDataCopy.splice(filtereDataIndex, 1, playerData);
    setFilteredData(filtereDataCopy);
    handleEditDeleteModalClose();
  }
  return (
    <div>
      {editDailog && (
        <AppDialog
          open={editDailog}
          maxWidth='sm'
          handleClose={handleEditDeleteModalClose}
          setOpen={setEditDailog}
          dialogTitle='Edit Player'
          footer={
            <Stack direction='row' spacing={2}>
              <AppButton disabled={isEqual(playerData, initialPlayerData)} onClick={editPlayer}>
                Edit Player
              </AppButton>
            </Stack>
          }
        >
          <Grid container spacing={2}>
            <Grid item md={8} lg={8} xl={8}>
              <Formfield
                fullWidth
                label='Player Name'
                placeholder='player name'
                value={playerData?.["player name"]}
                onChange={(e) => setPlayerData({ ...playerData, "player name": e.target.value })}
              />
            </Grid>
            <Grid item md={4} lg={4} xl={4}>
              <Formfield
                fullWidth
                label='Jersey Number'
                placeholder='Jersey Number'
                value={playerData?.["jersey number"]}
                type='number'
                onChange={(e) => setPlayerData({ ...playerData, "jersey number": e.target.value })}
              />
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <Formfield
                fullWidth
                label='Height'
                placeholder='Height'
                value={playerData?.["height"]}
                type='number'
                onChange={(e) => setPlayerData({ ...playerData, height: e.target.value })}
              />
            </Grid>
            <Grid item md={6} lg={6} xl={6}>
              <Formfield
                fullWidth
                label='Weight'
                placeholder='Weight'
                value={playerData?.["weight"]}
                type='number'
                onChange={(e) => setPlayerData({ ...playerData, weight: e.target.value })}
              />
            </Grid>
            <Grid item md={12} lg={12} xl={12}>
              <SelectDropDown
                fullWidth
                placeholder='Select Nationality'
                options={nationalityOptions}
                value={playerData?.nationality}
                onChange={(e) => setPlayerData({ ...playerData, nationality: e.target.value })}
              />
            </Grid>

            <Grid item md={12} lg={12} xl={12}>
              <SelectDropDown
                fullWidth
                placeholder='Select Position'
                options={allPostions}
                value={playerData?.position}
                onChange={(e) => setPlayerData({ ...playerData, position: e.target.value })}
              />
            </Grid>

            <Grid item md={4} lg={4} xl={4}>
              <FormLabel htmlFor='outlined-adornment-password'>
                <Typography variant='14500' color={colors.text.heading}>
                  {" "}
                  Starter
                </Typography>
              </FormLabel>
              <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group' defaultValue={playerData?.starter}>
                <Box sx={{ alignItems: "center", mr: "1rem" }}>
                  <FormControlLabel
                    sx={{ mr: 0 }}
                    value='Yes'
                    control={<Radio onChange={(e) => setPlayerData({ ...playerData, starter: e.target.value })} />}
                    label='Yes'
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    value='No'
                    control={<Radio onChange={(e) => setPlayerData({ ...playerData, starter: e.target.value })} />}
                    label='No'
                  />
                </Box>
              </RadioGroup>
            </Grid>
          </Grid>
        </AppDialog>
      )}

      {deleteDailog && (
        <AppDialog
          disableDividers
          open={deleteDailog}
          maxWidth='xs'
          handleClose={handleEditDeleteModalClose}
          setOpen={setDeleteDailog}
          dialogTitle='Are you sure?'
          footer={
            <Stack direction='row' spacing={2}>
              <AppButton variant='outlined' onClick={handleEditDeleteModalClose}>
                Cancel
              </AppButton>
              <AppButton onClick={deletePlayer}>Delete</AppButton>
            </Stack>
          }
        >
          <Typography variant='14400' color={colors.text.normal}>
            This action cannot be undone.
          </Typography>
        </AppDialog>
      )}
    </div>
  );
}

export default ActionPrompts;
