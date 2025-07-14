import React from 'react';
import ShopClientWrapper from './ShopClientWrapper';
import ProductFilter from '../../components/ProductFilter';
import SearchBar from '../../components/SearchBar';
import Pagination from '../../components/Pagination';
import LoadingSpinner from '../../components/LoadingSpinner';
import EmptyState from '../../components/EmptyState';
import SkipToContent from '../../components/SkipToContent';
import Breadcrumbs from '../../components/Breadcrumbs';
import SkeletonProductCard from '../../components/SkeletonProductCard';
import Toast from '../../components/Toast';

const categories = [
  {
    name: 'Bracelets',
    folder: 'bracelet',
    products: [
      { name: 'bracelet 1', image: 'bracelet 1.jpg', priceKES: 1000 },
      { name: 'bracelet 2', image: 'bracelet 2.jpg', priceKES: 1200 },
      { name: 'bracelet 4', image: 'bracelet 4.jpg', priceKES: 950 },
      { name: 'bracelet 5', image: 'bracelet 5.jpg', priceKES: 1100 },
      { name: 'bracelet 6', image: 'bracelet 6.jpg', priceKES: 1050 },
      { name: 'bracelets 7', image: 'bracelets 7.jpg', priceKES: 1300 },
      { name: 'kenyan bracelet', image: 'kenyan bracelet.jpg', priceKES: 1500 },
      { name: 'kenyan bracelet 2', image: 'kenyan bracelet 2.jpg', priceKES: 1400 },
    ],
  },
  {
    name: 'Earings',
    folder: 'earings',
    products: [
      { name: 'earings 2', image: 'earings 2.jpg', priceKES: 800 },
      { name: 'earribgs 2', image: 'earribgs 2.jpg', priceKES: 850 },
      { name: 'earringss1', image: 'earringss1.jpg', priceKES: 900 },
    ],
  },
  {
    name: 'Chokers',
    folder: 'choker',
    products: [
      { name: 'chokar 1', image: 'chokar 1.jpg', priceKES: 2000 },
      { name: 'chokar 2', image: 'chokar 2.jpg', priceKES: 2100 },
      { name: 'chokar 3', image: 'chokar 3.jpg', priceKES: 2200 },
      { name: 'chokar 4', image: 'chokar 4.jpg', priceKES: 2300 },
      { name: 'choker 12', image: 'choker 12.jpg', priceKES: 2400 },
      { name: 'choker 5', image: 'choker 5.jpg', priceKES: 2500 },
    ],
  },
  {
    name: 'Necklaces',
    folder: 'necklace',
    products: [
      { name: 'necklace 1', image: 'necklace 1.jpg', priceKES: 1800 },
      { name: 'necklace 3', image: 'necklace 3.jpg', priceKES: 1850 },
      { name: 'necklace2', image: 'necklace2.jpg', priceKES: 1900 },
    ],
  },
  {
    name: 'Wedding Necklaces',
    folder: 'weddingnecklace',
    products: [
      { name: 'wedding necklace', image: 'wedding necklace.jpg', priceKES: 3000 },
      { name: 'wedding necklace 2', image: 'wedding necklace 2.jpg', priceKES: 3200 },
      { name: 'wedding necklace 3', image: 'wedding necklace 3.jpg', priceKES: 3400 },
      { name: 'wedding necklace 4', image: 'wedding necklace 4.jpg', priceKES: 3600 },
      { name: 'wedding necklace 5', image: 'wedding necklace 5.jpg', priceKES: 3800 },
    ],
  },
  {
    name: 'Shukas',
    folder: 'shukas',
    products: [
      { name: 'shuka 1', image: 'shuka 1.jpg', priceKES: 2500 },
      { name: 'shuka 2', image: 'shuka 2.jpg', priceKES: 2550 },
      { name: 'shuka 3', image: 'shuka 3.jpg', priceKES: 2600 },
      { name: 'shuka 4', image: 'shuka 4.jpg', priceKES: 2650 },
      { name: 'shuka 5', image: 'shuka 5.jpg', priceKES: 2700 },
    ],
  },
  {
    name: 'Sandals',
    folder: 'sandals',
    products: [
      { name: 'sandal 2', image: 'sandal 2.jpg', priceKES: 1200 },
      { name: 'sandal 3', image: 'sandal 3.jpg', priceKES: 1250 },
      { name: 'sandal 4', image: 'sandal 4.jpg', priceKES: 1300 },
      { name: 'sandal 5', image: 'sandal 5.jpg', priceKES: 1350 },
      { name: 'sandal 6', image: 'sandal 6.jpg', priceKES: 1400 },
      { name: 'sandal 7', image: 'sandal 7.jpg', priceKES: 1450 },
      { name: 'sandal 8', image: 'sandal 8.jpg', priceKES: 1500 },
      { name: 'sandal 9', image: 'sandal 9.jpg', priceKES: 1550 },
      { name: 'sandals 1', image: 'sandals 1.jpg', priceKES: 1600 },
    ],
  },
  {
    name: 'Masks',
    folder: 'masks',
    products: [
      { name: 'mask 1', image: 'mask 1.jpg', priceKES: 4000 },
      { name: 'mask 2', image: 'mask 2.jpg', priceKES: 4200 },
      { name: 'mask 3', image: 'mask 3.jpg', priceKES: 4400 },
      { name: 'mask 4', image: 'mask 4.jpg', priceKES: 4600 },
      { name: 'mask 5', image: 'mask 5.jpg', priceKES: 4800 },
      { name: 'mask 6', image: 'mask 6.jpg', priceKES: 5000 },
      { name: 'mask 7', image: 'mask 7.jpg', priceKES: 5200 },
      { name: 'mask 8', image: 'mask 8.jpg', priceKES: 5400 },
    ],
  },
  {
    name: 'Animal Carvings',
    folder: 'carvings',
    products: [
      { name: 'animals', image: 'animals.jpg', priceKES: 6000 },
      { name: 'birds', image: 'birds.jpg', priceKES: 6200 },
      { name: 'bunny', image: 'bunny.jpg', priceKES: 6400 },
      { name: 'eagle', image: 'eagle.jpg', priceKES: 6600 },
      { name: 'elephant', image: 'elephant.jpg', priceKES: 6800 },
      { name: 'elephant 2', image: 'elephant 2.jpg', priceKES: 7000 },
      { name: 'elephant 3', image: 'elephant 3.jpg', priceKES: 7200 },
      { name: 'elephant 4', image: 'elephant 4.jpg', priceKES: 7400 },
      { name: 'fox', image: 'fox.jpg', priceKES: 7600 },
      { name: 'lion', image: 'lion.jpg', priceKES: 7800 },
      { name: 'lion 2', image: 'lion 2.jpg', priceKES: 8000 },
      { name: 'rhino 1', image: 'rhino 1.jpg', priceKES: 8200 },
    ],
  },
  {
    name: 'Soap Stones',
    folder: 'soaptones',
    products: [
      { name: 'bowls', image: 'bowls.jpg', priceKES: 2000 },
      { name: 'calabash sopastone', image: 'calabash sopastone.jpg', priceKES: 2200 },
      { name: 'oval plate', image: 'oval plate.jpg', priceKES: 2400 },
      { name: 'plate 1', image: 'plate 1.jpg', priceKES: 2600 },
      { name: 'sopastone 1', image: 'sopastone 1.jpg', priceKES: 2800 },
    ],
  },
];

function addMarkup(amount: number, percent: number) {
  return Math.round(amount * (1 + percent / 100));
}

async function fetchForexRates() {
  // MOCKED: Always return fallback rates for development
  return { USD: 1, EUR: 1 };
}

export default async function Shop() {
  const forex = await fetchForexRates();

  // Flatten products and calculate prices
  const products = categories.flatMap(cat =>
    cat.products.map(product => {
      const usd = addMarkup(product.priceKES * forex.USD, 20);
      const eur = addMarkup(product.priceKES * forex.EUR, 20);
      return {
        ...product,
        imageSrc: `/products/${cat.folder}/${product.image}`,
        prices: {
          KES: product.priceKES,
          USD: usd,
          EUR: eur,
        },
        category: cat.folder,
        categoryName: cat.name,
      };
    })
  );

  return (
    <ShopClientWrapper products={products} categories={categories.map(cat => cat.name)} />
  );
} 