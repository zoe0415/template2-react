import { useState } from "react"
import { useSelector } from "react-redux"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Sidebar from "../components/layout/Sidebar"
import Card1 from "../components/home/Card1"
import Card2 from "../components/home/Card2"
import Card3 from "../components/home/Card3"
import ProductCard from "../components/product/ProductCard"
import RightArrow from "../components/slider/RightArrow"
import LeftArrow from "../components/slider/LeftArrow"

function Home() {
  const [setting] = useState({
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })
  // data
  const [card1] = useState(useSelector((state) => state.card1))
  const [card2] = useState(useSelector((state) => state.card2))
  const [card3] = useState(useSelector((state) => state.card3))
  const [product] = useState(useSelector((state) => state.product))

  return (
    <section className="flex gap-x-16">
      <section className="hidden lg:block w-1/5">
        <Sidebar></Sidebar>
      </section>
      <section className="w-full lg:w-4/5">
        <Slider {...setting}>
          {card1.map((item, index) => (
            <section key={index} className="pr-4">
              <Card1 title={item.title} img={item.img}></Card1>
            </section>
          ))}
        </Slider>

        <Slider {...setting}>
          {card2.map((item, index) => (
            <section key={index} className="pr-4">
              <Card2
                title={item.title}
                bgColor={item.bgColor}
                num={item.num}
              ></Card2>
            </section>
          ))}
        </Slider>

        <Slider {...setting}>
          {card3.map((item, index) => (
            <section key={index} className="pr-4">
              <Card3 title={item.title} img={item.img}></Card3>
            </section>
          ))}
        </Slider>

        <Slider {...setting}>
          {product.map((item, index) => (
            <section key={index} className="pr-4">
              <ProductCard
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                discount={item.discount}
              ></ProductCard>
            </section>
          ))}
        </Slider>
      </section>
    </section>
  )
}

export default Home
