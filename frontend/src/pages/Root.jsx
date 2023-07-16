import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="flex h-screen overflow-hidden">
      <main className="grow h-full">
        <Outlet />
      </main>
    </div>
  );
}
export default Root;
