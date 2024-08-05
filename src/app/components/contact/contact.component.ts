import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  /*result: string = '';

  async onSubmit() {
    this.result = 'Sending....';
    const formData = new FormData();

    const name = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
    const phone = (document.querySelector('input[name="phone"]') as HTMLInputElement).value;
    const message = (document.querySelector('textarea[name="message"]') as HTMLTextAreaElement).value;

    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('message', message);
    formData.append('access_key', '237bebcb-c699-4498-909a-279216503291');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        this.result = 'Form Submitted Successfully';
        (document.querySelector('form') as HTMLFormElement).reset();
      } else {
        console.log('Error', data);
        this.result = data.message;
      }
    } catch (error) {
      console.error('Submission error:', error);
      this.result = 'Submission failed. Please try again.';
    }
  }*/
    result: string='';

    constructor(private http: HttpClient) {}
  
    onSubmit(form: any) {
      this.http.post('http://localhost:3000/reclamations', form).subscribe(
        (response) => {
          this.result = 'Votre réclamation a été envoyée avec succès.';
          (document.querySelector('form') as HTMLFormElement).reset();
          },
        (error) => {
          this.result = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        }
      );
    }
}
