import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NotFound } from './not-found';

describe('NotFound', () => {
  let component: NotFound;
  let fixture: ComponentFixture<NotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFound],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the 404 error message', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('404');
    expect(page.querySelector('h2')?.textContent)
      .toContain("Oops! This page doesn't exist.");
  });

  it('should display a link back to the home page', () => {
    const page = fixture.nativeElement as HTMLElement;
    const homeLink = page.querySelector('a');

    expect(homeLink?.textContent).toContain('Return to Home');
    expect(homeLink?.getAttribute('routerLink')).toBe('/');
  });
});