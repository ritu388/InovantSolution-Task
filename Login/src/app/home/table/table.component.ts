import { Component, OnInit, ViewChild } from '@angular/core';
import { CredentialService } from 'src/app/Service/credential.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableRecord:any = [];
  constructor(
    public credentialService: CredentialService
  ) { }

  ngOnInit(): void {
    this.credentialService.fetchData().subscribe((res: any) =>{
      if(res){
        this.tableRecord.push(res);
      }
    });
  }

  

}
