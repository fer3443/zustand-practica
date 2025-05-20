import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createPersonSlice, PersonSlice } from "./person.slice";
import { createGuestSlice, GuestSlice } from './guests.slice';
import { createDateSlice, DateSlice } from "./date.slice";
import { ConfirmationSlice, createConfirmationSlice } from "./confirmation.slice";

//creo un tipado para agrupar todos los slices y no escribir una cadena larga en el tipado de create
type ShareState = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice;

//(...a) esto es como usar el ...rest, que agrupa los parametros (set,get,storeApi)
export const useWeddingBoundStore = create<ShareState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestSlice(...a),
    ...createDateSlice(...a),
    ...createConfirmationSlice(...a)
  }))
);
