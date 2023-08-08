async function fetchUserById(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    console.log(response);
    return response.json();
  } catch (error) {
    if (error) {
      return { error: error.message };
    }
  }
}

export default async function Page({ params }) {
  const { id } = params;
  const user = await fetchUserById(id);
  console.log(user);
  return <>{/* <RealisationsDetails user={user} /> */}</>;
}
