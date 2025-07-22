import { Component } from '@angular/core';
import { DemoNgZorroAntdModule } from "../../DemoNgZorroAntdModule";
import { ɵInnerPopupComponent } from "../../../../node_modules/ng-zorro-antd/date-picker/index";
import { SharedModule } from '../../shared/shared-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { User } from '../../service/user';
import { error } from 'console';

@Component({
  selector: 'app-activity',
  standalone:true,
  imports: [DemoNgZorroAntdModule, ɵInnerPopupComponent,SharedModule],
  templateUrl: './activity.html',
  styleUrl: './activity.scss'
})
export class Activity {
  gridStyle={
    width:'100%',
    textAlign:'center'
  };
  activityForm!:FormGroup;
  activities:any;
  constructor(private fb:FormBuilder,private message: NzMessageService,private userService:User){}
  ngOnInit(){
    this.activityForm=this.fb.group({
      caloriesBurned:[null,[Validators.required]],
      steps:[null,[Validators.required]],
      distance:[null,[Validators.required]],
      date:[null,[Validators.required]],
    });
    this.getAllActivities();
  }

  submitForm(){
    this.userService.postActivity(this.activityForm.value).subscribe(res=>{
      this.message.success("Activity posted Successfully",{nzDuration:5000});
      this.activityForm.reset();
      this.getAllActivities();
    },error=>{
      this.message.error("Error while posting activity",{nzDuration:5000});
    })
  }

  getAllActivities(){
    this.userService.getActivities().subscribe(res=>{
      this.activities=res;
      console.log(this.activities);
    })
  }


}
