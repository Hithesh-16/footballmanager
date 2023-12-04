import React, { useCallback, useEffect, useState } from "react";
import BackgroundSoccerImage from "../../../Assets/Icons/soccer-field.png";
import "../SoccerImage.css";
import { Avatar, Stack, Typography } from "@mui/material";
import { colors } from "../../../Theme/Colors.styles";
import { FONT } from "../../../Theme/font";
import { createPlayersObj } from "../Helper/FormationHelper";
import { isEmpty } from "lodash";
import { OverlayCell } from "../../../Shared/OverlayCell";

function FormationImage({ starters, isValid, selectedPlayerDetails }) {
  const arr = Array.from({ length: 25 }, (value, index) => index + 1);

  const [playersPositionsObj, setPlayersPositionsObj] = useState({});
  const playerPositionsInGrid = {
    11: "Goalkeeper",
    2: "Defender",
    7: "Defender",
    17: "Defender",
    22: "Defender",
    8: "Midfielder",
    13: "Midfielder",
    18: "Midfielder",
    9: "Forward",
    14: "Forward",
    19: "Forward"
  };

  useEffect(() => {
    if (!isEmpty(starters)) {
      const positionsObj = createPlayersObj(playerPositionsInGrid, starters);
      setPlayersPositionsObj(positionsObj);
    }
  }, [starters?.length]);

  // const playerPositionsInGrid1 = {
  //   11: goalKeeper?.[0],
  //   2: defender?.[0],
  //   7: defender?.[1],
  //   17: defender?.[2],
  //   22: defender?.[3],
  //   8: midfielder?.[0],
  //   13: midfielder?.[1],
  //   18: midfielder?.[2],
  //   9: forward?.[0],
  //   14: forward?.[1],
  //   19: forward?.[2]
  // };

  const isSelectedPlayerPoistion = (posObj) => {
    return posObj?.["jersey number"] === selectedPlayerDetails?.[["jersey number"]];
  };

  const gridPositionsArr = [11, 2, 7, 17, 22, 8, 13, 18, 9, 14, 19];
  return (
    <div
      style={{
        height: "calc(100vh - 150px)",
        maxWidth: "100%",
        position: "relative",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${BackgroundSoccerImage})`,
        backgroundRepeat: "no-repeat"
      }}
    >
      {starters?.length && isValid && (
        <div class='container'>
          {arr?.map((item, index) => (
            <div class={`item ${"item" + (index + 1)}`}>
              {gridPositionsArr.includes(index + 1) && (
                <Stack display='flex' alignItems='center'>
                  <Avatar
                    sx={{
                      backgroundColor: isSelectedPlayerPoistion(playersPositionsObj?.[`${item}`]) ? colors.primary.main : colors.layout.main,
                      border: isSelectedPlayerPoistion(playersPositionsObj?.[`${item}`]) ? "none" : "2px solid white",
                      fontSize: "16px",
                      fontFamily: FONT.w600
                    }}
                  >
                    {playersPositionsObj?.[`${item}`]?.["jersey number"]}
                  </Avatar>

                  <OverlayCell color='#000000'>
                    <Typography sx={{ textDecoration: "inline" }} variant='14500' color={colors.text.heading}>
                      {playersPositionsObj?.[`${item}`]?.["player name"]}
                    </Typography>
                  </OverlayCell>
                </Stack>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FormationImage;
