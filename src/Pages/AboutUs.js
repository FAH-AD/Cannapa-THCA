import React from 'react';
import usePageTitle from '../Hooks/usePageTitle';
import AboutUsComp from '../Components/AboutUsComp';
import about1 from '../assets/about1.jpeg'
import about2 from '../assets/about2.jpeg'
import about3 from '../assets/about3.jpeg'
import about4 from '../assets/about4.jpeg'
import about5 from '../assets/about5.jpeg'
import about6 from '../assets/about6.jpeg'
import about7 from '../assets/about7.jpeg'

const AboutUs = () => {
    usePageTitle('About Us - Cannapa');
    return (
        <div>
            <div className='bg-gray-100 '>
                <div className='font-[500] text-left w-[80%] mx-auto  text-[2rem]  lgtext-[3rem] text-gray-400 py-8'>
                 About Us
                </div>

            </div>
            <p className='my-8 text-[1.3rem]'>
                Welcome to our Small Batch Craft Boutique THCA store, where quality meets innovation in every jar.

            </p>


            <AboutUsComp

                direction="row"
                imageSrc={about1}
                heading="Artisanal Craftsmanship"
                text=" Each batch of THCA is meticulously crafted by skilled artisans who are passionate about delivering the highest quality product. From cultivation to extraction, every step is carefully curated to ensure purity and potency."

            />
            <AboutUsComp

                direction="row-reverse"
                imageSrc={about2}
                heading="Small Batch Production"
                text="We believe in quality over quantity. Our small batch approach allows us to focus on the details, resulting in a superior product that consistently exceeds expectations. You won't find mass-produced THCA here; instead, each jar is a testament to our dedication to excellence."

            />


            <AboutUsComp

                direction="row"
                imageSrc={about3}
                heading=" Largest Selection in the Raleigh Area"
                text="With the widest range of options available, we cater to every palate and preference. Whether you're seeking a classic strain or something more exotic, you'll find it here."

            />
            <AboutUsComp

                direction="row-reverse"
                imageSrc={about4}
                heading="Unique Strains"
                text="             Discover a world of flavors and effects with our exclusive selection of unique strains. We pride ourselves on offering varieties that you won't find at any other stores, providing you with a truly one-of-a-kind experience."
            />

            <AboutUsComp

                direction="row"
                imageSrc={about5}
                heading="Competitive Prices"
                text="We believe that everyone should have access to premium THCA without breaking the bank. That's why we offer the most competitive prices in the Raleigh area, ensuring that quality remains affordable for all."

            />
            <AboutUsComp

                direction="row-reverse"
                imageSrc={about6}
                heading="Tailored Experience"
                text="We understand that every customer is unique, which is why we offer a personalized shopping experience. Whether you're a seasoned connoisseur or new to THCA, our knowledgeable staff is here to guide you through our selection and help you find the perfect product for your needs."
            />
            <AboutUsComp

                direction="row"
                imageSrc={about7}
                heading="Community Focus"
                text="As a local boutique, we are deeply rooted in our community. We support local growers and artisans, fostering a sustainable and interconnected ecosystem. When you shop with us, you're not just buying THCA – you're investing in the future of small-scale, craft cannabis production."

            />





<div className='border-t-2 pb-16 pt-8'>
            Copyright © 2024 Cannapa THCA Dispensary - All Rights Reserved.
            </div>














           
        </div>

    );
};

export default AboutUs;
