import { Overwall, TaskOverview } from "./styles";
import { TaskContext } from "../../Contexts/TasksContext";
import { useContext } from "react";
import {formatDistanceToNow} from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

export function TaskViewer() {
    const { tasks, selectedTask, handleSelectTask } = useContext(TaskContext)
    const thisTask = tasks.find(x=>x.id===selectedTask)
    return (
        <Overwall onClick={()=>{handleSelectTask('')}}>
            <TaskOverview>
                <h1>{thisTask && thisTask.task}</h1>
                <h2>{thisTask? formatDistanceToNow(new Date(Number.parseInt(thisTask.id)),{ addSuffix: true, locale: ptBR}) :""}</h2>
            </TaskOverview>
        </Overwall>
    )
}