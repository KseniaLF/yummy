import Link from "next/link";
import { categories } from "../../components/dish-list/data.json";
import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";

function getCategories() {
  return categories;
}

export default function CategoryList({ id }) {
  const categoriesArr = getCategories();

  return (
    <>
      <ul className="flex gap-2 overflow-x-auto whitespace-nowrap pb-2">
        {categoriesArr.map((category) => {
          const name = category.name.toLowerCase();
          return (
            <li key={name}>
              <Link
                href={`/categories/${name}`}
                type="button"
                className={`p-2 ${name === id ? "text-main" : ""}`}
              >
                {capitalizeFirstLetter(name)}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
