import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer/trainer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trainers = [];

  constructor(public trainerservice: TrainerService) { }

  ngOnInit() {
      this.trainerservice.getTrainers()
      .subscribe(
        (res)=>{ 
        	  for(let i = 0; i < res.data.length; i++){
        	  	this.trainers.push(res.data[i]);
              	console.log(res.data[i]);
        	  }
          }
        );
  }

  deleteTrainer(id){
    	this.trainerservice.deleteTrainer(id)
    	.subscribe(
    		(res)=>{ 
          		console.log("excluído com sucesso");
        	}
      	)
  	}

}
