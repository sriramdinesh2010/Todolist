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
    text: "Milk",
    completed: true,
  },
  {
    id: 2,
    text: "Egg",
    completed: true,
  },
  {
    id: 3,
    text: "Pay current Bill",
    completed: false,
  },
  {
    id: 4,
    text: "Water Refill",
    completed: true,
  },
  {
    id: 5,
    text: "Walking",
    completed: true,
  },
  {
    id: 6,
    text: "Book Reading",
    completed: false,
  },
];
