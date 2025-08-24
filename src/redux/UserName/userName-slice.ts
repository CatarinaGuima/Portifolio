import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null as string | null
  },
  reducers: {
    setName: (state) => {
      state.value = "Catarina Guimarães"
    },
    clearName: (state) => {
      state.value = null
    }
  }
})

export const { setName, clearName } = userSlice.actions

export default userSlice.reducer;