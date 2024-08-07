import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formSubmitted: boolean = false;
    result: string='';

    constructor(private http: HttpClient) {}


    onSubmit(form: NgForm) {
      this.formSubmitted = true;
      if (form.valid) {
        this.http.post('http://localhost:3000/reclamations', form.value).subscribe(
          (response) => {
            this.result = 'Votre réclamation a été envoyée avec succès.';
            form.resetForm();
            this.formSubmitted = false;
          },
          (error) => {
            this.result = 'Une erreur est survenue. Veuillez réessayer plus tard.';
          }
        );
      } else {
        this.result = 'Tous les champs doivent être remplis.';
      }
    }

}
