import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly storageKey = 'employees';

  constructor() { }

  getAllEmployees(): Employee[] {
    const storedEmployees = localStorage.getItem(this.storageKey);
    return storedEmployees ? JSON.parse(storedEmployees) : [];
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.getAllEmployees().find(employee => employee.id === id);
  }

  saveEmployee(employee: Employee): void {
    const employees = this.getAllEmployees();

    if (!employee.id) {
      // Add new employee
      employee.id = this.generateEmployeeId();
      employees.push(employee);
    } 
    else {
      // Update existing employee
      const existingEmployeeIndex = employees.findIndex(e => e.id === employee.id);
      if (existingEmployeeIndex !== -1) {
        employees[existingEmployeeIndex] = employee;
      }
    }

    localStorage.setItem(this.storageKey, JSON.stringify(employees));
  }

  deleteEmployee(id: number): void {
    const employees = this.getAllEmployees();
    const updatedEmployees = employees.filter(employee => employee.id != id);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedEmployees));
  }

  private generateEmployeeId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
