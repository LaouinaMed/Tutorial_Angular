import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { APIResponseModel, IRole } from 'src/app/model/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roleList: IRole[] =[];
  http = inject(HttpClient);

  //constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:APIResponseModel)=>{
      this.roleList = res.data;
    })
  }
}
