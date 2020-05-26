import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowseCoursePage } from './browse-course.page';

describe('BrowseCoursePage', () => {
  let component: BrowseCoursePage;
  let fixture: ComponentFixture<BrowseCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
