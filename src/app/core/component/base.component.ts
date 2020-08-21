import { OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscriber } from '../model';

export abstract class BaseComponent implements OnInit, AfterViewInit, OnDestroy {


  subscriber: Subscriber = new Subscriber();

  ngOnInit(): void {
    this.customOnInit();
    this.subscriptions();
  }

  ngAfterViewInit(): void {
    this.customNgAfterViewInit();
  }

  ngOnDestroy(): void {
    this.subscriber.complete();
    this.customNgOnDestroy();
  }

  customOnInit(): void { }

  customNgAfterViewInit(): void { }

  customNgOnDestroy(): void { }

  subscriptions(): void { }

}
