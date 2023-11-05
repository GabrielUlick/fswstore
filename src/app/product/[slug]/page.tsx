import { prismaClient } from "@/lib/prisma";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({ params: { slug }}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug
    },
  });

  return (
    <h1>{product?.slug}</h1>
  );
};

export default ProductDetailsPage;
