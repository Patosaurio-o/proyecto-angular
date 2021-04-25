import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Folder2Component } from './folder2.component';

describe('Folder2Component', () => {
  let component: Folder2Component;
  let fixture: ComponentFixture<Folder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Folder2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Folder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
