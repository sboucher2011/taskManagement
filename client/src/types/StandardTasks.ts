export interface StandardTask {
  _id?: string;
  title: string;
  description: string;
  frequency: string;
  chargeNumber: string;
}

export interface AssignedStandardTask extends StandardTask {
  town_id: string;
  employee: string;
  startDate: string;
  completionDate: string;
  dueDate: string;
  status: string;
}
