import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Tasks : []
}
const saveTasks = JSON.parse(localStorage.getItem("Tasks"));
if(saveTasks){
    initialState.Tasks = saveTasks;
}
const TaskViewSlice = createSlice({
    name: "Tasks",
    initialState,
    reducers:{
        addTasks: (state, action) =>{
            state.Tasks = [...state.Tasks, action.payload]
            localStorage.setItem("Tasks", JSON.stringify(state.Tasks))
        },
        deletTasks : (state, action) =>{
            state.Tasks = state.Tasks.filter((task) => task.id !== action.payload);
            localStorage.setItem("Tasks", JSON.stringify(state.Tasks))

        },
        updateTasks : (state, action) =>{
            const{id, name, projecttitle, projectdescription, createdAt} = action.payload;
            
            const Tasks = state.Tasks.find((task) => task.id === id);
            if(Tasks){
                Tasks.name = name;
                Tasks.id = id;
                Tasks.projecttitle = projecttitle;
                Tasks.projectdescription = projectdescription;
                Tasks.createdAt = createdAt;
            }
            localStorage.setItem("Tasks", JSON.stringify(state.Tasks))
          
        }
    }
})

export const {addTasks, deletTasks ,updateTasks} = TaskViewSlice.actions;
export default TaskViewSlice.reducer;