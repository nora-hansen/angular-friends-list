import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
@Input('name')  name: string = 'NoName'
@Output('favourite') favourite = new EventEmitter<string>();
}
