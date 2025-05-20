import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { useWeddingBoundStore } from "../wedding";
// import { customSessionStorage } from "../storages/session.storage";
// import { firebaseStorage } from "../storages/firebase.storage";
// import { logger } from "../middlewares/logger.middleware";

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeApi: StateCreator<
  PersonState & Actions,
  [["zustand/devtools", unknown]]
> = (set) => ({
  firstName: "",
  lastName: "",

  setFirstName: (value: string) =>
    set({ firstName: value }, false, "setFirstName"),
  setLastName: (value: string) =>
    set({ lastName: value }, false, "setLastName"),
});

export const usePersonStore = create<PersonState & Actions>()(
  // logger()
  devtools(
    persist(storeApi, {
      name: "person-storage",
      // storage: customSessionStorage
      // storage: firebaseStorage,
    })
  )
);

usePersonStore.subscribe((nextState, 
  // prevState
) => {
  useWeddingBoundStore.getState().setFirstName(nextState.firstName);
  useWeddingBoundStore.getState().setLastName(nextState.lastName)
})