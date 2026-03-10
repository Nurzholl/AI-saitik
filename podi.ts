//1
function logData<T>(data: T): void {
    console.log("Данные:", data);
}

logData<string>("Привет, TypeScript!");
logData<number>(42);
//2
class StudentManager {
    private students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    displayStudents(): void {
        console.log("Список студентов:");
        this.students.forEach(s => {
            console.log(`ID: ${s.id}, Имя: ${s.name}, Возраст: ${s.age}, Оценки: [${s.grades}]`);
        });
    }
}

const manager = new StudentManager();
manager.addStudent(newStudent);
manager.displayStudents();
//3-4
interface Student {
    id: number;
    name: string;
    age: number;
    grades: number[];
}

const newStudent: Student = {
    id: 1,
    name: "Иван Иванов",
    age: 19,
    grades: [95, 88, 100]
};
//5
function getAverage(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}
//6
function logData<T>(data: T): void {
    console.log("Данные:", data);
}

logData<string>("Hello, TypeScript!");
logData<number>(42);
logData<boolean>(true);






