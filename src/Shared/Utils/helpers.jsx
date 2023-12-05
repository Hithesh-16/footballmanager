export const convertCSVToJson = (csvData) => {
  const lines = csvData.split("\n");
  const headers = lines[0].split(",");
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentLine = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j].trim()] = currentLine[j].trim();
    }

    result.push(obj);
  }

  return result;
};

export const isValidCSVFormat = (headers) => {

  if(!headers){
    return true
  }
  // built on assuming the fixed columns from the given CSV
  const requiredHeaders = [
    "Player Name",
    "Player Image",
    "Jersey Number",
    "Position",
    "Height",
    "Weight",
    "Nationality",
    "Flag Image",
    "Starter",
    "Appearances",
    "Minutes Played",
    "Goals ",
    "Assists",
    "Clean Sheets",
    "Saves"
  ];


  return !requiredHeaders?.some((item) => !headers?.includes(item));
};

export const isDataClean = (data) => {
  return data?.length >= 1 && !data?.some((item) => item?.some((value) => value === "" || value === undefined));
};

export function setToFixed(v) {
  return v % 1 ? v.toFixed(2) : v;
}

export const convertToKg = (value) => {
  return value === "Unidefined" || value === "Unknown" || isNaN(value) ? value : `${setToFixed(value)} kg`;
};

export const convertToMetre = (value) => {
  return isNaN(value) ? value : `${setToFixed(value / 100)} m`;
};
