import { AlunoService } from './../shared/aluno.service';
import { Aluno } from './../shared/aluno';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  aluno: Aluno = new Aluno();
  constructor(private alunoService: AlunoService,
    route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  public salvar(aluno: Aluno){
    this.alunoService.salvar(aluno).subscribe((aluno) => {
      this.router.navigate(['aluno'])
    }, erro => {
      alert(erro?.error?.message);
      console.log(erro);
    })
  }

}
