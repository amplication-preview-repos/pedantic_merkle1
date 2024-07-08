export type Inventory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  expiryDate: Date | null;
  name: string | null;
  quantity: number | null;
};
