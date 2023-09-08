'use client';
import { useState } from 'react';
import styles from './products.module.css';
import CustomSkeleton from '@/components/customUi/customSkeleton';
import Layout from '@/components/customUi/layout';
import { useToast } from '@/components/ui/use-toast';
import { useQuery } from '@tanstack/react-query';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import FruitDraggable from './components/fruitDraggable/fruitDraggable';
import CartDroppable from './components/cartDroppable/cartDroppable';

async function getProdcts() {
  const res = await fetch('https://dummyjson.com/products');
  const products = await res.json();
  return products;
}

const Products = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);

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
  let limitedData = data?.products;
  limitedData.length = 10;

  const fruits = ['Apple', 'Banana', 'Lemon', 'Pear', 'Mango'];

  const addItemsToCart = (e: DragEndEvent) => {
    const newItem = e.active.data.current?.title;
    if (e.over?.id !== 'cart-droppable' || !newItem) return;
    const temp = [...cartItems];
    temp.push(newItem);
    setCartItems(temp);
  };

  return (
    <Layout>
      <DndContext onDragEnd={addItemsToCart}>
        <main className={styles.main}>
          <div className={styles['fruit-list-section']}>
            <h1>Fruit List</h1>
            <ul className={styles['fruit-list']}>
              {fruits.map((fruit) => (
                <FruitDraggable key={fruit}>{fruit}</FruitDraggable>
              ))}
            </ul>
          </div>
          <div className={styles['cart-section']}>
            <h1>My Cart</h1>
            <CartDroppable items={cartItems} />
          </div>
        </main>
      </DndContext>
    </Layout>
  );
};

export default Products;
