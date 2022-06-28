import React, { useEffect, useState } from 'react';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import './App.css';

function App() {

    const [tasks, setTasks] = useState([])
    const [showCompleted, setShowCompleted] = useState(false)

    const createNewTask = (taskName) => {
        if (!tasks.some(task => task.name === taskName)) {
            setTasks([...tasks, { name: taskName, done: false }])
        } else {
            return console.log('Amiguito esta repetida')
        }
    }

    const toggleTask = task => {
        //task viene del componente en donde esta input checkbox, en el onChange le paso la funcion toggleTask(task), donde aca agarro esa task a la que le hice click y la retorna para usarla aca como task.
        setTasks(tasks.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t))
    }


    useEffect(() => {
        let data = localStorage.getItem('tasks')
        if (data) {
            setTasks(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    return (
        <div className="App">

            <TaskCreator createNewTask={createNewTask} />
            <TaskTable tasks={tasks} toggleTask={toggleTask} />
            <VisibilityControl setShowCompleted={setShowCompleted} showCompleted={showCompleted} />


        </div>
    );
}
export default App;
