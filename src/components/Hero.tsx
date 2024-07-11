import React, { useEffect } from "react";
import Swiper from "../../node_modules/swiper/swiper";
import "../../node_modules/swiper/swiper-bundle.css";
import "./hero.css";
import HeroParts from "./HeroParts";

export interface Item {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    inFavorites: boolean;
}

type UpcommingProps = {
    items: Item[];
};

const Hero: React.FC<UpcommingProps> = ({ items }) => {
    useEffect(() => {
        new Swiper(".section-hero__swiper", {
            speed: 600,
            loop: true,
            effect: "fade",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: false,
            slidesPerView: 1,
        });

        const sectionHero = document.querySelector(".section-hero__wrapper .hero-parallax") as HTMLElement | null;
        const navigation = document.querySelector(
            ".section-hero__wrapper .swiper-navigation, .section-hero__wrapper .swiper-pagination"
        ) as HTMLElement | null;
        const scrollBtn = document.querySelector(".section-hero__wrapper .scroll-btn") as HTMLElement | null;
        const aboutSwiper = document.querySelector(".section-about__swiper") as HTMLElement | null;

        const buildModuleHeader = (sectionHero: HTMLElement) => {
            // Implement any specific logic for building the module header if needed
        };

        const effectsModuleHeader = (sectionHero: HTMLElement | null, scrollTopp: HTMLElement) => {
            if (sectionHero) {
                const homeSHeight = sectionHero.offsetHeight;
                const topScroll = document.documentElement.scrollTop;
                if (sectionHero.classList.contains("hero-parallax") && topScroll <= homeSHeight) {
                    sectionHero.style.transform = `translateY(${topScroll * 0.5}px)`;
                    if (navigation) {
                        navigation.style.transform = `translateY(${topScroll * 0.575}px)`;
                    }
                    if (scrollBtn) {
                        scrollBtn.style.transform = `translateY(${topScroll * -0.175}px)`;
                    }
                    if (aboutSwiper) {
                        aboutSwiper.style.transform = `translateY(${topScroll * -0.033}px)`;
                    }
                }
                if (sectionHero.classList.contains("hero-parallax") && topScroll <= homeSHeight) {
                    sectionHero.style.opacity = `${1 - topScroll / sectionHero.offsetHeight}`;
                }
            }
        };

        if (sectionHero) {
            buildModuleHeader(sectionHero);
        }

        window.addEventListener("resize", () => {
            if (sectionHero) {
                buildModuleHeader(sectionHero);
            }
        });

        window.addEventListener("scroll", () => {
            effectsModuleHeader(sectionHero, document.documentElement);
        });

        return () => {
            window.removeEventListener("resize", () => {
                if (sectionHero) {
                    buildModuleHeader(sectionHero);
                }
            });
            window.removeEventListener("scroll", () => effectsModuleHeader(sectionHero, document.documentElement));
        };
    }, []);

    return (
        <>
            <section className="section section-hero section-hero--slider">
                <div className="section-hero__swiper swiper section-hero__wrapper">
                    <div className="swiper-wrapper hero-parallax">
                        {items.map((item) => (
                            <HeroParts key={item.id} item={item} />
                        ))}
                    </div>
                    {/* <div className="swiper-pagination"></div>
                    <div className="swiper-navigation d-none d-lg-block">
                        <div className="swiper-button swiper-button-prev"></div>
                        <div className="swiper-button swiper-button-next"></div>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Hero;
