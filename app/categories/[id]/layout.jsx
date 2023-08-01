import { SectionTitle } from "@/components/UI/SectionTitle";
import CategoryList from "@/components/categories/CategoryList";

export default function CategoryLayout(props) {
  return (
    <div className="container">
      <SectionTitle>Categories</SectionTitle>

      <CategoryList id={props.params.id} />

      {props.children}
    </div>
  );
}
