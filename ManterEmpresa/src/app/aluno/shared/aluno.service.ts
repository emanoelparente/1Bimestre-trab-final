import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  urlBackend: string = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }

  public getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.urlBackend+"/api/v1/aluno/");
  }
  public salvar(aluno: Aluno): Observable<Aluno>{
    return this.http.post<Aluno>(this.urlBackend+"/api/v1/aluno/",aluno);
  }
}
