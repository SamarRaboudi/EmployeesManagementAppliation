# Employee Management System

## Overview

The Employee Management System is a simple Angular application designed to manage employee records. This project allows users to view a list of employees, add new employees, edit existing employee details, and delete employees from the list. The data is persisted using local storage, making it easy to maintain the information without the need for a backend server.

## Features

- View a list of employees
- Add new employee records
- Edit existing employee details
- Delete employee records
- Data persistence using local storage

## Data Model

The application uses the following data model for employees:

```typescript
export interface Employee {
    id: number;
    name: string;
    position: string;
    department: string;
    salary: number;
}
```
# Installation and Usage

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version 12 or higher)
- Angular CLI (installed globally)

## Getting Started

To set up this project locally, follow these steps:

1. **Clone the repository:**

```bash
   git clone https://github.com/SamarRaboudi/EmployeesManagementAppliation.git
```

1. **Navigate to the project directory:**

```bash
   cd EmployeesManagementAppliation
```

2. **Install the dependencies:**

```bash
   npm install
```

3. **Run the application:**

```bash
   ng serve
```

4. **Access the Application:**

Open your web browser and navigate to [http://localhost:4200/](http://localhost:4200/) to access the employee management pages.

## Usage Instructions

1. **Viewing Employees:**
   - Upon loading the application, you will see a list of existing employees.

2. **Adding an Employee:**
   - Click the "Add Employee" button to open the form.
   - Fill in the employee details and click "Add" to add them to the list.

3. **Editing an Employee:**
   - Click the "Edit" button next to an employee's name.
   - Update the details in the form and click "Edit" to apply changes.

4. **Deleting an Employee:**
   - Click the "Delete" button next to an employee's name. 
   - Click "Confirm" to remove the employee from the list.

## Provided with ❤️ by Sama Raboudi
