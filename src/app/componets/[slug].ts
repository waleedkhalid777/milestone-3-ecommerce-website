// import { GetServerSideProps } from 'next';
// import Card from '@/components/Card';

// const ProductPage = ({ product }: any) => {
//   return (
//     <div>
//       <Card product={product} />
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { slug } = context.params!;
//   const response = await fetch(`https://your-api.com/products/${slug}`); // Replace with your API endpoint
//   const product = await response.json();

//   return {
//     props: {
//       product,
//     },
//   };
// };

// export default ProductPage;
