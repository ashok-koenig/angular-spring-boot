import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'My Title' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('My Title');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, My Title');
  });

  it('should create a form with 2 controls', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.myForm.contains('num1')).toBe(true)
    expect(app.myForm.contains('num2')).toBeTruthy()
  });

  it('should make the num1 control required', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const num1 = app.myForm.get('num1')
    num1?.setValue('')
    expect(num1?.valid).toBeFalsy()
  });

  it('should make the num2 control required', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const num2 = app.myForm.get('num2')
    num2?.setValue('')
    expect(num2?.valid).toBeFalsy()
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.myForm.get('num1')?.setValue('10')
    app.myForm.get('num2')?.setValue('20')
    app.handleSubmit()
    expect(app.result).toBe(30)

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#result')?.textContent).toContain('Result: 30');
  });

});
