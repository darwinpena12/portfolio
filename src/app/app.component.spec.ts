import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the portfolio application', () => {
    expect(component).toBeTruthy();
  });

  it('displays the student name in the header', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('.site-name')?.textContent)
      .toContain(component.studentName);
  });

  it('displays all four navigation links', () => {
    const navigationLinks =
      fixture.nativeElement.querySelectorAll('nav a');

    expect(navigationLinks.length).toBe(4);
  });

  it('displays the current year in the footer', () => {
    const footer =
      fixture.nativeElement.querySelector('.site-footer');

    expect(footer?.textContent).toContain(
      component.currentYear.toString()
    );
  });
});