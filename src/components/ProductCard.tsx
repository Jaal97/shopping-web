import React from 'react'

interface propsType{
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
}

const ProductCard: React.FC<propsType> = ({img, title, desc, rating, price}) => {
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard