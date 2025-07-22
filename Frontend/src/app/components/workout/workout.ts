import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../service/user';
import { NzMessageComponent, NzMessageService } from 'ng-zorro-antd/message';
import { ɵInnerPopupComponent } from "../../../../node_modules/ng-zorro-antd/date-picker/index";
import { error } from 'console';

@Component({
  selector: 'app-workout',
  imports: [SharedModule, ɵInnerPopupComponent],
  templateUrl: './workout.html',
  styleUrl: './workout.scss'
})
export class Workout {

  gridStyle={
    width:'100%',
    textAlign:'center'
  };
  workoutForm!: FormGroup;

  listOfType: any[] = [
    "Cardio",
    "Strength",
    "Flexibility",
    "HIIT",
    "Pilates",
    "Dance",
    "Swimming",
    "cycling",
    "Running",
    "Walking",
    "Boxing",
    "Crossfit",
    "rowing",
  ];

  workouts:any;

  constructor(private fb:FormBuilder,
    private userService:User,
    private message: NzMessageService,
    
  ){


  }

ngOnInit(){
  this.workoutForm=this.fb.group({
    type:[null,[Validators.required]],
    duration: [null,[Validators.required]],
    date:[null,[Validators.required]],
    caloriesBurned:[null,[Validators.required]]
  });
  this.getWorkouts();
}

getWorkouts(){
  this.userService.getWorkouts().subscribe(res=>{
   this.workouts=res;
  })
}

submitForm(){
  this.userService.postWorkout(this.workoutForm.value).subscribe(res=>{
    this.message.success("Workout posted Successfully",{
      nzDuration:5000
    });
    this.workoutForm.reset();
    this.getWorkouts();
  },error=>{
    this.message.error("Error while posting workout",{nzDuration:5000});

  })


}

}
