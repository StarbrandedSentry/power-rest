import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardInfoComponent } from './reward-info.component';

describe('RewardInfoComponent', () => {
  let component: RewardInfoComponent;
  let fixture: ComponentFixture<RewardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
