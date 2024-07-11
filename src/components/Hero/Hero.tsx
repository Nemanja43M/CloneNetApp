import React, { useEffect } from "react";
import Swiper from "../../../node_modules/swiper/swiper";
import "../../../node_modules/swiper/swiper-bundle.css";
import "./hero.css";
import HeroParts from "../Hero/HeroParts";
import { HeroProps } from "../../interfaces/interfaces";

const Hero: React.FC<HeroProps> = ({ items, onSelectFavorite }) => {
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

        const buildModuleHeader = (sectionHero: HTMLElement) => {};

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
                            <HeroParts key={item.id} item={item} onSelectFavorite={onSelectFavorite} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
