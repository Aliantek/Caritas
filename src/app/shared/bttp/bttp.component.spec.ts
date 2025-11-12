import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BttpComponent } from './bttp.component';

describe('BttpComponent', () => {
  let component: BttpComponent;
  let fixture: ComponentFixture<BttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
