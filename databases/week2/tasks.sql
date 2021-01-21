-- add a task 
insert into task (title, description, created, updated, due_date, status_id)
values ('Health check','Go to take corona test', '2021-01-16 11:41:53', '2021-01-17 11:41:53', NOW(), 2);
-- add the task into user_task 
INSERT INTO user_task (user_id, task_id)
VALUES (11, 36);

-- change title of a task
UPDATE task
SET title = 'Submit homework'
WHERE id = 35;

-- change due date of a task
UPDATE task
SET due_date = NOW()
WHERE id = 35;

-- change the status of a task
UPDATE task
SET status_id = 2
WHERE id = 35;

-- mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 37;

-- delete a task 
DELETE FROM task
WHERE id = 34;