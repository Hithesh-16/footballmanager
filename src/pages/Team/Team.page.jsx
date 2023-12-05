import React, { useEffect, useMemo, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DoneIcon from "@mui/icons-material/Done";
import PageContainer from "../../Assets/Shared/PageContainer";
import { Box, Grid, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Formfield from "../../Shared/Formfield";
import AppButton from "../../Shared/AppButton";
import { colors } from "../../Theme/Colors.styles";
import RoasterTable from "./components/RoasterTable";
import AppDialog from "../../Shared/AppAlert";
import { isDataClean, isValidCSVFormat } from "../../Shared/Utils/helpers";
import UploadCSVModal from "./components/UploadCSVModal";
import { groupBy, isEmpty, isEqual, uniq } from "lodash";
import ActionPrompts from "./components/ActionPrompts";
import { useDispatch, useSelector } from "react-redux";
import { updatePlayers, updateTeamName } from "../../Store/slices/playersSlice";

function Team() {
  const roasterDetails = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const [openField, setOpenField] = useState(false);
  const [playerTypes, setPlayerTypes] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [jsonData, setJsonData] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [filteredData, setFilteredData] = useState(roasterDetails?.playersData);
  const [editDailog, setEditDailog] = useState(false);
  const [deleteDailog, setDeleteDailog] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState();
  const [style, setStyle] = useState({ display: "none" });

  const [openDailog, setOpenDailog] = useState(false);

  function handleClose() {
    setOpenDailog(false);
    setCsvData([]);
    setJsonData([]);
  }

  function handleEditDeleteModalClose() {
    setEditDailog(false);
    setDeleteDailog(false);
    setSelectedRowId(null);
  }

  const fieldHandler = (param) => {
    setOpenField(param);
  };
console.log('choco isValidCSVFormat(columns)',isValidCSVFormat(csvData?.data?.[0]))
  useEffect(() => {
    if (csvData?.data) {
      const columns = csvData?.data[0].map((col, index) => {
        return {
          id: index,
          columnName: col?.toString()?.trim()?.toLowerCase(),

          label: col
        };
      });
      if (isValidCSVFormat(csvData?.data?.[0]) && isDataClean(csvData?.data?.slice(1))) {
        const rows = csvData?.data.slice(1).map((row) => {
          return row.reduce((acc, curr, index) => {
            acc[columns[index].columnName] = curr.trim();
            return acc;
          }, {});
        });

        const groupByPlayerType = groupBy(rows, "position");

        setJsonData({
          data: rows?.map((player, index) => ({
            ...player,
            id: index
            // weight: `${setToFixed(player?.weight)} kg`,
            // height: `${setToFixed(player?.height / 100)} m`
          })),
          groupedPlayers: groupByPlayerType
        });
      } else {
        setPlayerTypes({ error: "Your sheet is missing data. Please ensure all cells are filled out." });
      }
    } else {
      setJsonData([]);
    }
  }, [csvData.length]);

  const importData = () => {
    dispatch(updatePlayers(jsonData?.data));
    setFilteredData(jsonData?.data);
    setJsonData([]);
    setCsvData([]);
    setOpenDailog(false);
  };

  function filterData() {
    const filtereData = roasterDetails?.playersData?.filter(
      (item) =>
        item?.["player name"]?.toLowerCase()?.includes(searchedText?.toLowerCase()) ||
        item?.["position"]?.toLowerCase()?.includes(searchedText?.toLowerCase())
    );
    setFilteredData(filtereData);
  }

  const nationalityOptions = useMemo(() => {
    const options = uniq(roasterDetails?.playersData?.map((item) => item?.nationality));
    return options;
  });

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setSearchedText("");
      setFilteredData(roasterDetails?.playersData);
    }
    if (e.keyCode === 13) {
      filterData();
    }
  };

  return (
    <PageContainer>
      <Grid container justifyContent='space-between'>
        <Grid item md={6} xs={6} lg={6} xl={6} justifyContent='center' alignItems='center'>
          <Typography variant='O12500'>Roster Details</Typography>
          <Stack
            direction='row'
            display='felx'
            alignItems='center'
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
            }}
          >
            {!openField ? (
              <Typography variant='18600' sx={{ mr: 2 }}>
                {roasterDetails?.teamName}
              </Typography>
            ) : (
              <Box sx={{ mr: 2 }}>
                <Formfield
                  value={roasterDetails?.teamName}
                  onChange={(e) => {
                    dispatch(updateTeamName(e.target.value));
                  }}
                />
              </Box>
            )}
            <Box sx={{ cursor: "pointer", padding: 0, margin: 0 }}>
              {!openField ? (
                <Box sx={{ padding: 0, margin: 0 }}>
                  <ModeEditIcon
                    sx={{ display: roasterDetails?.teamName !== "My Team" ? style?.display : "block", color: colors.text.heading }}
                    onClick={() => fieldHandler(true)}
                  />
                </Box>
              ) : (
                <DoneIcon
                  sx={{
                    fontSize: "25px",
                    color: colors.text.heading
                  }}
                  onClick={() => fieldHandler(false)}
                />
              )}
            </Box>
          </Stack>
        </Grid>
        <Grid item md={6} xs={6} lg={6} xl={6} justifyContent='flex-end'>
          <Stack direction='row' justifyContent='flex-end' spacing={2} alignItems='center'>
            <Formfield
              onKeyDown={handleKeyDown}
              sx={{ maxWidth: 400 }}
              // endAction={
              //   !isEmpty(searchedText) && (
              //     <AppButton OnClick={filterData} variant='text'>
              //       Search
              //     </AppButton>
              //   )
              // }
              showClear={!isEmpty(searchedText) && (!isEqual(filteredData, roasterDetails?.playersData) || isEmpty(filteredData))}
              onClear={() => {
                setSearchedText("");
                setFilteredData(roasterDetails?.playersData);
              }}
              showButton={!isEmpty(searchedText) && isEqual(filteredData, roasterDetails?.playersData)}
              endButton={{
                label: "Search"
              }}
              buttonClick={() => filterData()}
              value={searchedText}
              onChange={(e) => setSearchedText(e.target.value)}
              startAction={<SearchIcon />}
            />
            <AppButton variant={roasterDetails?.playersData?.length >= 1 ? "outlined" : "contained"} onClick={() => setOpenDailog(true)}>
              {roasterDetails?.playersData?.length >= 1 ? "Re-Import Team" : "Import Team"}
            </AppButton>
          </Stack>
        </Grid>
      </Grid>

      <Box sx={{ pt: 5 }}>
        {" "}
        <RoasterTable tableData={filteredData} setEditDailog={setEditDailog} setDeleteDailog={setDeleteDailog} setSelectedRowId={setSelectedRowId} />
      </Box>
      {openDailog && (
        <AppDialog
          open={openDailog}
          handleClose={handleClose}
          setOpen={setOpenDailog}
          dialogTitle='Importer'
          footer={
            <AppButton disabled={!isDataClean(csvData?.data?.slice(1)) || !(isValidCSVFormat(csvData?.data?.[0]) )} onClick={importData}>
              Import
            </AppButton>
          }
        >
          <UploadCSVModal maxWidth='lg' playerTypes={playerTypes} csvData={csvData} setCsvData={setCsvData} jsonData={jsonData} />
        </AppDialog>
      )}

      {(editDailog || deleteDailog) && (
        <ActionPrompts
          importedData={roasterDetails?.playersData}
          editDailog={editDailog}
          setEditDailog={setEditDailog}
          setDeleteDailog={setDeleteDailog}
          deleteDailog={deleteDailog}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          handleEditDeleteModalClose={handleEditDeleteModalClose}
          selectedRowId={selectedRowId}
          nationalityOptions={nationalityOptions}
        />
      )}
    </PageContainer>
  );
}
export default Team;
