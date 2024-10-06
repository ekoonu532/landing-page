import React from 'react'
import HeroImage from "../assets/images/hero.svg"

const Homepage = () => {
  return (
    <div className="homepage pb-10">
        <div className="container mx-auto px-4">
            <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
                <div className="box">
                    <h1 className="lg:text-5xl/tight text-3xl font-medium mb-2 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span className="font-bold text-sky-400 underline">Tailwind CSS</span>
                    </h1>
                    <p className="text-base/8 mb-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptatum rerum enim beatae cupiditate at hic porro laboriosam maxime. Culpa sit sed deserunt corrupti temporibus modi neque nobis magnam porro.</p>
                    <a href="#" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">Tentang Kami <i className="ri-eye-line ms-1"></i>
                    </a>
                </div>
                <div className="box">
                    <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage