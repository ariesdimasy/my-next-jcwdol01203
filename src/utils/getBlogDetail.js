import { cache } from "react";

export const revalidate = 10;

export const getItem = cache(async (id) => {
  const item = await fetch(
    `https://cdn.contentful.com/spaces/y4lqlhcyc2lr/environments/master/entries/${id}?access_token=i8EKrSf2agSubIgFn6kiOvv3kFjgZUG_UIZviR3T_CQ`
  );
  return item.json();
});
