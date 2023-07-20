"use client";

import { SectionTitle } from "@/components/UI/SectionTitle";
import { categories } from "../../components/dish-list/data.json";
import { CategoriesList } from "./CategoriesList";
import { Suspense, useEffect, useState } from "react";

async function getPokemons() {
  try {
    const promiseA = new Promise((resolve) => {
      resolve(categories);
    });
    return promiseA;
  } catch (error) {
    console.error(error);
  }
}

function getCategories() {
  return categories;
}

export default function About() {
  const [activeCategory, setActiveCategory] = useState("Breakfast");
  const [categoryArr, setCategoryArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const categoriesArr = getCategories();

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      // query for category data should be here
      const recipes = await getPokemons();
      const filteredArr = recipes.find((i) => i.name === activeCategory);

      setCategoryArr(filteredArr);
      setIsLoading(false);
    };

    fetch();
  }, [activeCategory]);

  const hanadleClick = (name) => {
    return setActiveCategory(name);
  };

  return (
    <main className="container">
      <SectionTitle>Categories</SectionTitle>

      <ul className="flex gap-2">
        {categoriesArr.map(({ name }) => (
          <li key={name}>
            <button
              onClick={() => hanadleClick(name)}
              type="button"
              className={`p-2 ${name === activeCategory && "text-main"}`}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>

      {isLoading ? (
        <>LOAD</>
      ) : (
        categoryArr.length !== 0 && (
          <CategoriesList recipeArr={categoryArr.recipes} />
        )
      )}
    </main>
  );
}
