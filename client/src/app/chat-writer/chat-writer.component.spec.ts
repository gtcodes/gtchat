import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWriterComponent } from './chat-writer.component';

describe('ChatWriterComponent', () => {
  let component: ChatWriterComponent;
  let fixture: ComponentFixture<ChatWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
