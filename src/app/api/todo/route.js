export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const todo = await res.json();

  return Response.json({ todo });
}
