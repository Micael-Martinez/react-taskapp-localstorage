import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
	const [newTask, setNewTask] = useState("");
	const handleChange = (e) => {
		setNewTask(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createNewTask(newTask);
		setNewTask("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type="text" placeholder="Write your task" value={newTask} />
				<button>Save Task</button>
			</form>
		</div>
	);
};
