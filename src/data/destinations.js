// All content below is taken from the live Traviator site (traviator.vacationlabs.com / traviator.in).
const I = 'https://vl-prod-static.b-cdn.net/system/images/000/';
export const SITE = 'https://traviator.vacationlabs.com';
export const WHATSAPP = 'https://wa.me/+917249309036?text=Hello';
export const PHONE = '+91 724 930 9036';
export const EMAIL = 'info.traviator@gmail.com';
const t = (id, name, place, nights, price, img, slug, cats) => ({ id, name, place, nights, price, img: I + img, url: `${SITE}/tours/${slug}`, cats });
export const tours = [
  t('ladakh8', 'Ladakh Bike & Backpacking Expedition', 'Ladakh', '8 Nights 9 Days', '₹ 26,999', '925/474/1fa0aba5cd6d3036d3117c46da303bd0/x540gt/4.png', 'leh-ladakh-bike-tour-summer-edition-8n9d', ['bike']),
  t('ladakh7', 'Ladakh Bike & Backpacking Expedition Tour', 'Ladakh', '7 Nights 8 Days', '₹ 24,999', '925/475/66e75507d61c51e15878506774084ac4/x540gt/3.png', 'ladakh-bike-backpacking-expedition-tour-7-nights-8-days-170184', ['bike', 'domestic']),
  t('spitibike', 'Spiti Bike & Backpacking Expedition with Lepcha La & Chandratal', 'Himachal Pradesh', '7 Nights 8 Days', '₹ 27,900', '908/335/09c492eee1cd778aa15f6eb1ff5fdabb/x540gt/spiti_web_cover_page_jpg.jpeg', 'spiti-bike-tour-7-nights-8-days-with-lepcha-la-chandratal', ['bike', 'domestic']),
  t('sikkim', 'Sikkim Mountain Expedition – Bike & Backpacking Edition', 'Sikkim', '7 Nights 8 Days', '₹ 44,999', '925/477/3b9771fbd734a8f5b1d8b162b9f82708/x540gt/8.png', 'sikkim-mountain-expedition-bike-backpacking-edition-7-nights-8-days', ['bike', 'domestic']),
  t('tawang', 'Tawang Bike Trip and Backpacking Expedition', 'Tawang', '8 Nights 9 Days', '₹ 37,999', '925/472/78f806745b34b7561257381a5320571f/x540gt/6.png', 'tawang-bike-trip-and-backpacking-expedition', ['bike', 'domestic']),
  t('bhutan', 'Bhutan Bike & Backpacking Trip', 'Bhutan', '7 Nights 8 Days', '₹ 43,999', '923/169/caf0165eafbbfa0b589d0615ab0e2e9e/x540gt/6.png', 'bhutan-bike-backpacking-trip-7-nights-8-days', ['bike', 'international']),
  t('bali', 'The Bali Adventure', 'Bali', '7 Nights 8 Days', '₹ 56,500', '925/469/90a25773883982a96b68a4eb92100eca/x540gt/1.png', 'the-bali-adventure-7-nights-8-days', ['international']),
  t('vietnam', 'Vietnam Escapades', 'Vietnam', '7 Nights 8 Days', null, '925/468/bcc31cb72a3a97e670d9d85d3ade0ac0/x540gt/2.png', 'vietnam-escapades-6-nights-7-days', ['international']),
  t('iceland', 'Iceland Tour', 'Iceland', '6 Nights 7 Days', null, '881/678/1bab2fa2d5a15dd72ba356f8d4050114/x540gt/pexels-eberhardgross-20459771.jpg', 'iceland-tour-5-nights-6-days-162475', ['international']),
  t('georgia', 'Georgia Tour', 'Georgia', '5 Nights 6 Days', null, '881/782/400d5fdda6da6ee74d0952c6752b63d1/x540gt/pexels-rudy-kirchner-278171-2759804.jpg', 'georgia-tour-5-nights-6-days-162485', ['international']),
  t('turkey', 'Turkey Tour', 'Türkiye', '6 Nights 7 Days', null, '881/948/b4bb0b88d3b6a4c20c57db6bcd124748/x540gt/anna-berdnik-0n0AHB1fgTQ-unsplash.jpg', 'turkey-tour-6-nights-7-days-162574', ['international']),
  t('meghalaya', 'Meghalaya Backpacking Trip (Shillong, Cherapunji, Camping)', 'Meghalaya', '5 Nights 6 Days', null, '881/576/6993aa9d2b5a9588d88010bc7c3b1388/x540gt/pexels-nazdotdesign-945593.jpg', 'meghalaya-backpacking-trip-shillong-cherapunji-camping-162467', ['domestic']),
  t('wspiti7', 'Winter Spiti (7N - 8D) Delhi to Delhi', 'Himachal Pradesh', '7 Nights 8 Days', '₹ 16,900', '884/258/8b4b8be473615cec77b7ec52b65cdd93/668gt/WhatsApp_Image_2026-01-23_at_11_19_38.jpeg', 'winter-spiti-6n-7d-delhi-to-delhi', ['domestic']),
  t('wspiti8', 'Winter Spiti (8N - 9D) Delhi to Delhi', 'Himachal Pradesh', '8 Nights 9 Days', '₹ 22,900', '884/258/8b4b8be473615cec77b7ec52b65cdd93/668gt/WhatsApp_Image_2026-01-23_at_11_19_38.jpeg', 'winter-spiti-8n-9d-delhi-to-delhi', ['domestic']),
  t('hornbill', 'Hornbill Festival Nagaland', 'Nagaland', '6 Nights 7 Days', '₹ 55,000', '923/086/a4167ff5acadc01acdd0c9a7c7e84e9c/x540gt/Bali_Iternery_Carrousel__1440_x_648_px___4_.png', 'nagaland-bike-and-backpacking-expedition-6n-7d-170286', ['bike']),
];
export const orbitIds = ['ladakh8', 'spitibike', 'sikkim', 'bhutan', 'bali', 'iceland'];
export const filters = [['all', 'All tours'], ['bike', 'Bike & Backpacking'], ['international', 'International'], ['domestic', 'Domestic']];
export const collections = { all: `${SITE}/collections/tours`, bike: `${SITE}/collections/bike-backpacking-tours`, international: `${SITE}/collections/international`, domestic: `${SITE}/collections/domestic-tour-collection` };
export const HERO = I + '925/644/066b474e1f4f1d78c3c37af779d54903/original/2.png?crop=4500%2C2025%2C0%2C0&width=1600&height=720';
export const chapters = [
  { title: 'Chandratal Lake', place: 'Spiti Valley', text: 'Backpacking trails and silent scenic shots, where journeys are counted in moments shared rather than kilometers.', img: I + '888/608/fb82d0e1f6367af28ec8daf9a4e44d01/original/Traviator_Backpacking_Bikexpedition_tours61.jpg' },
  { title: 'Ladakh', place: 'Bike & Backpacking Expedition', text: 'Bike rides through rugged terrains, roads conquered and the brotherhood of the expedition.', img: I + '888/915/6b364cfb9a1765685f1d4d959004a0be/1200gt/Traviator_Backpacking_Bikexpedition_tours19.jpg' },
  { title: 'Bali', place: 'Tropical escapes across Southeast Asia', text: 'Slow travel and local culture, with experiential adventures across the islands.', img: I + '888/610/4b036fa49ae298130654c3bbd91cfad3/1200gt/Traviator_Backpacking_Bikexpedition_tours52.jpg' },
  { title: 'Jaisalmer', place: 'Deserts of Rajasthan', text: 'History, adventure and local charm: a seamless blend on every Traviator tour.', img: I + '888/604/896fc4fe4eb9e8e42d0ec943cb7cac13/original/Traviator_Backpacking_Bikexpedition_tours65.jpg' },
];
export const about = {
  p1: 'Since 2016, Traviator Adventures & Outdoors has been driven by the spirit of discovery and the thrill of exploration. Over the years, we’ve guided adventure seekers and travel enthusiasts toward unforgettable experiences—across breathtaking landscapes, timeless cities, and stories waiting to be lived.',
  p2: 'Our expert tour guides lead you into the heart of every destination—introducing you to its people, traditions, and untold tales that linger long after you return home.',
  img1: I + '883/166/20af78fb99665ccadf0606f7770cc86d/1200gt/PHOTO-2025-04-06-17-04-31.jpg',
  img2: I + '888/756/e45ca7eebd985ad3da9870fb19282441/1200gt/Traviator_Backpacking_Bikexpedition_tours4.jpg',
  cta: I + '888/913/6dd749bf3eac9649d9ae3a17a6987490/1200gt/Traviator_Backpacking_Bikexpedition_tours21.jpg',
};
