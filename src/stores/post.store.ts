import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const postState = {
  form: {
    title: '',
    slug: '',
    excerpt: '',
    cover: '',
    attachments: [],
    attachments_published: false,
    published_at: undefined,
    content: '',
    collaborator: '',
    rating: 0,
    view: 0,
  },
  sort: 'updatedAt:desc',
  filters: null,
  isEditing: false,
};

const postStore = create(
  immer(
    combine(postState, (set) => ({
      setForm: (form: any) => set({ form }),
      updateForm: (newValue: object) =>
        set((draft) => {
          draft.form = { ...draft.form, ...newValue };
        }),
      clearForm: () => set(() => ({ form: {} })),
      setFilters: (filters: any) => set({ filters }),
      setSort: (sort: any) => set({ sort }),
      setIsEditing: (isEditing: boolean) => set({ isEditing }),
    }))
  )
);

export default postStore;
