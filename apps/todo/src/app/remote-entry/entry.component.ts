import { Component } from '@angular/core';

@Component({
  selector: 'mfe-netlify-todo-entry',
  template: `<div class="todo-list">
    <h1>Todo</h1>
    <div class="list">
      <label> <input type="checkbox" name="item" /> Item </label>
    </div>
  </div> `,
})
export class RemoteEntryComponent {}
