import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuspensePage } from './suspense.page';

describe('SuspensePage', () => {
  let component: SuspensePage;
  let fixture: ComponentFixture<SuspensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuspensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
