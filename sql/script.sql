CREATE DATABASE IF NOT EXISTS sql_intro;
USE sql_intro; 

CREATE TABLE IF NOT EXISTS student(
    s_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    s_name VARCHAR(50),
    is_brilliant BOOLEAN,
)

CREATE TABLE IF NOT EXISTS teacher(
    t_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    t_name VARCHAR(50),
    is_tenured BOOLEAN,
)

CREATE TABLE IF NOT EXISTS student_teacher(
    student_id INT NOT NULL,
    teacher_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES student(s_id),
    FOREIGN KEY (teacher_id) REFERENCES teacher(t_id),
)

CREATE DATABASE IF NOT EXISTS pokecorp;