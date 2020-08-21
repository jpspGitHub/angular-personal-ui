import { FrameworkModule } from './../../../framework/framework.module';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { FormBuilder, NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormNames } from '../../enums';

class TestPage {

  constructor(protected fixture: ComponentFixture<ContactComponent>) { }

  get name() {
    return this.fixture.nativeElement.querySelector('[data-test="contact-name"]').querySelector('input');
  }

  get location() {
    return this.fixture.nativeElement.querySelector('[data-test="contact-location"]').querySelector('input');
  }
  get email() {
    return this.fixture.nativeElement.querySelector('[data-test="contact-email"]').querySelector('input');
  }
  get message() {
    return this.fixture.nativeElement.querySelector('[data-test="contact-message"]').querySelector('textarea');
  }

  get send() {
    return this.fixture.nativeElement.querySelector('[data-test="contact-send"]');
  }
}

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let page: TestPage;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [FrameworkModule, FormsModule, ReactiveFormsModule],
      providers: [FormBuilder, NgControl]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    // page = new TestPage(fixture);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('template', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance;
      page = new TestPage(fixture);
      fixture.detectChanges();
    });
    it('should the inputs be populated with the form values', fakeAsync(() => {
      component.formGroup.get(ContactFormNames.NAME).setValue('TEST_NAME');
      component.formGroup.get(ContactFormNames.LOCATION).setValue('TEST_LOCATION');
      component.formGroup.get(ContactFormNames.EMAIL).setValue('TEST_EMAIL');
      component.formGroup.get(ContactFormNames.MESSAGE).setValue('TEST_MESSAGE');

      fixture.detectChanges();
      tick();

      expect(page.name.value).toEqual('TEST_NAME');
      expect(page.location.value).toEqual('TEST_LOCATION');
      expect(page.email.value).toEqual('TEST_EMAIL');
      expect(page.message.value).toEqual('TEST_MESSAGE');
    }));
  });
});
