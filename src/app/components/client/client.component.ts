import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from 'src/app/model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { APIResponseModel } from 'src/app/model/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client();

  clientList : Client[] =[];

  clientService = inject(ClientService);


  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }
  onSaveClient(){
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Client Created Sucess");
        this.loadClient();
        this.clientObj = new Client;
      }else{
        alert(res.message);
      }
    })
  }

  onDelete(id : number){
    const isDelete = confirm("Are you sure want to delete");
    if(isDelete){
      this.clientService.deletClientById(id).subscribe((res:APIResponseModel)=>{
        if(res.result){
          alert("Client Delete Sucess");
          this.loadClient();
        }else{
          alert(res.message);
        }
      })
    }
    
  }
  onEdit(data : Client){
    this.clientObj = data;
  }

}
