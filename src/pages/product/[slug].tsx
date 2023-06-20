import Layout from "@/src/components/layout/Layout";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import styled from "styled-components";

type Props = {
  item: { id: number | undefined; img: string | undefined };
};
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  width: 100%;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const ProductPage = ({ item }: Props) => {
  return (
    <Layout>
      <Container className="h-48">
        <div className="block w-full text-center">dfdfdd</div>
      </Container>
    </Layout>
  );
};

export default ProductPage;
