import { SectionTitle } from "@/components/UI/SectionTitle";
import CategoryList from "@/components/categories/CategoryList";

export default function CategoryLayout(props) {
  console.log(props.params.id);

  return (
    <>
      <SectionTitle>Categories</SectionTitle>

      <CategoryList id={props.params.id} />

      {props.children}
    </>
  );
}
