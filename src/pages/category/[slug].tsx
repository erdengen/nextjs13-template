import Layout from "@/src/components/layout/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../share/data";
import dynamic from "next/dynamic";
const CategoryItem = dynamic(
  () => import("@/src/components/cat/CategoryItem"),
  {
    ssr: false,
  }
);

type Props = {};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
// px-2 lg:px-10
const CategoryPage = (props: Props) => {
  const [grid, setGrid] = useState(2);
  return (
    <Layout>
      <main className="page block min-h-fit px-0 md:px-10">
        <div className="hidden md:flex flex-row justify-end items-center gap-3 mb-2 h-8">
          <button
            className={`${
              grid == 2 ? "font-extrabold" : "font-semibold"
            } uppercase px-5 py-1 border-0 border-black hover:bg-stone-100 w-16`}
            onClick={() => setGrid(2)}
          >
            ||
          </button>
          <button
            className={`${
              grid == 4 ? "font-extrabold" : "font-semibold"
            } uppercase px-5 py-1 border-0 border-black hover:bg-stone-100 w-16`}
            onClick={() => setGrid(4)}
          >
            ||||
          </button>
          <button className="font-semibold uppercase px-5 py-1 border border-black hover:bg-stone-100">
            FİLTRE
          </button>
        </div>
        <div
          className={`grid grid-cols-2 ${
            grid == 2 ? "md:grid-cols-2" : "md:grid-cols-4"
          } gap-2 gap-y-10`}
        >
          {popularProducts.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default CategoryPage;
