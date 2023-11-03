import { NewTask, NewTaskButton, NewTaskInput } from "./styles";
import {PlusCircle} from 'phosphor-react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TaskContext } from "../../Contexts/TasksContext";
import { useContext } from "react";

type TaskInputs = {
    taskName: string
}
export function TaskInput(){
    const { addTask, tasks } = useContext(TaskContext)
    const {register, handleSubmit, watch, reset} = useForm({defaultValues: {
        taskName: ''
    }})
    const onSubmit: SubmitHandler<TaskInputs> = (data) => {
        addTask({id: new Date().getTime().toString(),
        task: data.taskName,
        finished: false,
        description: ''
        })
        reset();
    };
    const taskNameValue = watch('taskName')
    console.log(tasks);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <NewTask>
                <NewTaskInput type="text"
                placeholder="Adicione uma nova tarefa"
                {...register('taskName')}
                />
                <NewTaskButton disabled={!taskNameValue}>Criar <PlusCircle /></NewTaskButton>
            </NewTask>
        </form>
    )
}