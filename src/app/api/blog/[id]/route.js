export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET({ params }) {
  const { id } = params;

  console.log(" id => ", id);

  const res = await fetch(
    `https://cdn.contentful.com/spaces/y4lqlhcyc2lr/environments/master/entries/${id}?access_token=i8EKrSf2agSubIgFn6kiOvv3kFjgZUG_UIZviR3T_CQ`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const post = await res.json();

  return Response.json({ post });
}
