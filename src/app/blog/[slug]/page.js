import { getItem } from "./../../../utils/getBlogDetail";

// static metadata
// export const metadata = {
//   title: "Yudhistira Media - Blog List ",
//   description: "Yudhistira Media channel",
// };

// dynamic metadata
export async function generateMetadata({ params }, parent) {
  const slug = params.slug;

  const blogDetail = await getItem(slug);

  return {
    title: blogDetail?.title + " - " + "Yudhistira Media",
    description: blogDetail?.title,
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const blogDetail = await getItem(slug);

  console.log("blogDetail => ", blogDetail, slug, params);

  return (
    <div>
      <h1 className="text-heading"> Blog Title : {blogDetail.fields.title} </h1>
      <hr></hr>
      <p>{blogDetail.fields.description}</p>
    </div>
  );
}
