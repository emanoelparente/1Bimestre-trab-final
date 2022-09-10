import { Aluno } from './../shared/aluno';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../shared/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    console.log("antes");

    this.alunoService.getAlunos().subscribe((alunos:Aluno[]) => {
      console.log("Aluno",alunos);
      this.alunos = alunos;
    });


    console.log("depois");
  }

}
