import { useEffect } from "react";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import { saveProducts } from "../redux/features/product/ProductSlice";
import { useGetProductsListQuery } from "../redux/api/productApi";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const { data, isLoading } = useGetProductsListQuery();

  useEffect(() => {
    if (data) {
      dispatch(saveProducts(data.products));
    }
  }, [data]);
  console.log({ products });
  // useEffect(() => {
  //   try {
  //     fetch("https://dummyjson.com/products")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         dispatch(saveProducts(data.products));
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  if (isLoading) {
    return <span>loading...</span>;
  }

  return (
    <div>
      {products
        ?.filter((product) => [3, 5, 6].includes(product.id))
        .map((item, index) => (
          <div key={index}>
            <span>{item.id}</span>
            <span>{item.title}</span>
          </div>
        ))}
      <Counter id={2} />
    </div>
  );
};

export default Products;
