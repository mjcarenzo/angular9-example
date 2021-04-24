export class TodoItem {
  id: number;
  description: string;
  isCompleted: boolean = false;

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  constructor(item?) {
    if (item) {
      this.id = item.id;
      this.description = item.description;
      this.isCompleted = item.isCompleted;
    }
  }
}
