import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertUserBadgeComponent } from './expert-user-badge.component';

describe('ExpertUserBadgeComponent', () => {
  let component: ExpertUserBadgeComponent;
  let fixture: ComponentFixture<ExpertUserBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertUserBadgeComponent]
    });
    fixture = TestBed.createComponent(ExpertUserBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
