class Classroom {
    constructor (){
    this.students=[]
    }

    addStudent(student){
        this.students.push(student)
    }

    getRandomStudent(studentsArr) {
        const randomIndex = Math.floor(Math.random() * studentsArr.length);
        const randomIndex2 = Math.floor(Math.random() * studentsArr.length);
        const randomStudent1 = studentsArr[randomIndex];
        const randomStudent2 = studentsArr[randomIndex2];
        return studentsArr[randomStudent1,randomStudent2];
    }

    printSquads(){
        const randomStudent1 = this.getRandomStudent(this.students);
        const randomStudent2 = this.getRandomStudent(this.students);
        return randomStudent1 + randomStudent2
    }
}



//      -addStudent()
//      -randomizeStudents()
//      -printSquads ()