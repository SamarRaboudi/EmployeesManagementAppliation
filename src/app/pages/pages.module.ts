import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { FormEmployeeComponent } from './employees/form-employee/form-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    ListEmployeesComponent,
    FormEmployeeComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
    ReactiveFormsModule,
    ToastModule,
  ],
  exports: [
    ListEmployeesComponent  
  ]
})
export class PagesModule {}

