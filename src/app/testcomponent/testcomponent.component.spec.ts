import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestcomponentComponent } from './testcomponent.component';
import { TestcomponentComponentModule } from './testcomponent.component.module';

describe('TestcomponentComponent', () => {
  let component: TestcomponentComponent;
  let fixture: ComponentFixture<TestcomponentComponent>;

  /*
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  */


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestcomponentComponentModule],
      providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]  //Change detection automatisch durchführen!
    });
    fixture = TestBed.createComponent(TestcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});