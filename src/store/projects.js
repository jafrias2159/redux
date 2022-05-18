import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const slide = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++id,
        description: action.payload.description,
        resolved: false,
      });

      return projects;
    },

    projectRemoved: (projects, action) => {
      return projects.filter((project) => project.id != action.payload.id);
    },

    projectResolved: (projects, action) => {
      return projects.map((project) => {
        if (project.id === action.payload.id) {
          return { ...project, resolved: true };
        }
        return project;
      });
    },
  },
});

export default slide.reducer;
export const { projectAdded, projectRemoved, projectResolved } = slide.actions;
