export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const posts = await res.json();

  return Response.json({ posts });
}
