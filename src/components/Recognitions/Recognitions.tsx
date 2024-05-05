import React from 'react'
import Card from '../Card/Card'

function Recognitions() {
  return (
    <div className="my-10 mb-20">
      <div className="flex gap-2 flex-col md:flex-row mt-10 relative md:flex-wrap md:gap-0 justify-evenly lg:gap-2 lg:flex-nowrap">
        <Card
          imgUrl="istockphoto-1496672997-612x612.jpg"
          title="FACE RECOGNITION"
          width="md:w-2/4 lg:w-2/4"
          url='faceid'
        />

        <Card
          imgUrl="istockphoto-1432931039-612x612-removebg-preview.png"
          title="object recogntion"
          width="md:w-2/4 lg:w-2/4"
          url='object-detection'
        />

        <Card
          imgUrl="istockphoto-1438569629-170667a.webp"
          title="CREDIT CARD ANALYST"
          width="md:w-full lg:w-2/4"
          url='analyst'
        />
      </div>
    </div>
  );
}

export default Recognitions
