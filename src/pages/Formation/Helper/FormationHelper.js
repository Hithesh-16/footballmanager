import { isEmpty } from "lodash";

export const requiredFormation = {
  Goalkeeper: 1,
  Defender: 4,
  Midfielder: 3,
  Forward: 3
};

export const createPlayersObj = (positionsObj = {}, players = []) => {
  let updatedPlayersObj = {};
  let playersCopy = [...players];

  Object.keys(positionsObj)?.forEach((pos) => {
    const player = playersCopy?.find((item) => item?.position === positionsObj?.[`${pos}`]);

    updatedPlayersObj[pos] = player;
    const index = playersCopy.findIndex((x) => x.id === player?.id);

    playersCopy?.splice(index, 1);
  });
  return updatedPlayersObj;
};

export const validatePlayersData = (data) => {
  // alert("hi");
  let validationDetails = {
    Goalkeeper: 0,
    Defender: 0,
    Midfielder: 0,
    Forward: 0
  };
  if (isEmpty(data)) {
    return {
      isValid: false,
      error: "No player data found",
      subText: "Please import your roaster first"
    };
  }

  const startersData = data?.filter((item) => item?.starter === "Yes");

  if (startersData?.length > 11) {
    return {
      isValid: false,
      error: "There are too many starters",
      subText: "Your team has too many starters for one or more of the positions in the 4-3-3 formation."
    };
  }
  if (startersData?.length < 11) {
    return {
      isValid: false,
      error: "Not enough starters",
      subText: "Your team doesn’t have enough starters  for one or more of the positions in the 4-3-3 formation"
    };
  }
  if (startersData?.length === 11) {
    startersData.forEach((player, index) => {
      switch (player?.position) {
        case "Goalkeeper":
          validationDetails["Goalkeeper"] = validationDetails?.Goalkeeper + 1;
          break;
        case "Defender":
          validationDetails["Defender"] = validationDetails?.Defender + 1;
          break;
        case "Midfielder":
          validationDetails["Midfielder"] = validationDetails?.Midfielder + 1;
          break;
        case "Forward":
          validationDetails["Forward"] = validationDetails?.Forward + 1;
          break;

        default:
          break;
      }
    });

    let validations = {};

    Object.keys(requiredFormation)?.every((position) => {
      if (validationDetails[`${position}`] > requiredFormation?.[`${position}`]) {
        validations = {
          isValid: false,
          error: `There are too many ${position}s`,
          subText: `Your team has ${validationDetails[`${position}`]} ${position}s. But the required is only ${requiredFormation?.[`${position}`]}  `
        };
        return 0;
      }

      if (validationDetails[`${position}`] < requiredFormation?.[`${position}`]) {
        validations = {
          isValid: false,
          error: `Not enough ${position}s`,
          subText: `Your team  have only ${validationDetails[`${position}`]}  ${position}s. But the required is ${
            requiredFormation?.[`${position}`]
          }  `
        };
        return 0;
      } else return 1;
    });

    if (!isEmpty(validations)) {
      return validations;
    } else {
      return {
        isValid: true,
        data: startersData
      };
    }
  }
};
