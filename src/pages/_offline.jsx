import React from "react";
import AppLayout from "../components/AppLayout";

const offline = () => {
  return (
    <AppLayout>
      <main className="grid place-content-center h-[80vh]">
        <h1 className="font-semibold text-2xl text-gray-500">
          You are currently offline
        </h1>
      </main>
    </AppLayout>
  );
};

export default offline;
