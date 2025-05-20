import { createJSONStorage, StateStorage } from "zustand/middleware";

const firebaseUrl = 'https://zustand-storage-e2ab0-default-rtdb.firebaseio.com/zustand';

const storageApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
   try {
    const data = await fetch(`${firebaseUrl}/${name}.json`).then(res => res.json());
    return JSON.stringify(data)
   } catch (error) {
    throw error
   }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    const data = await fetch(`${firebaseUrl}/${name}.json`, {
      method: 'PUT',
      body: value
    }).then(res => res.json());
    console.log(data);
    return
  },
  removeItem: function (name: string): unknown | Promise<unknown> {
    console.log("removeItem", name);
    return null
  },
};

export const firebaseStorage = createJSONStorage(() => storageApi);