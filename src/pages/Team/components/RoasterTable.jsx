import React, { useMemo, useState } from "react";
import Table from "../../../Shared/Table";
import { Avatar, Box, Stack, Typography } from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomizedMenus from "../../../Shared/CustomisedMenu";
import MenuPopOver from "../../../Shared/MenuPopOver";
import { useNavigate } from "react-router-dom";
import { convertToKg, convertToMetre } from "../../../Shared/Utils/helpers";

function RoasterTable(props) {
  const { tableData = [], setDeleteDailog, setEditDailog, setSelectedRowId } = props;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState();

  const columns = useMemo(
    () => [
      {
        field: "player name",
        headerName: "Player Name",
        flex: 0.25,
        sortable: false,
        renderHeader: () => <Typography variant='12500'>Player Name</Typography>,
        renderCell: (params) => {
          return (
            <Stack direction='row' spacing={1} display='flex' justifyContent='center' alignItems='center'>
              <Avatar sx={{ width: 24, height: 24 }} src={params.row?.["flag image"]} />
              <Typography
                onClick={() => navigate(`/formation?playerId=${params?.id}`)}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                variant='14500'
              >
                {params.value}
              </Typography>
            </Stack>
          );
        }
      },
      {
        field: "jersey number",
        headerName: "Jersey Number",
        flex: 0.125,
        sortable: false,
        renderHeader: () => <Typography variant='12500'>Jersey Number</Typography>,
        renderCell: (params) => <Typography variant='14500'>{params.value}</Typography>
      },
      {
        field: "starter",
        headerName: "Starter",
        flex: 0.1,
        sortable: false,
        renderHeader: () => <Typography variant='12500'>Starter</Typography>,

        renderCell: (params) => <Typography variant='14500'>{params.value}</Typography>
      },
      {
        field: "position",
        headerName: "Position",
        flex: 0.125,
        sortable: false,
        renderHeader: () => <Typography variant='12500'>Position</Typography>,

        renderCell: (params) => <Typography variant='14500'>{params.value}</Typography>
      },

      {
        field: "height",
        headerName: "Height",
        flex: 0.1,

        sortable: false,
        renderHeader: () => <Typography variant='12500'>Height</Typography>,

        renderCell: (params) => <Typography variant='14500'>{convertToMetre(params.value)}</Typography>
      },
      {
        field: "weight",
        headerName: "Weight",
        flex: 0.1,

        sortable: false,
        renderHeader: () => <Typography variant='12500'>Weight</Typography>,

        renderCell: (params) => <Typography variant='14500'>{convertToKg(params.value)}</Typography>
      },
      {
        field: "nationality",
        headerName: "Nationality",
        flex: 0.15,

        sortable: false,
        renderHeader: () => <Typography variant='12500'>Nationality</Typography>,

        renderCell: (params) => <Typography variant='14500'>{params.value}</Typography>
      },
      {
        field: "appearances",
        headerName: "Appearances",
        flex: 0.1,
        sortable: false,
        renderHeader: () => <Typography variant='12500'>Apperances</Typography>,

        renderCell: (params) => <Typography variant='14500'>{params.value}</Typography>
      },
      {
        field: "minutes played",
        headerName: "Minutes Played",
        flex: 0.15,
        sortable: false,
        renderHeader: () => <Typography variant='12500'>Minutes Played</Typography>,

        renderCell: (params) => <Typography variant='14500'>{params.value}</Typography>
      },
      {
        field: "actions",
        type: "actions",
        flex: 0.1,
        renderCell: (params) => {
          return (
            <Box>
              <MoreHorizIcon
                sx={{ cursor: "pointer" }}
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                  setSelectedRowId(params.id);
                }}
              />
              <MenuPopOver
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                setDeleteDailog={setDeleteDailog}
                setEditDailog={setEditDailog}
              />

              {/* <MoreHorizIcon sx={{ cursor: "pointer" }} onClick={() => setPopOpenId(params?.id)} />
              {popOpenId === params?.id && <CustomizedMenus variant='contained' anchorEl={popOpenId} setAnchorEl={setPopOpenId} />} */}
            </Box>
          );
        }
      }
    ],
    [anchorEl]
  );
  return <Table columns={columns} rows={tableData} disableColumnMenu disableColumnFilter disableColumnSelector />;
}

export default RoasterTable;
