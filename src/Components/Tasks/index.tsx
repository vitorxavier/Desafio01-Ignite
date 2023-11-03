import { CreatedTasks, EmptyTask, FinishedTasks, TaskDiv, TasksDiv, TasksHeader, TasksList } from "./styles";
import { ClipboardText, Check, Trash } from 'phosphor-react'
import { TaskContext } from "../../Contexts/TasksContext";
import { useContext, useState } from "react";
import { TaskViewer } from "../TaskViewer";

export function Tasks(){
    const { tasks, toggleTask, deleteTask, selectedTask, handleSelectTask } = useContext(TaskContext)
    const [filter, setFilter] = useState(false);
    const filteredTasks = tasks.filter(x=>{
        if(filter) return x.finished
        else return true
    }).sort((a,b)=>{
        if(a.finished>b.finished) return 1
        else if(a.finished<b.finished) return -1
        else return 0
    })
    function filterToggle(){
        setFilter((x)=>!x)
    }
    return (
        <TasksDiv> 
            {selectedTask?<TaskViewer />:<></>}
            <TasksHeader>
                <CreatedTasks className={filter?"":"active"} onClick={()=>{filter?filterToggle():""}}>Tarefas Criadas <span>{tasks.length}</span></CreatedTasks>
                <FinishedTasks className={!filter?"":"active"} onClick={()=>{!filter?filterToggle():""}}>Concluídas <span >{tasks.filter(x=>x.finished).length}</span></FinishedTasks>
            </TasksHeader>
            <TasksList className={filteredTasks.length>0?"not-empty":""}>
                {filteredTasks.length==0?(
                    <EmptyTask>
                        <ClipboardText />
                        <span className="title">Você ainda não tem tarefas {filter?"concluídas":"cadastradas"}</span>
                        <span className="subtitle">Crie tarefas e organize seus itens a fazer</span>
                    </EmptyTask>
                )
                : filteredTasks.map(x=>
                
                <TaskDiv >
                    {x.finished?
                    <div className="toggle-selected" onClick={()=>{toggleTask(x.id)}}><Check weight="bold"/></div>:
                    <div className="toggle-button" onClick={()=>{toggleTask(x.id)}}></div>}

                    <div className={x.finished?"finished-task":"task-text"} onClick={()=>{handleSelectTask(x.id)}}>{x.task}</div>
                    <div className="delete-button" onClick={()=>{deleteTask(x.id)}}><Trash size={20}/></div>
                </TaskDiv>
                
                )
                }
            </TasksList>
        </TasksDiv>
    )
}