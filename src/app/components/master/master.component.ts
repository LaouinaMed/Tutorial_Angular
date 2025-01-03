import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CommonModule,RolesComponent,DesignationComponent],
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  currentComponent: string = "Roles";

  changeTab(tabName: string){
    this.currentComponent = tabName; 
  }
}
