import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { Patient } from "@/model/patient";

interface PatientState {
  patients: Patient[];
}

const initialState: PatientState = {
  patients: [],
};

export const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<Patient>) => {
      state.patients.push(action.payload);
    },
    updatePatient: (state, action: PayloadAction<Patient>) => {
      const index = state.patients.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.patients[index] = action.payload;
      }
    },
    removePatient: (state, action: PayloadAction<string>) => {
      state.patients = state.patients.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addPatient, updatePatient, removePatient } =
  patientSlice.actions;

export const selectPatients = (state: RootState) => state.patients.patients;

export default patientSlice.reducer;