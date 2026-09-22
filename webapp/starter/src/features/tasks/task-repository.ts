export interface TaskRepository {
    createTask:(title: string)=> Promise<any>;
    update:(id: string, title: string)=> Promise<any>;
    get:()=> Promise<any>;
    list:() => Promise<any>;
    remove:(id: string) => Promise<any>;
   
}
export function createTaskRepository(): TaskRepository {
    return ({
        createTask: () => {
            // Implementation for creating a task
        },
        update: () => {
            // Implementation for updating a task
        },
        get: () => {
            // Implementation for getting a task
        },
        list: () => {
            // Implementation for listing tasks
        },
        remove: () => {
            // Implementation for removing a task
        }
    });
}
