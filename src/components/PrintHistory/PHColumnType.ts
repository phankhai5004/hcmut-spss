export type PHColumnType = {
  id: number;
  documentName: string;
  printingState: 'success' | 'fail';
  printingTime: Date;
  printerName: string;
  properties: string;
};

export type AdminPHColumnType = {
  id: number;
  documentName: string;
  printingState: 'success' | 'fail';
  printingTime: Date;
  printerName: string;
  username: string;
};
