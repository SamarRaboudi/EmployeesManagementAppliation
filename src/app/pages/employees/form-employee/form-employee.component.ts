import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  action: string;
  buttonText: string;
  
  // department options
  departments: string[] = [
    'Sales', 
    'Marketing', 
    'Development', 
    'HR', 
    'Finance', 
    'Customer Support', 
    'Operations', 
    'Product Management', 
    'IT', 
    'Legal', 
    'Quality Assurance', 
    'Design', 
    'Research and Development', 
    'Supply Chain', 
    'Administration', 
    'Purchasing', 
    'Engineering', 
    'Training', 
    'Public Relations'
  ];
  

  constructor(
    private dialogRef: MatDialogRef<FormEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { action: string, employee?: any }
  ) {
    this.action = data.action;
    this.buttonText = this.action === 'Edit' ? 'Edit' : 'Add';
  }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      departement: new FormControl('', Validators.required),
      salary: new FormControl('', [Validators.required, Validators.min(0)])
    });

    // Populate the form with existing employee data if action is 'Edit'
    if (this.action === 'Edit' && this.data.employee) {
      this.employeeForm.patchValue({
        name: this.data.employee.name,
        position: this.data.employee.position,
        departement: this.data.employee.departement,
        salary: this.data.employee.salary
      });
    }
  }

  getErrorMessage(control: AbstractControl | null, fieldName: string): string {
    if (!control) return '';
    if (control.hasError('required')) {
      return `${fieldName} is required.`;
    }
    if (control.hasError('min')) {
      return `${fieldName} must be a positive number.`;
    }
    return '';
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveEmployee(): void {
    if (this.employeeForm.valid) {
      const employee = { ...this.data.employee, ...this.employeeForm.value };
      this.dialogRef.close(employee);
    }
  }
}
