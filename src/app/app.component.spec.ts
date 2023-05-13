import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        NgbModule,
        FormsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('agregar una nueva tarea a la lista', () => {
    const initialLength = component.tasks.length;
    component.newTask = 'Nueva tarea';
    component.addTask();
    expect(component.tasks.length).toEqual(initialLength + 1);
    expect(component.tasks[initialLength].description).toEqual('Nueva tarea');
  });

  it('no debe agregar una nueva tarea si la descripción está vacía', () => {
    const initialLength = component.tasks.length;
    component.newTask = '';
    component.addTask();
    expect(component.tasks.length).toEqual(initialLength);
  });

  it('debe marcar una tarea como completada', () => {
    const taskToComplete = component.tasks[0];
    component.completeTask(taskToComplete);
    expect(taskToComplete.completed).toBeTrue();
  });

  it('debe filtrar y devolver las tareas pendientes', () => {
    const pendingTasks = component.pendingTasks;
    expect(pendingTasks.length).toEqual(2);
    expect(pendingTasks[0].description).toEqual('Comprar el super');
    expect(pendingTasks[1].description).toEqual('Pagar la renta');
  });

  it('debe filtrar y devolver las tareas completadas', () => {
    const completedTasks = component.completedTasks;
    expect(completedTasks.length).toEqual(1);
    expect(completedTasks[0].description).toEqual('Limpiar la casa');
  });
});
