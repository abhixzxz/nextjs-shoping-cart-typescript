// dummyData.js
import iPhone13ProImage from "../../public/assets/images/Apple iPhone 12.png";
import SamsungGalaxyS21UltraImage from "../../public/assets/images/Samsung Galaxy S21 Ultra.jpeg";
import GooglePixel6ProImage from "../../public/assets/images/Google Pixel 6 Pro.jpeg";
import OnePlus9ProImage from "../../public/assets/images/OnePlus 9 Pro.webp";
import iPhoneSE2020Image from "../../public/assets/images/iPhone SE (2020).jpeg";
import SamsungGalaxyA52Image from "../../public/assets/images/Samsung Galaxy A52.png";
import XiaomiRedmiNote10ProImage from "../../public/assets/images/Xiaomi Redmi Note 10 Pro.webp";
import OnePlusNord2Image from "../../public/assets/images/OnePlus Nord 2.jpeg";
import GooglePixel5aImage from "../../public/assets/images/pixel5.jpeg";
import SamsungGalaxyZFlip3Image from "../../public/assets/images/Samsung Galaxy Z Flip 3.jpeg";
import OnePlus8TImage from "../../public/assets/images/OnePlus 8T.jpeg";
import MotorolaMotoGPowerImage from "../../public/assets/images/Motorola Moto G Power.png";
import Realme8ProImage from "../../public/assets/images/Realme 8 Pro.jpeg";
import XiaomiPocoX3ProImage from "../../public/assets/images/Xiaomi Poco X3 Pro.jpeg";
import GooglePixel4aImage from "../../public/assets/images/Google Pixel 4a.jpeg";
import SamsungGalaxyA32Image from "../../public/assets/images/Samsung Galaxy A32.jpeg";
import iPhoneSE2022Image from "../../public/assets/images/Apple iPhone SE (2022).jpeg";
import OnePlus9Image from "../../public/assets/images/OnePlus 9.jpeg";
import XiaomiMi11LiteImage from "../../public/assets/images/Xiaomi Mi 11 Lite.webp";
import AppleiPhone12Image from "../../public/assets/images/12Iphone.jpeg";


