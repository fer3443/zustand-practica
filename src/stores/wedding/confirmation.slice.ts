import { StateCreator } from "zustand";

export interface ConfirmationSlice {
  confirm:boolean;

  setConfirm: (confirm:boolean) => void;
}

export const createConfirmationSlice:StateCreator<ConfirmationSlice> = (set) => ({
  confirm: false,

  setConfirm: (confirm:boolean) => set({confirm})
})
