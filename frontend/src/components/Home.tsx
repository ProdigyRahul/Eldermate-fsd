import React from 'react';
import img1 from '../assets/home1.jpg'
import img2 from '../assets/home2.jpg'
import img3 from '../assets/home3.jpg'
import img4 from '../assets/home4.jpg'
import img5 from '../assets/home5.png'
import rev1 from '../assets/rev1.png'
import rev2 from '../assets/rev2.png'
import rev3 from '../assets/rev3.png'
import logo from '../assets/logo2.png'

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-between bg-[#fdf9f4] p-8 rounded-lg max-w-7xl mx-auto">
      <img className="w-1/3" src={logo} alt="ElderMate Logo" />


      <div className="flex flex-row items-center justify-between flex-wrap gap-8 w-full -mt-24">
        <div className="flex-1 text-center min-w-0">
          <img className="w-1/2 max-w-md h-auto rounded-3xl" src={img1} alt="Companion and elderly person" />
        </div>
        <div className="flex-1 p-4 text-center min-w-0">
          <h1 className="text-[#517f68] text-4xl font-bold font-['Yeseva_One'] text-center my-4">Everything Grandkids Do!</h1>
          <p className="text-2xl font-bold font-['Yeseva_One'] text-center my-4">Spirited, empathetic youth companions for the elderly.</p>
          <a href="/register" className="inline-block px-8 py-3 bg-[#517f68] text-white rounded hover:bg-[#476a59] text-xl cursor-pointer mt-4 md:text-base md:px-6 md:py-2">
            Join the Trial!
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center mt-20 bg-[#ffc425] p-8 rounded-lg max-w-7xl w-full md:mt-8 md:p-4">
        <p className="text-2xl font-bold font-['Yeseva_One'] text-center my-4">
          We are a team of young graduates with a deep affection for the elderly, dedicated to building meaningful relationships with our "Grandpals."
        </p>
      </div>

      <div className="flex flex-row md:flex-col items-center justify-between bg-[#fdf9f4] gap-4 mt-4 p-8 w-full box-border">
        <div className="flex-1 text-center min-w-0">
          <img className="w-1/2 md:w-4/5 max-w-md h-auto rounded-3xl" src={img2} alt="Companion and elderly person" />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-[#517f68] text-4xl font-bold font-['Yeseva_One'] text-center my-4">Experience the Delight of Quality Time</h1>
          <p className="text-2xl font-bold font-['Yeseva_One'] text-center my-4">Our Goodfellows are always ready to listen with a caring heart.</p>
        </div>
      </div>

      <div className="flex flex-row md:flex-col items-center justify-between bg-[#fdf9f4] gap-4 mt-4 p-8 w-full box-border">
        <div className="flex-1 text-center">
          <h1 className="text-[#517f68] text-4xl font-bold font-['Yeseva_One'] text-center my-4">Tech-savvy youth bridge the digital divide</h1>
          <p className="text-2xl font-bold font-['Yeseva_One'] text-center my-4">Our Young Mates are here to guide you through the digital world.</p>
        </div>
        <div className="flex-1 text-center min-w-0">
          <img className="w-1/2 md:w-4/5 max-w-md h-auto rounded-3xl" src={img3} alt="Companion and elderly person" />
        </div>
      </div>

      <h1 className="text-[#517f68] text-4xl font-bold font-['Yeseva_One'] text-center my-4">Discover Grandpal's tales.</h1>

      <div className="flex flex-wrap justify-around w-full">
        {[
          { text: "Laurentine Castelino is grateful to ElderMate for assisting with daily groceries." },
          { text: "ElderMate's mate taught me how to shop online, making life easier." },
          { text: "My ElderMate companion has been a wonderful source of company and support. We go for walks together and have the best conversations. It's like having a friend to share my days with." }
        ].map((review, index) => (
          <div key={index} className="flex flex-col w-1/4 md:w-[90%] h-auto bg-[#f2f0e7] p-4 mb-4 text-center">
            <div className="text-center">
              <div className="flex justify-center">
                <img className="w-1/3 max-w-xs h-auto rounded-3xl" src={rev1} alt="Review" />
              </div>
            </div>
            <p className="text-2xl font-bold font-['Yeseva_One'] text-center my-4">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;