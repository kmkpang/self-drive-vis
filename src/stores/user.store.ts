import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const postState = {
  user: {
    id: null,
    username: null,
    email: null,
    provider: 'local',
    confirmed: true,
    blocked: false,
  },
};

const userStore = create(
  immer(
    combine(postState, (set) => ({
      setUser: (user: any) => set({ user }),
    }))
  )
);

export default userStore;
