export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/y4lqlhcyc2lr/environments/master/entries?access_token=i8EKrSf2agSubIgFn6kiOvv3kFjgZUG_UIZviR3T_CQ`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const posts = await res.json();

  return Response.json({ posts });
}
