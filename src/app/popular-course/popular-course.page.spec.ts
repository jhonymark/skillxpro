import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopularCoursePage } from './popular-course.page';

describe('PopularCoursePage', () => {
  let component: PopularCoursePage;
  let fixture: ComponentFixture<PopularCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopularCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
