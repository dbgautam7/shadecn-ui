'use client';
import CustomSkeleton from '@/components/customUi/customSkeleton';
import { useToast } from '@/components/ui/use-toast';
import { useQuery } from '@tanstack/react-query';

async function getProdcts() {
  const res = await fetch('https://dummyjson.com/products');
  const products = await res.json();
  return products;
}

const Products = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProdcts(),
  });

  const { toast } = useToast();

  if (isLoading) {
    return <CustomSkeleton value={4} />;
  }
  if (isError) {
    return toast({
      title: JSON.stringify(error),
    });
  }

  return (
    <>
      {!isLoading &&
        !isError &&
        data &&
        data?.products?.map((product: any) => {
          return (
            <div
              key={product.id}
              className='flex items-center justify-center gap-4 border border-b-2'
            >
              <h2>{product?.id}.</h2>
              <h3>{product.title}</h3>
              <p>{product.brand}</p>
            </div>
          );
        })}
    </>
  );
};

export default Products;
