import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { colors } from "../Theme/Colors.styles";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%"
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <Typography variant='14400'> You do not have any players on the roster</Typography>
      <Typography variant='14500' color={colors.primary.main}>
        {" "}
        Import Team
      </Typography>
    </StyledGridOverlay>
  );
}

function Table(props) {
  const { columns = [], rows = [], ...restProps } = props;

  return (
    <div style={{ height: 700, width: "100%", backgroundColor: colors.layout.secondary, color: colors.text.normal, borderRadius: 8 }}>
      <DataGrid
        slots={{
          noRowsOverlay: CustomNoRowsOverlay
        }}
        rows={rows}
        columns={columns}
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        hideFooterPagination
        hideFooterRowCount
        hideFooterSelectedRowCount
        hideFooter
        isRowSelectable={false}
        autosizeOnMount
      />
    </div>
  );
}

export default Table;
