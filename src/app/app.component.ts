import { Component, OnInit } from '@angular/core';
import { faCoffee, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public http: HttpClient,
  ) { }

  employee: any;
  title = 'FullStack-Teste';

  // icons
  faDollarSign = faDollarSign;

  ngOnInit() {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees')
      .subscribe({
        next: (result: any) => {

          this.employee = result.data
        },
        error: err => {
        }
      })

  }

  links = [
    {
      Link: 'Link'
    },
    {
      Link: 'Link'
    },
    {
      Link: 'Link'
    },
    {
      Link: 'Link'
    }]

    toModal = {
      name: '',
      emp_id: ''
    }
  
    modalValues = [
      {
        one: "25",
        two: "50"
      },
      {
        one: "75",
        two: "125"
      }
    ]
  
  modal(emp) {
    document.querySelector('.modal').classList.add('is-active');
    this.toModal = {
      name: emp.name,
      emp_id: emp.id
    }
  }

  close(ev) {
    switch (ev.target.className) {
      case "modal-background":
      case "delete":
        document.querySelector('.modal').classList.remove('is-active');
        break;
      default:
        break;
    }
  }

  setValue(ev) {
    document.querySelector('#bar_' + this.toModal.emp_id).setAttribute('value', ev.target.innerText.replace('R$ ', ""));
    document.querySelector('.modal').classList.remove('is-active');
    document.querySelector('#top_' + this.toModal.emp_id).classList.add("has-background-primary")
    document.querySelector('#top_' + this.toModal.emp_id).classList.remove("has-background-danger")
    document.getElementById('txt_' + this.toModal.emp_id).innerText = "Você já adicionou " + ev.target.innerText + ",00"
  }
}
