import './style.css'

import { gsap } from "gsap"
import { navbar } from "./navbar"
import { car } from "./car"

window.onload = () => {
    loadAnimation()
    navbar.adjust()
}

window.onresize = () => {
    navbar.adjust()
}

function loadAnimation() {
    // 通过gsap的时间线功能 创造补间动画
    const tween = gsap.timeline({ delay: 0.8 })

    tween.to(".loading", { duration: 0.3, opacity: 0, display: "none" })

    // header-start
    tween.from("header", { duration: 0.5, ease: "power2", y: -16 * 6 })
    tween.to("header", { duration: 0, transition: 0.3})
    // header-end

    // aside-start
    tween.from(".info", { duration: 0.5, ease: "power2", opacity: 0, y: 40 })
    // aside-end
    
    // svg-start
    tween.from(".background-svg", { duration: 1.5, ease: "power2", opacity: 0, x: 80 })

    tween.call(carAnimation)

}

function carAnimation() {
    car.play()
}


const navIcon = document.querySelector("header i")

navIcon.addEventListener("click", () => {
    gsap.fromTo(".menu", { y: - window.innerHeight, opacity: 0, display: "none" },
    { duration: 0.5 , ease: "power2", opacity: 1, x: 0, y: 0, display: "flex"})
})

const menuIcon = document.querySelector(".menu i")

menuIcon.addEventListener("click", () => {
    const tween = gsap.timeline()
    tween.to('.menu', { duration: 0.1, y: 30 })
    tween.to('.menu', { duration: 0.7, y: - window.innerHeight, opcaty: 0, display: "none" })
})