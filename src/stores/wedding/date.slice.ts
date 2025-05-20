import { StateCreator } from "zustand";

export interface DateSlice {
  eventDate: Date;

  eventFecha: () => string;
  eventTiempo: () => string;

  setEvenDate: (parcialDate:string) => void;
  setEvenTime: (parcialTime:string) => void;
}

export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({

  eventDate: new Date(),

  eventFecha: () => {
    return get().eventDate.toISOString().split('T')[0]
  },

  eventTiempo: () => {
    const hours = get().eventDate.getHours().toString().padStart(2,'0');//padStart agrega un 0 delante
    const minutes = get().eventDate.getMinutes().toString().padStart(2,'0');

    return `${hours}:${minutes}`
  },

  setEvenDate: (parcialDate:string) => set((state) => {
    const date = new Date(parcialDate);
    const year = date.getFullYear();
    const month = date.getMonth() +1;
    const day = date.getDate()+1;

    const newDate = new Date(state.eventDate);
    newDate.setFullYear(year, month, day)
    return {eventDate: newDate}

  }),

  setEvenTime: (parcialTime:string) => set((state) => {

    const hours = parseInt(parcialTime.split(':')[0]);
    const minutes = parseInt(parcialTime.split(':')[1]);

    const newDate = new Date(state.eventDate);
    newDate.setHours(hours, minutes)
    return {eventDate: newDate}
  })

})