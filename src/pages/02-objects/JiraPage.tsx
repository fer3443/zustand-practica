import { useShallow } from 'zustand/shallow';
import { JiraTasks } from '../../components';
import { useTaskStore } from '../../stores';

export const JiraPage = () => {
  //Nota: Debido a un problema de version de zustand se produce un loop infinito
  const pendingTasks = useTaskStore( useShallow(state => state.getTaskByStatus('open')));
  const inProgressTasks = useTaskStore( useShallow(state => state.getTaskByStatus('in-progress')));
  const doneTasks = useTaskStore( useShallow(state => state.getTaskByStatus('done')));

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <JiraTasks title='Pendientes' tasks={pendingTasks} status='open' />
          
          <JiraTasks title='Avanzando' tasks={inProgressTasks} status='in-progress' />
          
          <JiraTasks title='Terminadas' tasks={doneTasks} status='done' />

      </div>

      



    </>
  );
};