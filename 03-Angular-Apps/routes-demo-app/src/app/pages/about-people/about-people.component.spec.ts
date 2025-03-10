import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPeopleComponent } from './about-people.component';

describe('AboutPeopleComponent', () => {
  let component: AboutPeopleComponent;
  let fixture: ComponentFixture<AboutPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPeopleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
