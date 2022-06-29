import React, { useEffect, useState } from 'react';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import { Container } from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    const cleanTasks = () => {
        setTasks(tasks.filter(task => !task.done))
        setShowCompleted(false)
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
        <main className='bg-dark vh-100 text-white'>
            <Container>


                <TaskCreator createNewTask={createNewTask} />
                <TaskTable tasks={tasks} toggleTask={toggleTask} />

                {/*//setShowCompleted es pasada como una funcion a VisibilityControl, en Visibility le paso el argumento a setShowCompleted prop, checked va a tomar el valor de e.target.value(true or false), si es true, retorna, si no retorna nada */}
                <VisibilityControl isChecked={showCompleted} setShowCompleted={(checked) => setShowCompleted(checked)} cleanTasks={cleanTasks} />
                {showCompleted && <TaskTable tasks={tasks} toggleTask={toggleTask} showCompleted={showCompleted} />}


            </Container>
        </main>
    );
}
export default App;
