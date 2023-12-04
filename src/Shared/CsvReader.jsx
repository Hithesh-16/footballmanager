import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useCSVReader } from "react-papaparse";
import { colors } from "../Theme/Colors.styles";
import { convertCSVToJson, isDataClean } from "./Utils/helpers";

function CsvReader(props) {
  const { setCsvData, showCSVtext, showError } = props;
  const { CSVReader } = useCSVReader();

  return (
    <Box>
      <CSVReader
        onUploadAccepted={(results) => {
          setCsvData(results);
        }}
      >
        {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
          <>
            <Box
              sx={{
                border: showError ? `1px solid ${colors.error.main}` : "1px solid #494949",
                minWidth: 300,
                maxWidth: 400,
                borderRadius: 2,
                height: 44,
                padding: "2px 4px",
                cursor: "pointer"
              }}
              direction='row'
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              mb={2}
              {...getRootProps()}
            >
              {
                <Typography variant='14400' color={colors.text.muted}>
                  {acceptedFile?.name ? acceptedFile?.name : "No file selected"}
                </Typography>
              }
              <Box
                sx={{ borderLeft: showError ? `1px solid ${colors.error.main}` : "1px solid #494949", height: 44, padding: "2px 4px" }}
                display='flex'
                alignItems='center'
              >
                <Typography variant='14500'> Select file</Typography>
              </Box>
            </Box>
          </>
        )}
      </CSVReader>
      {showCSVtext && (
        <Typography variant='14400' color={colors.text.muted}>
          File must be in .csv format
        </Typography>
      )}
    </Box>
  );
}

export default CsvReader;
