import { title } from 'framer-motion/client';
import React, { useRef } from 'react';
import { flex, wrapperClass, subTitleStyle } from '../styles/containerClass';
import Button from "./Button.jsx"
import backIcon from "../assets/images/back.png";
import nextIcon from "../assets/images/next.png";
import car from "../assets/images/carimage.png";
import marked from "../assets/images/marked.png";
import ticked from "../assets/images/ticked.png";

    const services = [
        {
            id: 1,
            title: "Silver mini valet",
            price: "$13",
            features: [
                "Hand wash",
                "Tyre Shine",
                "Wax & Dry Door Shuts",
                "+ 2 more"
            ],
            add: "Add-ons",
            tick: "Polish"
        },
        {
            id: 2,
            title: "Good mini valet",
            price: "$23",
            features: [
                "Hand wash",
                "Tyre Shine",
                "Wax & Dry Door Shuts",
                "+ 3 more"
            ],
            add: "Add-ons",
            tick: "Polish"
        },
        {
            id: 3,
            title: "Mini valet & Polish",
            price: "$25",
            features: [
                "Hand wash",
                "Tyre Shine",
                "Wax & Dry Door Shuts",
                "+ 7 more"
            ],
            add: "Add-ons",
            tick: "Polish"
        },
        {
            id: 4,
            title: "Full valet",
            price: "$39",
            features: [
                "Hand wash",
                "Tyre Shine",
                "Wax & Dry Door Shuts",
                "+ 12 more"
            ],
            add: "Add-ons",
            tick: "Polish"
        }
    ]

const Services = () => {

    const buttonStyles = "rounded-full cursor-pointer hover:bg-gray-100"
    const containerRef = useRef(null);
    const CARD_SCROLL_AMOUNT = 324;
    const scroll = (direction) => {
            if (containerRef.current) {
                const scrollAmount = direction === "next" ? CARD_SCROLL_AMOUNT : -CARD_SCROLL_AMOUNT;
                containerRef.current.scrollBy ({
                    left: scrollAmount,
                    behavior: "smooth"
                });
            }
        }

    const featureStyle = "pb-3 flex items-center gap-3"
    return (
        <div className={`${wrapperClass} py-8`}>
            <div className={`${flex} pb-8`}>
                <h2 className={subTitleStyle}>Our Services</h2>
                <div className='space-x-5 flex items-center'>
                    <button className={buttonStyles} onClick={() => scroll('prev')}>
                        <img className='w-9' src={backIcon} alt="" />
                    </button>
                     <button className={buttonStyles} onClick={() => scroll('next')}>
                        <img className='w-9' src={nextIcon} alt="" />
                    </button>
                </div>
            </div>
            <div ref={containerRef}
                className='flex overflow-x-scroll snap-x snap-mandatory 
                            scroll-smooth space-x-3 hide-scrollbar' >
                {
                    services.map((service) => (
                        <div key={service.id}
                            className='flex-shrink-0 w-[310px] p-3 bg-green-50 rounded-3xl snap-start'>
                            <div>
                                <img src={car} alt="" />
                            </div>
                            <div className={`${flex} my-3`}>
                                <h3 className='text-xl'><strong>{service.title}</strong></h3>
                                <p className='text-[#007148]'>
                                    <strong>{service.price}</strong>
                                </p>
                            </div>
                            <ul>
                                {
                                    service.features.slice(0, service.features.length -2).map((feature, i) => (
                                        <li key={i} className={featureStyle}>
                                            <span>
                                                <img src={marked} alt="" />
                                            </span> {feature}
                                        </li>
                                    ))
                                }
                                <div className='flex pb-2 space-x-2'>
                                    <li className={featureStyle}>
                                        <span>
                                            <img src={marked} alt="" />
                                        </span> 
                                        <span>{service.features[service.features.length - 2]}</span>
                                    </li>
                                    <li className='text-[#007148] font-semibold'>{service.features[service.features.length - 1]}</li>
                                </div>
                            </ul>
                            <div className=' text-[#007148]'>
                                <p>{service.add}</p>
                                <p className={featureStyle}><span><img src={ticked} alt="" /></span>{service.tick}</p>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center py-10'>
                <Button>Book Service</Button>
            </div>
        </div>
    )
}
export default Services 