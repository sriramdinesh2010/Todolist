export interface Task {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: string; // Optional field if tasks can have due dates
  priority?: string; // Optional field if tasks can have priority levels
}

export const TodoData = [
  {
    id: 1,
    text: "Pay Bill",
    completed: false,
  },
  {
    id: 2,
    text: "Water Refill",
    completed: true,
  },
  {
    id: 3,
    text: "Walking",
    completed: true,
  },
  {
    id: 4,
    text: "Book Reading",
    completed: false,
  },
];
