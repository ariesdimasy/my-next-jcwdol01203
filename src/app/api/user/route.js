export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const user = await res.json();

  return Response.json({ user });
}
