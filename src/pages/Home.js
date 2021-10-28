import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Card1 from "../components/Card1"
import Card2 from "../components/Card2"
import Card3 from "../components/Card3"
import ProductCard from "../components/CardProduct"
import RightArrow from "../components/slider/RightArrow"
import LeftArrow from "../components/slider/LeftArrow"

function Home() {
  const [card1] = useState([
    {
      title: "111",
      img: "card1-1.jpeg",
    },
    {
      title: "222",
      img: "card1-1.jpeg",
    },
    {
      title: "333",
      img: "card1-1.jpeg",
    },
    {
      title: "444",
      img: "card1-1.jpeg",
    },
  ])
  const [card2] = useState([
    {
      title: "Lights Adventures",
      bgColor: "#F8931F",
      num: "01",
    },
    {
      title: "Everyone Loves Technology",
      bgColor: "#AE9962",
      num: "02",
    },
    {
      title: "Future of Luxury",
      bgColor: "#111111",
      num: "03",
    },
    {
      title: "The Modern Rules Of Minimalism",
      bgColor: "#909090",
      num: "04",
    },
    {
      title: "The Modern Rules Of Minimalism",
      bgColor: "#909090",
      num: "04",
    },
  ])
  const [card3] = useState([
    {
      title: "Lamps",
      img: "card3-lamps.jpg",
    },
    {
      title: "Chairs",
      img: "card3-chairs.jpg",
    },
    {
      title: "Cups",
      img: "card3-cups.jpg",
    },
    {
      title: "Vases",
      img: "card3-vases.jpg",
    },
    {
      title: "Lamps11",
      img: "card3-lamps.jpg",
    },
    {
      title: "Lamps22",
      img: "card3-lamps.jpg",
    },
  ])
  const [product] = useState([
    {
      name: "Eames chair",
      img: "product-chair1.jpg",
      price: "300",
      discount: "200",
    },
    {
      name: "Eames chair2",
      img: "product-chair1.jpg",
      price: "500",
    },
    {
      name: "Eames chair3",
      img: "product-chair1.jpg",
      price: "400",
    },
    {
      name: "Eames chair4",
      img: "product-chair1.jpg",
      price: "600",
      discount: "400",
    },
  ])

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  }

  return (
    <section className="flex">
      <section className="w-1/5"></section>
      <section className="w-4/5">
        <Slider {...settings}>
          {card3.map((item, index) => (
            <section key={index} className="px-2">
              <Card3 title={item.title} img={item.img}></Card3>
            </section>
          ))}
        </Slider>

        <Slider {...settings}>
          {card1.map((item, index) => (
            <section key={index} className="px-2">
              <Card1 title={item.title} img={item.img}></Card1>
            </section>
          ))}
        </Slider>

        <Slider {...settings}>
          {card2.map((item, index) => (
            <section key={index} className="px-2">
              <Card2
                title={item.title}
                bgColor={item.bgColor}
                num={item.num}
              ></Card2>
            </section>
          ))}
        </Slider>

        <Slider {...settings}>
          {product.map((item, index) => (
            <section key={index} className="px-2">
              <ProductCard
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
