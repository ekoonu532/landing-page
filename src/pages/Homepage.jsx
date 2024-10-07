import React from 'react'
import HeroImage from "../assets/images/hero.svg"
import AboutImage from "../assets/images/about.svg"
import Project1 from "../assets/images/proyek-1.webp"
import Project2 from "../assets/images/proyek-2.webp"
import Project3 from "../assets/images/proyek-3.webp"
import Project4 from "../assets/images/proyek-4.webp"
import Project5 from "../assets/images/proyek-5.webp"

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
                        <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0" />
                    </div>
                </div>
                <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32" id="about">
                    <div className="box md:order-2 order-1">
                        <img src={AboutImage} alt="About Image" className="lg:w-[500px] md:m-0 mx-auto" />
                    </div>
                    <div className="box">
                        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-2 ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span className="font-bold text-sky-400 underline">Tailwind CSS</span>
                        </h1>
                        <p className="text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptatum rerum enim beatae cupiditate at hic porro laboriosam maxime. Culpa sit sed deserunt corrupti temporibus modi neque nobis magnam porro.</p>
                    </div>
                </div>
                <div className="services mt-12" id="layanan">
                    <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Layanan</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                            <i className="ri-number-1 text-3xl text-white"></i>
                            <h3 className="text-white font-bold text-xl mt-6 mb-2">Service Name 1</h3>
                            <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque ipsum, sint magnam culpa ullam!</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                            <i className="ri-number-2 text-3xl text-white"></i>
                            <h3 className="text-xl text-white font-bold mt-6 mb-2">Service Name 2</h3>
                            <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque ipsum, sint magnam culpa ullam!</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                            <i className="ri-number-3 text-3xl text-white"></i>
                            <h3 className="text-white font-bold text-xl mt-6 mb-2 ">Service Name 3</h3>
                            <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque ipsum, sint magnam culpa ullam!</p>
                        </div>

                    </div>
                </div>
                <div className="projects pt-32" id="proyek">
                    <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Proyek</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="box p-2 bg-white shadow">
                            <img src={Project1} alt="Project 1" className="w-full h-[220px]"/>
                            <h3 className=" font-bold text-xl mt-6 mb-2">Service Name 1</h3>
                            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque ipsum, sint magnam culpa ullam!</p>
                        </div>
                        <div className="box p-2 bg-white shadow">
                            <img src={Project2} alt="Project 2" className="w-full h-[220px]"/>
                            <h3 className=" font-bold text-xl mt-6 mb-2">Service Name 1</h3>
                            <p className=" text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque ipsum, sint magnam culpa ullam!</p>
                        </div>
                        <div className="box p-2 bg-white shadow">
                            <img src={Project3} alt="Project 3" className="w-full h-[220px]"/>
                            <h3 className=" font-bold text-xl mt-6 mb-2">Service Name 1</h3>
                            <p className=" text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque ipsum, sint magnam culpa ullam!</p>
                        </div>
                        <div className="box p-2 bg-white shadow">
                            <img src={Project4} alt="Project 4" className="w-full h-[220px]"/>
                            <h3 className=" font-bold text-xl mt-6 mb-2">Service Name 1</h3>
                            <p className=" text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque ipsum, sint magnam culpa ullam!</p>
                        </div>
                        <div className="box p-2 bg-white shadow">
                            <img src={Project5} alt="Project 5" className="w-full h-[220px]"/>
                            <h3 className=" font-bold text-xl mt-6 mb-2">Service Name 1</h3>
                            <p className=" text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et itaque ipsum, sint magnam culpa ullam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage