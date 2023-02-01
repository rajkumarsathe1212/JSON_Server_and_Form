import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-json-trial',
  templateUrl: './json-trial.component.html',
  styleUrls: ['./json-trial.component.css']
})
export class JsonTrialComponent implements OnInit{

  formgroup:any;
  datas:any;


  constructor(private api:ApiService) { }




  load(){
    this.formgroup = new FormGroup({
      id:new FormControl(""),
      name:new FormControl(""),
      email:new FormControl(""),
      number:new FormControl("")
    })

    this.api.get("users").subscribe((result:any)=>{
      this.datas = result;
    })
  }

  ngOnInit(): void {
    this.load();
  }

  submit(data:any){
    console.log("Hiiii");

    if(data.id == ""){

      this.api.post("users",data).subscribe((result:any)=>{

      })

    }
    else{
      this.api.put("users",data).subscribe((result:any)=>{

      })
    }

    this.load();

  }


  edit(data:any){
    this.formgroup = new FormGroup({
      name:new FormControl(data.name),
      email:new FormControl(data.email),
      number:new FormControl(data.number),
    })

  }

  delete(data:any){
    if(confirm("Sure to delete")){
      this.api.delete("users",data).subscribe((result:any)=>{
        this.load();
      })
    }
  }

}
