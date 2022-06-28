export const VisibilityControl = ({ setShowCompleted, showCompleted }) => {
	return (
		<div>
			<input type="checkbox" onChange={(e) => setShowCompleted(!showCompleted)} /> <label> Show Tasks Done</label>
			{showCompleted && <TaskTable tasks={tasks} toggleTask={toggleTask} showCompleted={showCompleted} />}
		</div>
	);
};
