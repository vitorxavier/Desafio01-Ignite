import {
    ReactNode,
    createContext,
    useReducer,
    useState
} from 'react'

import { Task, tasksReducer } from '../reducers/tasks/reducer'
import { ActionTypes } from '../reducers/tasks/actions'

interface TaskContextType {
    tasks: Task[]
    addTask: (task: Task) => void
    deleteTask: (taskId: string) => void
    toggleTask: (taskId: string) => void
    selectedTask: string
    handleSelectTask: (taskId: string) => void
}
export const TaskContext = createContext({} as TaskContextType)

interface TaskContextProviderProps {
    children: ReactNode
}

export function TaskContextProvider({children}:TaskContextProviderProps) {
    const [tasks, dispatch] = useReducer(
        tasksReducer, [],
        (initialState)=>{
            const storageState = localStorage.getItem('@ignite-todo:tasks-1.0.0')
            if(storageState) return JSON.parse(storageState)
            else return initialState
        }
    )
    const [selectedTask, setSelectedTask] = useState("");

    function addTask(task: Task){
        dispatch({type: ActionTypes.ADD_TASK, payload: task})
    }

    function deleteTask(taskId: string){
        dispatch({type: ActionTypes.DELETE_TASK, payload: taskId})
    }

    function toggleTask(taskId: string){
        dispatch({type: ActionTypes.TOGGLE_TASK, payload: taskId})
    }
    function handleSelectTask(taskId: string){
        setSelectedTask(taskId);
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, deleteTask, toggleTask, selectedTask, handleSelectTask}}>
            {children}
        </TaskContext.Provider>
    )
}