import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarterScreenPage } from './starter-screen.page';

describe('StarterScreenPage', () => {
  let component: StarterScreenPage;
  let fixture: ComponentFixture<StarterScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarterScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
