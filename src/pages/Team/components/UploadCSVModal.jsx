import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import CsvReader from "../../../Shared/CsvReader";
import { isDataClean, isValidCSVFormat } from "../../../Shared/Utils/helpers";
import { colors } from "../../../Theme/Colors.styles";

function UploadCSVModal(props) {
  const { setCsvData, csvData, jsonData = {} } = props;

  const playerSummaryDetails = useMemo(() => {
    let total = 0;
    const playerTypeDetails = {};
    if (!jsonData?.groupedPlayers) return {};
    Object.keys(jsonData?.groupedPlayers)?.forEach((key) => {
      total += jsonData?.groupedPlayers?.[key]?.length;

      playerTypeDetails[`${key}s`] = jsonData?.groupedPlayers?.[key]?.length;
    });
    return { ...{ "Total Players": total }, ...playerTypeDetails };
  }, [csvData.length, jsonData?.length, setCsvData]);

  return (
    <Box minHeight={300}>
      <>
        <Typography variant='14500' color={colors.text.muted}>
          Roster File
        </Typography>
        <CsvReader
          setCsvData={setCsvData}
          showCSVtext={isValidCSVFormat(csvData?.data?.[0]) && (isDataClean(csvData?.data?.slice(1)) || !csvData?.data?.length)}
          showError={(!isValidCSVFormat(csvData?.data?.[0]) || !isDataClean(csvData?.data?.slice(1))) && csvData?.data?.length}
        />
        {(!isValidCSVFormat(csvData?.data?.[0]) || !isDataClean(csvData?.data?.slice(1))) && csvData?.data?.length >= 1 && (
          <Typography variant='14500' color={colors.error.main}>
            Error
          </Typography>
        )}
      </>
      {csvData?.data?.length >= 1 && (isValidCSVFormat(csvData?.data?.[0]) &&
        (isDataClean(csvData?.data?.slice(1))) ? (
          <Box mt={2}>
            <Typography variant='14500'>File Summary</Typography>
            <Grid container spacing={2} mt={1}>
              {jsonData?.groupedPlayers &&
                Object?.keys(playerSummaryDetails)?.map((position, index) => (
                  <Grid item xs={2} md={2} lg={2} xl={2}>
                    <Stack alignItems='flex-start'>
                      <Typography variant='14400'>{position}</Typography>
                      <Typography variant='16600'>{playerSummaryDetails?.[position]}</Typography>
                    </Stack>
                  </Grid>
                ))}
            </Grid>
          </Box>
        ) : (
          <Box>
            <Typography variant='14400'> Your sheet is missing data. Please ensure all cells are filled out.</Typography>
          </Box>
        ))}
    </Box>
  );
}

export default UploadCSVModal;
