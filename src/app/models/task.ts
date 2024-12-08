export interface Task {
    id: number;
    title: string;
    description: string;
    type: 'Trabajo' | 'Casa' | 'Negocios';
    completed: boolean;
  }