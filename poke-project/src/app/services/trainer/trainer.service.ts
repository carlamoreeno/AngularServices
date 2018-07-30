import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrainerService {

	trainerUrl: string = 'http://localhost:8000';
	private httpHeaders = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json'})
	};

	constructor(private http: HttpClient) { 
		console.log('Hello Trainer Service');
	}

	registerTrainer(nome: string, codigo: string, pokemon: string): Observable<any>{
	return this.http.post(this.trainerUrl + '/api/trainers', {
		'nome' : nome,
		'codigo' : codigo,
		'pokemon' : pokemon
	}).map(res => res);
	}

	getTrainers(): Observable<any>{
		return this.http.get(this.trainerUrl + '/api/trainers').map(res => res);
	}

	deleteTrainer(id): Observable<any>{
		return this.http.delete(this.trainerUrl + '/api/trainers/' + id).map(res => res);
	}
}
