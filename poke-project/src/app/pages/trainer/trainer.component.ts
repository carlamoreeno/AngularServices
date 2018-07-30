import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer/trainer.service';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(public trainerservice: TrainerService) { }

  ngOnInit() {
  }

  onSubmit(trainer) {
  	console.log(trainer.value.nome);
      this.trainerservice.registerTrainer(trainer.value.nome, trainer.value.codigo, trainer.value.pokemon)
      .subscribe(
        (res)=>{ 
              console.log(res);
          }
        );
  }

}