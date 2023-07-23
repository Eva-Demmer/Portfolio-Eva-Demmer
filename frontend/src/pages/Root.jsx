import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="flex overflow-hidden">
      <main className="h-full grow">
        <Outlet />
      </main>
    </div>
  );
}
export default Root;
