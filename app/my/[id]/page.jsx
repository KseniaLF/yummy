import { Button } from "@/components/Button";
import { headers } from "next/headers";
import Image from "next/image";

async function getRecipe({ host, id }) {
  try {
    const res = await fetch(`http://${host}/api/recipes/${id}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Post({ params: { id } }) {
  const host = headers().get("host");
  const recipe = await getRecipe({ host, id });

  return (
    recipe && (
      <>
        <div className="custom-bg-my-sm md:custom-bg-my-md lg:custom-bg-my"></div>

        <div className="container py-20 flex flex-col gap-5 items-center text-center">
          <h1 className="text-center text-main text-4xl">{recipe.dish}</h1>

          <p className="max-w-[650px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ab laboriosam recusandae consequatur molestiae? Iure eius dolore
            similique reiciendis at?
          </p>

          <Button>Add to favourite recipes</Button>

          <span>20 min</span>
        </div>

        <div className="container mt-8">
          <div className="flex flex-wrap">
            <div>
              <p>Recipe Preparation</p>
              <p>...</p>
            </div>

            {recipe.image && (
              <Image
                src={recipe.image}
                alt="Logo"
                width={400}
                height={300}
                className="rounded-lg"
              />
            )}
          </div>
        </div>
      </>
    )
  );
}
