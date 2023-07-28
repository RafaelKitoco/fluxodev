import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form! : FormGroup;
  tamanho! : ''

  constructor (){
    this.form = new FormGroup({
      nome_completo : new FormControl("", [Validators.required]),
      email : new FormControl("", [Validators.required, Validators.email]),
      telefone : new FormControl("", Validators.required),
      angluar: new FormControl(""),
      typescripts: new FormControl(""),
      htmlcss: new FormControl(""),
      testo : new FormControl("", [Validators.required]),
      espectativas: new FormControl("", Validators.required)
      
    })
  }

  get  nome_completo(){
    return this.form.get("nome_completo")!;
  }

  get email(){
    return this.form.get("email")!;
  }

  get telefone(){
    return this.form.get("telefone")!;
  }

  get texto(){
    return this.form.get("texto")!;
  }

  get espectativas(){
    return this.form.get("espectativas")!;
  }


  submeter(){
    if (this.form.invalid) return;

    console.log(this.form.getRawValue())
  }
}
