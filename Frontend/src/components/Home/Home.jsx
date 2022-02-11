import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import "./Home.css";

export const Home = () => {
    const bannerOne = ["Banner-1.jpg", "banner-2.jpg"];
    const bannerThree = ["Banner-5.jpg", "banner-6.jpg"];
    const [ind, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => {
                if(prev === 1){
                    return 0;
                }
                return prev + 1;
            });
        }, 3000);
    }, []);

    return (
        <div>
            <Header />
            <div className='boxOne'>
                <img src={bannerOne[ind]} className='boxOneImg' />
            </div>
            <div className='boxTwo'>
                <div>
                    <img src='Banner-3.jpg' />
                    <img src='Banner-4.jpg' />
                </div>
            </div>
            <div className='boxThree'>
                <div className='boxThreeDetOne'>
                    <div>Brady</div>
                    <div>Tom Brady's next-gen athletic apparel brand applies two decades of pro-sport-level innovation 
                        and engineering to deliver clothing that performs across every activity, because life is a sport.
                    </div>
                    <div>
                        <Link className='Brady' to={"/products"}>BRADY</Link>
                        <Link className='Brady' to={"/products"}>BRADY Store Locations</Link>
                    </div>
                </div>
                <div>
                    <Link className='Brady' to={"/products"}>Explore</Link>
                    <Link className='Brady' to={"/products"}>Shop</Link>
                </div>
            </div>
            <div className='boxOne' style={{marginTop: '-50px'}}>
                <img src={bannerThree[ind]} className='boxOneImg' />
            </div>
            <Footer />
        </div>
    );
};
