import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";

import { SectionTitle } from "@/components/UI/SectionTitle";
import MyRecipeList from "@/components/my-recipes/MyRecipeList";

export default async function MyRecipes() {
  const session = await getServerSession(authConfig);
  const userId = session?.user.id;

  return (
    <div className="container">
      <SectionTitle>my recipes</SectionTitle>

      <MyRecipeList userId={userId} />
    </div>
  );
}
