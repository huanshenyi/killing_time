import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertContext {
  message: string | null;
  type: "success" | "info" | "warning" | "error";
  description?: string;
}

interface AlertControlState {
  visible: boolean;
  context: AlertContext;
}

const initialState: AlertControlState = {
  visible: false,
  context: {
    message: "",
    type: "success",
  },
};

export const alertControlSlice = createSlice({
  name: "alertControl",
  initialState,
  reducers: {
    displayAlert(state) {
      state.visible = true;
    },
    hideAlert(state) {
      state.visible = false;
    },
    setAlertContent(state, action: PayloadAction<AlertContext>) {
      (state.context.type = action.payload.type),
        (state.context.message = action.payload.message);
    },
  },
});

export const { displayAlert, hideAlert, setAlertContent } =
  alertControlSlice.actions;
