import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormEmployeeComponent } from '../form-employee/form-employee.component';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { Employee } from 'src/app/core/models/employee';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss'],
  providers: [MessageService]
})
export class ListEmployeesComponent {
  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'position', 'departement', 'salary', 'actions'];
  dataSource!: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.refreshTable();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  refreshTable(): void {
    this.employees = this.employeeService.getAllEmployees();
    this.dataSource = new MatTableDataSource(this.employees);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openFormDialog(action: string, employee?: Employee): void {
    const dialogRef = this.dialog.open(FormEmployeeComponent, {
      width: '500px',
      data: { action, employee }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employeeService.saveEmployee(result);
        this.refreshTable();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Emplyee ${action}ed successful!` });
      } else {
        this.messageService.add({ severity: 'info', summary: 'Cancelled', detail: `${action} was cancelled.` });
      }
    });
  }

  deleteEmployee(employee: Employee): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        title: 'Delete Confirmation',
        message: 'Are you sure you want to delete this employee?'
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.employeeService.deleteEmployee(employee.id);
        this.refreshTable();
        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Employee deleted successfully!' });
      } else {
        this.messageService.add({ severity: 'info', summary: 'Cancelled', detail: 'Deletion was cancelled.' });
      }
    });
  }
}
