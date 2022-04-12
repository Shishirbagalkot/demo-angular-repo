import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //interpolation
  public interpolationExample = "Test for interpolation"

  //property binding
  public propertyBindingExample = "Test for property binding"

  //class binding
  public classBindingExample = "text-success"
  public hasError = true
  public isSpecial = true
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  //style binding
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  //event binding
  public greeting = ""

  //two way binding
  public twoWayBindingExample = ""

  //structural directives
  public displayName = false

  constructor() { }

  ngOnInit(): void {
  }

  //event binding
  onClick(event: { type: string; }) {
    this.greeting = event.type
  }

  //template reference variables
  logMessage(value: any) {
    console.log(value)
  }
}
