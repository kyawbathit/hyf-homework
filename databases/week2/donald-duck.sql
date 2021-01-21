-- tasks for user with email '@spotify.com'
SELECT title, description FROM task
INNER JOIN user_task ON task.id = user_task.task_id
INNER JOIN user ON user.id = user_task.user_id 
WHERE user.email LIKE '%@spotify.com';

-- tasks for Donald Duck
SELECT user.name, title, description FROM user
INNER JOIN user_task ON user.id = user_task.user_id
INNER JOIN task ON task.id = user_task.task_id 
INNER JOIN status ON status.id = task.status_id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';

-- tasks of Maryrose Meadows created in Sept
SELECT user.name, title, description, created FROM user
INNER JOIN user_task ON user.id = user_task.user_id
INNER JOIN task ON task.id = user_task.task_id 
WHERE user.name = 'Maryrose Meadows' AND month(created) = 9;

-- tasks by Month group
SELECT COUNT(*) AS total, MONTHNAME(created) AS month FROM task
GROUP by MONTHNAME(created);

 


