import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSerchComponent } from './item-serch.component';

describe('ItemSerchComponent', () => {
  let component: ItemSerchComponent;
  let fixture: ComponentFixture<ItemSerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSerchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
