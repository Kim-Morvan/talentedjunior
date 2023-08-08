import Dashboard from "./dashboard";

async function fetchDashboardList() {
  try {
    const response = await fetch("", {
      cache: "no-store",
    });
    console.log(response);
    return response.json();
  } catch (error) {
    if (error) {
      return { error: error.message };
    }
  }
}

export default async function Page() {
  const dashboardList = await fetchDashboardList();
  console.log(dashboardList);

  return (
    <>
      <Dashboard />
    </>
  );
}
