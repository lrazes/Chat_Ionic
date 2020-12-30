import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnectUserPage } from './connect-user.page';

describe('ConnectUserPage', () => {
  let component: ConnectUserPage;
  let fixture: ComponentFixture<ConnectUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
