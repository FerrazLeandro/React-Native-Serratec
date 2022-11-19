import api from './api'

export const getTasks = async () => {
    try {
        const { data } = await api.get("/tasks")
        console.log(data)
        return data
    } catch(e) {
        console.log(e)
    } 
}

export const newTask = async (novaTask) => {
    try{
        const task = await api.post("/tasks", novaTask)
        return task
    } catch(e) {
        console.log(e)
    }
}

export const deleteTask = async (id) => {
    try{
        const deletedTask = await api.delete("/tasks/"+id)
        return deletedTask
    } catch(e) {
        console.log(e)
    }
}

export const updateTask = async (task) => {
    try{
        const updatedTask = await api.put("/tasks/"+task.id, task)
        return updatedTask
    } catch(e) {
        console.log(e)
    }
}