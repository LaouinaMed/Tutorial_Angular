import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterService } from 'src/app/services/master.service';
import { APIResponseModel, IDesignation } from 'src/app/model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  designnationList: IDesignation[] = [];

  masterService = inject(MasterService);
  
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result:APIResponseModel)=>{
      this.designnationList = result.data;
    },error=>{
      alert("API error/ Network Down")
    })
  }

  

}
