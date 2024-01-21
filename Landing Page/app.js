let item1 = "div.item1",
    item2 = "div.item2",
    item3 = "div.item3",
    item4 = "div.item4",
    item5 = "div.item5",
    item6 = "div.item6",
    item7 = "div.item7",
    item8 = "div.item8";

gsap.timeline({
  defaults: {
    duration: 300
  },
  scrollTrigger: {
    trigger: '.wrap',
    scrub: !0,
    start: '+=1',
    end: '+=3000',
    pin: !0
  }
})
  .to(".wrap div.item3", { opacity: 0, delay: 600 })
  .to(".wrap div.item5", { opacity: 0, y: -20 }, "<")
  .from(item2, { opacity: 0 })
  .from(item6, { opacity: 0, y: 20}, "<")
  .to(item2, { opacity: 0, delay: 600})
  .to(item6,{ opacity: 0, y: -20 }, "<")
  .from(item3, { opacity: 0 })
  .from(item7, { opacity: 0, y: 20}, "<")
  .to(item3, { opacity: 0, delay: 600 })
  .to(item7, { opacity: 0, y: -20 }, "<")
  .from(item4, { opacity: 0 })
  .from(item8, { opacity: 0, y: 20 }, "<")
  .to(item4, { opacity: 1, duration: 600 })
  .to(item8, { opacity: 1, y: -20 }, "<");