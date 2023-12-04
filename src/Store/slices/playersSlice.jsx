import { createSlice } from "@reduxjs/toolkit";

export const playersSlice = createSlice({
  name: "players",

  initialState: {
    playersData: [],
    teamName: "My Team"
  },
  reducers: {
    updatePlayers: (state, action) => void (state.playersData = action.payload),
    updateTeamName: (state, action) => void (state.teamName = action.payload)
  }
});

export const { updatePlayers, updateTeamName } = playersSlice.actions;
export default playersSlice.reducer;
