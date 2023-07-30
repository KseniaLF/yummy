import { SectionTitle } from "@/components/UI/SectionTitle";

export default function MyPecipesLayout(props) {
  console.log(props.params);

  return (
    <div className="">
      {/* <SectionTitle>My Recipes</SectionTitle> */}

      {props.children}
    </div>
  );
}
