function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier !== undefined) {
    return value * multiplier;
  }

  return value * 2;
}

type InputValue = string | number | boolean;

function processInput(value: InputValue): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  }
  return value ? "Active" : "Inactive";
}

type CoordinateInputValue = readonly [number, number, string];

function formatCoordinate(value: CoordinateInputValue): string {
  return `Location: ${value[2]} (${value[0]}, ${value[1]})`;
}

function concatenateArrays <T>(...arrays: T[][]): T[] {
    const data = arrays.flat()
    return data
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const filteredArray = courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
  return filteredArray;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const values: T[K][] = [];
  for (const value of items) {
    values.push(value[key]);
  }
  return values;
}

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
}
