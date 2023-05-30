import create from 'zustand';
import _ from 'lodash';

const useStore = create((set, get) => ({
  user: {},
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setUser: (user) => set({ user, isAuthenticated: !_.isEmpty(user) }),
  clearUser: () => set({ user: {}, isAuthenticated: false }),
}));

export default useStore;
