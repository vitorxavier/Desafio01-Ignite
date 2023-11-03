import { ActionTypes } from "./actions";
import { produce } from 'immer'
export interface Task {
    id: string
    task: string
    finished: boolean
    description: string
}

export function tasksReducer(
    state: Task[],
    action: {
        payload: any; 
        type: ActionTypes}
): Task[] {
    switch(action.type){
        case ActionTypes.ADD_TASK:
            // Handle create new task
            return produce(state, (draft)=>{
                if(action.payload) draft.push(action.payload)
            })
        case ActionTypes.DELETE_TASK:
            // Handle delete task
            return produce(state,(draft)=>{
                if(action.payload) draft.splice(draft.findIndex(x=>x.id===action.payload),1)
            })
        case ActionTypes.TOGGLE_TASK:
            // Handle finish task
            return produce(state,(draft)=>{
                if(action.payload) draft[draft.findIndex(x=>x.id===action.payload)].finished = !draft[draft.findIndex(x=>x.id===action.payload)].finished
            })
        case ActionTypes.UPDATE_DESCRIPTION:
            return produce(state,(draft)=>{
                if(action.payload) draft[draft.findIndex(x=>x.id===action.payload.taskId)].description = action.payload.description
            })

    }
}