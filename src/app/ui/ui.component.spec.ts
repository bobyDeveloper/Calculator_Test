import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function updateInputsAndTriggerEvent(operator1, operator2, buttonCssSelector) {
    component.operator1 = operator1;
    component.operator2 = operator2;
    const button = fixture.debugElement.query(By.css(buttonCssSelector));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
  }

  it('calls addition method and updates result', () => {
    updateInputsAndTriggerEvent(2, 2, '.addition-button');
    expect(component.result).toBe(4);
  });

  it('renders sum in result div after addition', () => {
    updateInputsAndTriggerEvent(5, 5, '.addition-button');
    const resultElement = fixture.debugElement.query(By.css('.result')).nativeElement;
    expect(resultElement.innerText).toContain('10');
  });

  it('calculates square root when button is clicked', () => {
    component.numberForSquareRoot = 16;
    updateInputsAndTriggerEvent(null, null, '.square-root-button');
    expect(component.squareRootResult).toBe(4);
  });

  it('multiplies two numbers when multiplication button is clicked', () => {
    updateInputsAndTriggerEvent(4, 5, '.multiply-button');
    expect(component.multiplicationResult).toBe(20);
  });
  
  it('divides two numbers when divide button is clicked', () => {
    updateInputsAndTriggerEvent(20, 4, '.divide-button');
    expect(component.divisionResult).toBe(5);
  });

  it('raises base to the power of exponent when power button is clicked', () => {
    component.base = 2;
    component.exponent = 3;
    updateInputsAndTriggerEvent(null, null, '.power-button');
    expect(component.powerResult).toBe(8);
  });

  it('calculates percentage when percentage button is clicked', () => {
    component.total = 200;
    component.percent = 25;
    updateInputsAndTriggerEvent(null, null, '.percentage-button');
    expect(component.percentageResult).toBe(50);
  });
});