function getRandomInt(min: any, max: any) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dummyData = [
  {
    id: "1",
    category: "Phones",
    name: "Apple iPhone 13 Pro",
    price: 74999,
    images: iPhone13ProImage,
    description:
      "The Apple iPhone 13 Pro is a powerhouse device equipped with the latest technology. It boasts a stunning design, exceptional camera capabilities, and top-notch performance. With its vibrant display and long-lasting battery life, it's a perfect companion for both work and play.",
    rating: getRandomInt(3, 5),
    ram: "6GB",
    rom: "128GB, 256GB, 512GB",
    battery: "4352 mAh",
    camera: "Triple 12MP rear cameras, 12MP front camera",
    processor: "Apple A15 Bionic",
    display: "6.1 inches, Super Retina XDR OLED",
    audio: "Stereo speakers",
    companyName: "Apple"
  },
  {
    id: "2",
    category: "Phones",
    name: "Samsung Galaxy S21 Ultra",
    price: 89999,
    images: SamsungGalaxyS21UltraImage,
    description:
      "The Samsung Galaxy S21 Ultra is the epitome of luxury and innovation. Featuring a breathtaking display, unparalleled camera system, and lightning-fast performance, it redefines what a smartphone can do. Whether you're a photographer, gamer, or productivity enthusiast, this device delivers an unmatched experience.",
    rating: getRandomInt(3, 5),
    ram: "12GB, 16GB",
    rom: "128GB, 256GB, 512GB, 1TB",
    battery: "5000 mAh",
    camera: "Quad 108MP + 10MP + 10MP + 12MP rear cameras, 40MP front camera",
    processor: "Exynos 2100 / Qualcomm Snapdragon 888",
    display: "6.8 inches, Dynamic AMOLED 2X",
    audio: "Stereo speakers tuned by AKG, Dolby Atmos",
    companyName: "Samsung"
  },
  {
    id: "3",
    category: "Phones",
    name: "Google Pixel 6 Pro",
    price: 67499,
    images: GooglePixel6ProImage,
    description:
      "The Google Pixel 6 Pro combines cutting-edge technology with sleek design. Its advanced camera system captures stunning photos in any lighting condition, while its powerful processor ensures smooth performance. With its intuitive software and long-lasting battery life, it's the perfect companion for your everyday adventures.",
    rating: getRandomInt(3, 5),
    ram: "12GB",
    rom: "128GB, 256GB",
    battery: "5003 mAh",
    camera: "Triple 50MP + 12MP + 48MP rear cameras, 12MP front camera",
    processor: "Google Tensor",
    display: "6.7 inches, LTPO OLED",
    audio: "Stereo speakers",
    companyName: "Google"
  },
  {
    id: "4",
    category: "Phones",
    name: "OnePlus 9 Pro",
    price: 79990,
    images: OnePlus9ProImage,
    description:
      "The OnePlus 9 Pro is a flagship device that excels in performance and design. With its powerful processor, stunning display, and versatile camera system, it's perfect for both work and play. Whether you're a gamer, photographer, or multitasker, this device delivers a seamless experience.",
    rating: getRandomInt(3, 5),
    ram: "8GB, 12GB",
    rom: "128GB, 256GB",
    battery: "4500 mAh",
    camera: "Quad 48MP + 50MP + 8MP + 2MP rear cameras, 16MP front camera",
    processor: "Qualcomm Snapdragon 888",
    display: "6.7 inches, Fluid AMOLED",
    audio: "Dual stereo speakers",
    companyName: "OnePlus"
  },
  {
    id: "5",
    category: "Phones",
    name: "iPhone SE (2020)",
    price: 29990,
    images: iPhoneSE2020Image,
    description:
      "The iPhone SE (2020) offers the perfect blend of performance and affordability. Its compact design and powerful processor make it ideal for everyday use. With its advanced camera system and long-lasting battery life, it's a great choice for those who value simplicity and efficiency.",
    rating: getRandomInt(3, 5),
    ram: "3GB",
    rom: "64GB, 128GB, 256GB",
    battery: "1821 mAh",
    camera: "Single 12MP rear camera, 7MP front camera",
    processor: "Apple A13 Bionic",
    display: "4.7 inches, Retina HD",
    audio: "Stereo speakers",
    companyName: "Apple"
  },
  {
    id: "6",
    category: "Phones",
    name: "Samsung Galaxy A52",
    price: 24990,
    images: SamsungGalaxyA52Image,
    description:
      "The Samsung Galaxy A52 is a mid-range smartphone packed with features. Its sleek design, vibrant display, and versatile camera system make it a great choice for everyday use. With its long-lasting battery life and expandable storage, it offers excellent value for money.",
    rating: getRandomInt(3, 5),
    ram: "6GB, 8GB",
    rom: "128GB, 256GB",
    battery: "4500 mAh",
    camera: "Quad 64MP + 12MP + 5MP + 5MP rear cameras, 32MP front camera",
    processor: "Qualcomm Snapdragon 720G",
    display: "6.5 inches, Super AMOLED",
    audio: "Stereo speakers",
    companyName: "Samsung"
  },
  {
    id: "7",
    category: "Phones",
    name: "Xiaomi Redmi Note 10 Pro",
    price: 22499,
    images: XiaomiRedmiNote10ProImage,
    description:
      "The Xiaomi Redmi Note 10 Pro is a budget-friendly smartphone with premium features. Its stunning display, powerful processor, and versatile camera system make it a great choice for multitasking and entertainment. With its long-lasting battery life and fast charging capabilities, it's perfect for users on the go.",
    rating: getRandomInt(3, 5),
    ram: "6GB, 8GB",
    rom: "64GB, 128GB",
    battery: "5020 mAh",
    camera: "Quad 108MP + 8MP + 5MP + 2MP rear cameras, 16MP front camera",
    processor: "Qualcomm Snapdragon 732G",
    display: "6.67 inches, Super AMOLED",
    audio: "Dual stereo speakers",
    companyName: "Xiaomi"
  },
  {
    id: "8",
    category: "Phones",
    name: "OnePlus Nord 2",
    price: 29999,
    images: OnePlusNord2Image,
    description:
      "The OnePlus Nord 2 offers flagship-level performance at an affordable price point. Its powerful processor, stunning display, and versatile camera system make it perfect for everyday use. With its fast charging capabilities and long-lasting battery life, it's the perfect companion for your busy lifestyle.",
    rating: getRandomInt(3, 5),
    ram: "8GB, 12GB",
    rom: "128GB, 256GB",
    battery: "4500 mAh",
    camera: "Triple 50MP + 8MP + 2MP rear cameras, 32MP front camera",
    processor: "MediaTek Dimensity 1200-AI",
    display: "6.43 inches, Fluid AMOLED",
    audio: "Stereo speakers",
    companyName: "OnePlus"
  },
  {
    id: "9",
    category: "Phones",
    name: "Google Pixel 5a",
    price: 33499,
    images: GooglePixel5aImage,
    description:
      "The Google Pixel 5a is a mid-range smartphone that excels in photography and performance. Its advanced camera system captures stunning photos in any lighting condition, while its powerful processor ensures smooth performance. With its long-lasting battery life and seamless software experience, it's perfect for everyday use.",
    rating: getRandomInt(3, 5),
    ram: "6GB",
    rom: "128GB",
    battery: "4680 mAh",
    camera: "Dual 12.2MP + 16MP rear cameras, 8MP front camera",
    processor: "Qualcomm Snapdragon 765G",
    display: "6.34 inches, OLED",
    audio: "Stereo speakers",
    companyName: "Google"
  },
  {
    id: "10",
    category: "Phones",
    name: "Apple iPhone 12",
    price: 59900,
    images: AppleiPhone12Image,
    description:
      "The Apple iPhone 12 combines style and performance in a sleek package. Its powerful processor, stunning display, and advanced camera system make it perfect for everyday use. With its long-lasting battery life and seamless software experience, it's the perfect choice for Apple enthusiasts.",
    rating: getRandomInt(3, 5),
    ram: "4GB",
    rom: "64GB, 128GB, 256GB",
    battery: "2815 mAh",
    camera: "Dual 12MP rear cameras, 12MP front camera",
    processor: "Apple A14 Bionic",
    display: "6.1 inches, Super Retina XDR OLED",
    audio: "Stereo speakers",
    companyName: "Apple"
  },
  {
    id: "11",
    category: "Phones",
    name: "Samsung Galaxy Z Flip 3",
    price: 74999,
    images: SamsungGalaxyZFlip3Image,
    description:
      "The Samsung Galaxy Z Flip 3 is a foldable smartphone that combines style and innovation. Its compact design and foldable display make it perfect for multitasking and entertainment. With its powerful processor and versatile camera system, it's the perfect choice for users who want to stand out from the crowd.",
    rating: getRandomInt(3, 5),
    ram: "8GB",
    rom: "128GB, 256GB",
    battery: "3300 mAh",
    camera: "Dual 12MP + 12MP rear cameras, 10MP front camera",
    processor: "Qualcomm Snapdragon 888",
    display: "6.7 inches, Foldable Dynamic AMOLED",
    audio: "Stereo speakers",
    companyName: "Samsung"
  },
  {
    id: "12",
    category: "Phones",
    name: "OnePlus 8T",
    price: 44999,
    images: OnePlus8TImage,
    description:
      "The OnePlus 8T is a flagship device that offers exceptional performance and value. Its powerful processor, stunning display, and versatile camera system make it perfect for multitasking and entertainment. With its fast charging capabilities and long-lasting battery life, it's the perfect companion for your busy lifestyle.",
    rating: getRandomInt(3, 5),
    ram: "8GB, 12GB",
    rom: "128GB, 256GB",
    battery: "4500 mAh",
    camera: "Quad 48MP + 16MP + 5MP + 2MP rear cameras, 16MP front camera",
    processor: "Qualcomm Snapdragon 865",
    display: "6.55 inches, Fluid AMOLED",
    audio: "Stereo speakers",
    companyName: "OnePlus"
  },
  {
    id: "13",
    category: "Phones",
    name: "Motorola Moto G Power",
    price: 14999,
    images: MotorolaMotoGPowerImage,
    description:
      "The Motorola Moto G Power is a budget-friendly smartphone with long-lasting battery life. Its powerful processor and vibrant display make it perfect for everyday use. With its versatile camera system and expandable storage, it offers excellent value for money.",
    rating: getRandomInt(3, 5),
    ram: "4GB",
    rom: "64GB, 128GB",
    battery: "5000 mAh",
    camera: "Triple 48MP + 2MP + 2MP rear cameras, 8MP front camera",
    processor: "Qualcomm Snapdragon 662",
    display: "6.6 inches, IPS LCD",
    audio: "Stereo speakers",
    companyName: "Motorola"
  },
  {
    id: "14",
    category: "Phones",
    name: "Realme 8 Pro",
    price: 20999,
    images: Realme8ProImage,
    description:
      "The Realme 8 Pro is a mid-range smartphone that offers excellent value for money. Its powerful processor, stunning display, and versatile camera system make it perfect for multitasking and entertainment. With its long-lasting battery life and fast charging capabilities, it's the perfect choice for users on the go.",
    rating: getRandomInt(3, 5),
    ram: "6GB, 8GB",
    rom: "128GB",
    battery: "4500 mAh",
    camera: "Quad 108MP + 8MP + 2MP + 2MP rear cameras, 16MP front camera",
    processor: "Qualcomm Snapdragon 720G",
    display: "6.4 inches, Super AMOLED",
    audio: "Stereo speakers",
    companyName: "Realme"
  },
  {
    id: "15",
    category: "Phones",
    name: "Xiaomi Poco X3 Pro",
    price: 18749,
    images: XiaomiPocoX3ProImage,
    description:
      "The Xiaomi Poco X3 Pro is a budget-friendly smartphone with premium features. Its powerful processor, vibrant display, and long-lasting battery life make it a great choice for everyday use. With its versatile camera system and fast charging capabilities, it offers excellent value for money.",
    rating: getRandomInt(3, 5),
    ram: "6GB, 8GB",
    rom: "128GB, 256GB",
    battery: "5160 mAh",
    camera: "Quad 48MP + 8MP + 2MP + 2MP rear cameras, 20MP front camera",
    processor: "Qualcomm Snapdragon 860",
    display: "6.67 inches, IPS LCD",
    audio: "Stereo speakers",
    companyName: "Xiaomi"
  },
   {
    id: "16",
    category: "Phones",
    name: "Google Pixel 4a",
    price: 26290,
    images: GooglePixel4aImage,
    description:
      "The Google Pixel 4a offers flagship-level camera performance at an affordable price. Its advanced camera system captures stunning photos in any lighting condition, while its powerful processor ensures smooth performance. With its compact design and long-lasting battery life, it's the perfect companion for your everyday adventures.",
    rating: getRandomInt(3, 5),
    ram: "6GB",
    rom: "128GB",
    battery: "3140 mAh",
    camera: "Single 12.2MP rear camera, 8MP front camera",
    processor: "Qualcomm Snapdragon 730G",
    display: "5.81 inches, OLED",
    audio: "Stereo speakers",
    companyName: "Google LLC"
  },
  {
    id: "17",
    category: "Phones",
    name: "Samsung Galaxy A32",
    price: 20999,
    images: SamsungGalaxyA32Image,
    description:
      "The Samsung Galaxy A32 is a budget-friendly smartphone packed with features. Its sleek design, vibrant display, and powerful processor make it a great choice for everyday use. With its versatile camera system and long-lasting battery life, it offers excellent value for money.",
    rating: getRandomInt(3, 5),
    ram: "4GB, 6GB",
    rom: "64GB, 128GB",
    battery: "5000 mAh",
    camera: "Quad 64MP + 8MP + 5MP + 5MP rear cameras, 20MP front camera",
    processor: "Mediatek Helio G80 / G85",
    display: "6.4 inches, Super AMOLED",
    audio: "Stereo speakers",
    companyName: "Samsung Electronics"
  },
  {
    id: "18",
    category: "Phones",
    name: "Apple iPhone SE (2022)",
    price: 32490,
    images: iPhoneSE2022Image,
    description:
      "The Apple iPhone SE (2022) offers the perfect blend of performance and affordability. Its compact design, powerful processor, and advanced camera system make it ideal for everyday use. With its long-lasting battery life and seamless software experience, it's the perfect choice for users who want the latest technology without breaking the bank.",
    rating: getRandomInt(3, 5),
    ram: "4GB",
    rom: "64GB, 128GB, 256GB",
    battery: "2050 mAh",
    camera: "Single 12MP rear camera, 7MP front camera",
    processor: "Apple A15 Bionic",
    display: "4.7 inches, Retina HD",
    audio: "Stereo speakers",
    companyName: "Apple Inc."
  },
  {
    id: "19",
    category: "Phones",
    name: "OnePlus 9",
    price: 54999,
    images: OnePlus9Image,
    description:
      "The OnePlus 9 is a flagship device that offers exceptional performance and value. Its powerful processor, stunning display, and versatile camera system make it perfect for multitasking and entertainment. With its fast charging capabilities and long-lasting battery life, it's the perfect companion for your busy lifestyle.",
    rating: getRandomInt(3, 5),
    ram: "8GB, 12GB",
    rom: "128GB, 256GB",
    battery: "4500 mAh",
    camera: "Triple 48MP + 50MP + 2MP rear cameras, 16MP front camera",
    processor: "Qualcomm Snapdragon 888",
    display: "6.55 inches, Fluid AMOLED",
    audio: "Stereo speakers",
    companyName: "OnePlus Technology (Shenzhen) Co., Ltd."
  },
  {
    id: "20",
    category: "Phones",
    name: "Xiaomi Mi 11 Lite",
    price: 22999,
    images: XiaomiMi11LiteImage,
    description:
      "The Xiaomi Mi 11 Lite is a stylish and affordable smartphone packed with features. Its sleek design, vibrant display, and powerful processor make it a great choice for multitasking and entertainment. With its versatile camera system and long-lasting battery life, it's the perfect companion for your everyday needs.",
    rating: getRandomInt(3, 5),
    ram: "6GB",
    rom: "64GB, 128GB",
    battery: "4250 mAh",
    camera: "Triple 64MP + 8MP + 5MP rear cameras, 16MP front camera",
    processor: "Qualcomm Snapdragon 732G",
    display: "6.55 inches, AMOLED",
    audio: "Stereo speakers",
    companyName: "Xiaomi Corporation"
  }
];


export default dummyData;
