import React from 'react';
import scrollDownIcon from '../assets/scroll-down.svg';
const Home = () => {
  return (
    <main className=" w-full px-8">
      <section className="mb-16">
        <div className="w-fit mx-auto mt-[50svh] translate-y-[-1.5rem] ">
          <h1 className=" my-8 text-5xl font-semibold leading-none tracking-[.16em]">
            Makimura
            <span className="block text-2xl text-right leading-none ">Portfolio</span>
          </h1>
          <div className=" w-fit mx-auto my-8">
            <img src={scrollDownIcon} alt="Scroll" />
          </div>
        </div>
        <div className=" my-8 text-light">
          <h2 className=" my-2 text-3xl font-semibold">Outline</h2>
          <ul className=" border-l-4 ml-[.1rem] my-2 px-4 ">
            <li>About me</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>

      <section className=" my-16 ">
        <h2 className=" text-3xl font-semibold ">About me</h2>
        <div className=" border-b-2 my-1"></div>
      </section>

      <section className=" my-16 ">
        <h2 className=" text-3xl font-semibold ">Skill Set</h2>
        <div className=" border-b-2 my-1"></div>
      </section>

      <section className=" my-16 ">
        <h2 className=" text-3xl font-semibold ">Works</h2>
        <div className=" border-b-2 my-1"></div>
      </section>
    </main>
  );
};

export default Home;
