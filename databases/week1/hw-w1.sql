-- number of tasks in task table
SELECT COUNT(id) AS "Num_of_tasks" 
FROM task;
-- result (35)

-- number of tasks with no due date
SELECT COUNT(id) AS "tasks_without_due_date" 
FROM task
WHERE due_date IS NULL;
--result (8)

-- tasks marked as done
SELECT * FROM task
WHERE status_id = 3;

-- tasks without mark as done
SELECT * FROM task
WHERE status_id != 3;

-- tasks ordered by the most recent creation
SELECT * FROM task
ORDER BY created DESC;

-- single most recently created task
SELECT * FROM task
ORDER BY created DESC LIMIT 1;

-- title and due date of tasks where the title or description contains database
SELECT title, due_date FROM task
WHERE title LIKE "%database%" OR description LIKE "%database%";

-- the title and status (as text) of all tasks
SELECT title, status.name FROM task
JOIN status ON status.id = status_id;

-- the name of each status, along with number of tasks
SELECT status.name, COUNT(task.status_id) AS total_tasks
FROM task
INNER JOIN status ON task.status_id = status.id
GROUP BY status.name;

-- the names of statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(task.status_id) AS total_tasks
FROM task
INNER JOIN status ON task.status_id = status.id 
GROUP BY status.name 
ORDER BY COUNT(task.status_id) DESC;
