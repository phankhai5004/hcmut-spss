import { Outlet } from 'react-router-dom';
// import DragAndDrop from '../components/DragAndDrop/DragAndDrop';
import PrintProgress from '../components/PrintProgress/PrintProgress';

export default function UserPrintPage() {
  return (
    <div className="h-full pt-8">
      {/* INFORMATION */}
      <PrintProgress />

      {/* Drag and Drop Area */}
      <Outlet />
      {/* <DragAndDrop /> */}
    </div>
  );
}
