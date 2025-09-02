const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:1234@localhost/sql_intro')

const Student = sequelize.define('student', {
    s_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    s_name: {
        type: Sequelize.STRING(50)
    },
    is_brilliant: {
        type: Sequelize.BOOLEAN
    }
}, { tableName: 'student', timestamps: false }); // Set tableName and disable timestamps

const Teacher = sequelize.define('teacher', {
    t_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    t_name: {
        type: Sequelize.STRING(50)
    },
    is_tenured: {
        type: Sequelize.BOOLEAN
    }
}, { tableName: 'teacher', timestamps: false });

const StudentTeacher = sequelize.define('student_teacher', {
    student_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Student,
            key: 's_id'
        }
    },
    teacher_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Teacher,
            key: 't_id'
        }
    }
}, { tableName: 'student_teacher', timestamps: false });

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

const addStudent = async function (name, isBrilliant) {
    let query = `INSERT INTO student (s_name, is_brilliant) VALUES ('${name}', ${isBrilliant})`
    let result = await sequelize.query(query)
    return result[0]
}

const addTeacher = async function (name, isTenured) {
    let query = `INSERT INTO teacher (t_name, is_tenured) VALUES ('${name}', ${isTenured})`
    let result = await sequelize.query(query)
    return result[0]
}

const enrollStudent = async function (studentName, teacherName) {
    try {
        const studentQuery = `SELECT s_id FROM student WHERE s_name = '${studentName}'`
        const [studentResults] = await sequelize.query(studentQuery)
        if (studentResults.length === 0) {
            console.error(`Error: Student with name '${studentName}' not found.`);
            return;
        }
        const studentId = studentResults[0].s_id

        const teacherQuery = `SELECT t_id FROM teacher WHERE t_name = '${teacherName}'`
        const [teacherResults] = await sequelize.query(teacherQuery)
        if (teacherResults.length === 0) {
            console.error(`Error: Teacher with name '${teacherName}' not found.`);
            return;
        }
        const teacherId = teacherResults[0].t_id

        const insertQuery = `INSERT INTO student_teacher (student_id, teacher_id) VALUES (${studentId}, ${teacherId})`
        await sequelize.query(insertQuery)
        console.log(`Successfully enrolled student ${studentName} with teacher ${teacherName}.`);
    } catch (err) {
        console.error('Error enrolling student:', err.message);
    }
}

const main = async () => {
    try {
        await addStudent("Leonidis", 1);
        await addTeacher("Yoda", 0);

        await enrollStudent("Leonidis", "Yoda");

    } catch (err) {
        console.error('An error occurred:', err);
    } finally {
        sequelize.close();
    }
};

main();
