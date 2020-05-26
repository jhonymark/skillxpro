import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowseCatPage } from './browse-cat.page';

describe('BrowseCatPage', () => {
  let component: BrowseCatPage;
  let fixture: ComponentFixture<BrowseCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
