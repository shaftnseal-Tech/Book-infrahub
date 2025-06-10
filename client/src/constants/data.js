//navbar iamges
import LaptopsImage from './assets/Laptops.svg';
import DesktopImage from './assets/Desktops.svg';
import WorkstationsImage from './assets/Workstations.svg';
import AccessoriesImage from './assets/Accessories.svg';
import ComponentsImage from './assets/Components.svg';
import StorageImage from './assets/Storage.svg';
import GamingImage from './assets/Gaming.svg';

// deals of the month images
import deal1 from './assets/Dealsofthemonth/deal1.png';
import deal2 from './assets/Dealsofthemonth/deal2.png';
import deal3 from './assets/Dealsofthemonth/deal3.png';
import deal4 from './assets/Dealsofthemonth/deal4.png';
import deal5 from './assets/Dealsofthemonth/deal5.png';
import deal6 from './assets/Dealsofthemonth/deal6.png';
import deal7 from './assets/Dealsofthemonth/deal7.png';

//HomeIntroAdv images
import adv1 from './assets/HomeIntroAdv/adv1.jpg';
import adv2 from './assets/HomeIntroAdv/adv2.png';

// home support icon 
import Gadjets from './assets/homesupporticon/Gadgets.png';
import Consumption from './assets/homesupporticon/Consumption.png';
import OnlineSupport from './assets/homesupporticon/OnlineSupport.png';
import GraduationCap from './assets/homesupporticon/GraduationCap.png';

// banner carousel images
import banner1 from './assets/Bannerscar/Zuvve-car1.png';
import banner2 from './assets/Bannerscar/Zuvve-car2.png';
import banner3 from './assets/Bannerscar/Zuvve-car3.png';

// import OopsImage from './assets/Oops_404_error.png';

// Deals of the month data
export const deals = [
    { id: 1, name: 'Deal 1', description: 'DELL Ultrasharp 27 4K Monitor (U2723QE), VESA display HDR 400, 27” 4K UHD IPS, 60HZ, HDMI Display Port USB-C, Anti-glare Adjustable stand, Factory-calibrated color accuracy', price: ' ₹ 80,000 - 90,000', image: deal1, ratingCount: 120 },
    { id: 2, name: 'Deal 2', description: 'HP Z4 G4 Workstation  intel Xeon W -2133, RAM 16GB DDR4, Windows 11 pro', price: ' ₹ 80,000 - 90,000', image: deal2, ratingCount: 87 },
    { id: 3, name: 'Deal 3', description: 'HP 15 s-eq2144AU Laptop, AMD Ryzen 5500U, 8GB DDR4, 15.6” Full HD', price: ' ₹ 80,000 - 90,000', image: deal3, ratingCount: 60 },
    { id: 4, name: 'Deal 4', description: 'DELL 3080 Tower Desktop, intel core i5 10th Gen, 8 GB DDR4, 512 GB SSD', price: ' ₹ 80,000 - 90,000', image: deal4, ratingCount: 50 },
    { id: 5, name: 'Deal 5', description: 'Lenovo Legion K5 00RGB Gaming Keyboard, 16.8M RGB colors', price: ' ₹ 80,000 - 90,000', image: deal5, ratingCount: 93 },
    { id: 6, name: 'Deal 6', description: 'WD My Passport 1TB Portable SSD, USB-C, Upto 1050 MB/s, Windows & MacOS', price: ' ₹ 80,000 - 90,000', image: deal6, ratingCount: 80 },
    { id: 7, name: 'Deal 7', description: 'HP Z4 G4 Workstation  intel Xeon W -2133, RAM 16GB DDR4, Windows 11 pro', price: ' ₹ 80,000 - 90,000', image: deal7, ratingCount: 100 }
];

//product data
export const product = [
    { id: 1, image: deal1, rating: '4.7 Star Rating', user_feedback: 211, description: 'Asus ROG Zephyrus G16 - Ultimate Gaming Beast, Asus ROG Zephyrus G16, powered by an Intel Core i9 processor, RTX 4060 GPU, and a stunning 16” QHD+ display.', Sku: 'A264671', Brand: 'Dell', Availaility: 'In Stock', Category: 'Electronics device',   Mode: ['Online', 'Offline'],sale_price: ' ₹ 1,49,999', actual_price: '2,00,000', discount: '21% OFF' },
]

export const warentyinfo = [
    {
        id: 1,
        warenty: '1 Year Manufacturer Warranty',
        colors: ['#808080', '#D3D3D3'],
        displaySizes: [
            '17 inch',
            '18.5 inch',
            '19 inch',
            '20 inch',
            '22 inch',
            '32 inch'
        ]
    }
];

export const navData = [
    { url: LaptopsImage, text: 'Laptops' },
    { url: DesktopImage, text: 'Desktops' },
    { url: WorkstationsImage, text: 'Workstations' },
    { url: AccessoriesImage, text: 'Accessories' },
    { url: ComponentsImage, text: 'Components' },
    { url: StorageImage, text: 'Storage' },
    { url: GamingImage, text: 'Gaming' },
];

// offers
export const offers = [
    {
        id: 1,
        offer: "EMI starts at ₹12,499/month",
        link: "https://example.com/emi-offer"
    },
    {
        id: 2,
        offer: "10% Instant Discount on HDFC Bank Credit/Debit Cards ",
        link: "https://example.com/hdfc-discount"
    },
    {
        id: 3,
        offer: "Exchange your old laptop and get up to ₹20,000 off on your purchase",
        link: "https://example.com/laptop-exchange"
    },
    {
        id: 4,
        offer: "Reward Yourself with 5% Unlimited Cashback on the Zuvve Axis Credit Card -",
        link: "https://example.com/zuvve-cashback"
    },
    {
        id: 5,
        offer: "Enjoy 5% Unlimited Cashback Every Time You Spend with Zuvve Axis Credit Card -",
        link: "https://example.com/zuvve-cashback-everytime"
    }
];

// export const homesupport=[
//     { icon: Gadjets, heading: '1000+', text: 'Unique electronic items' },
//     { icon: Consumption, heading: '2400+', text: ' Buyers Serving satisfied customers' },
//     { icon: OnlineSupport, heading: '24/7', text: ' Support Quality customer service' },
//     { icon: GraduationCap, heading: 'Since 2024', text: ' Excellence platform ' }
// ]

export const homesupport = [
    { icon: <img src={Gadjets} alt="Gadgets" style={{ width: "50px", height: "50px" }} />, heading: '1000+', text: 'Unique electronic items' },
    { icon: <img src={Consumption} alt="Gadgets" style={{ width: "50px", height: "50px" }} />, heading: '2400+', text: '  Serving satisfied customers' },
    { icon: <img src={OnlineSupport} alt="Gadgets" style={{ width: "50px", height: "50px" }} />, heading: '24/7', text: '  Quality customer service' },
    { icon: <img src={GraduationCap} alt="Gadgets" style={{ width: "50px", height: "50px" }} />, heading: 'Since 2024', text: ' Excellence platform ' }
]

export const bannerData = [
    { id: 1, url: banner1 },
    { id: 2, url: banner2 },
    { id: 3, url: banner3 },
]

export const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
]

export const HomeIntroAdvDATA = [
    { id: 1, name: 'Apple MacBook Air M2 chip', description: 'Fanless Silent Design, macOS ventura, Magsafe Charging 8 GB RAM Unified Memory, 256 GB SSD, 13.6” Liquid Retina', image: adv1 },
    { id: 2, name: 'HP 15 s-eq2144AU Laptop AMD Ryzen', description: 'AMD Ryzen 5500U, 8GB DDR4, 15.6” Full HD, Lightweight & Portable Design Integrated Alexa Support', image: adv2 },
];

// Cart data
export const cartData = [
    {
        id: 1,
        productName: 'Asus ROG Zephyrus G16',
        price: 149999,
        quantity: 1,
        image: deal1,
        description: 'Asus ROG Zephyrus G16 - Ultimate Gaming Beast, powered by Intel Core i9 processor and RTX 4060 GPU.'
    },
    {
        id: 2,
        productName: 'DELL Ultrasharp 27 4K Monitor',
        price: 85000,
        quantity: 1,
        image: deal2,
        description: 'DELL Ultrasharp 27 4K Monitor (U2723QE), VESA display HDR 400, 27” 4K UHD IPS.'
    },
    {
        id: 3,
        productName: 'HP Z4 G4 Workstation',
        price: 75000,
        quantity: 1,
        image: deal3,
        description: 'HP Z4 G4 Workstation with Intel Xeon W-2133, RAM 16GB DDR4, Windows 11 pro.'
    },
    // Add more items as needed
];

// delivery, highlisghts,description  

export const delivery_data = [

    {
        "id": 1,
        "date": "10 Jan, Friday",
        "details": "2 - 4 days shipping"
    },

];

export const fast_delivery_data = [
    {
        "id": 1,
        "date": "9 Jan, Friday",
        "details": "Fast delivery"
    },
];

export const data_specifications = [
    {
        id: 1,
        Processor: '16GB DDR5',
        GPU: 'Intel Core i9',
        RAM: 'NVIDIA GeForce RTX 4060 (6GB VRAM)',   
        Storage: '1TB PCIe 4 SSD',
        Display: '16" QHD+ (2560 x 1600), 165Hz, 3ms',
        Battery: '76Wh battery with fast charging support',
        Weight: '1.9 Kg',
    },
];

export const highlightsData = [
    {
        "id": 1,
        "highlights": ["Ultra-Slim 16-inch gaming laptop", "Supports ray tracing for realistic graphics"]
    },
    {
        "id": 2,
        "highlights": ["165Hz display for smooth visuals", "Backlit RGB keyboard for an immersive experience"]
    }
];

export const descriptionData = [
    {
        id: 1,
        description:
            "Take gaming and productivity to the next level with the Asus ROG Zephyrus G16, powered by an Intel Core i9 processor, RTX 4060 GPU, and a stunning 16” QHD+ display. Designed for performance, portability, and immersive experiences. The Asus ROG Zephyrus G16 is built to redefine the gaming experience. Equipped with advanced cooling technologies, a robust aluminum chassis, and the latest graphics card, it ensures smooth gameplay for AAA titles. Ideal for gamers and content creators alike.",
    },
];

export const user_review_data =
    [
        {
            "id": 1,
            "name": "John Doe",
            "profilePic": "https://images.app.goo.gl/TTM7u3VjNFTkK6J7A",
            "reviewDate": "2025-01-15T10:30:00",
            "rating": 5,
            "review": "Amazing product! Highly recommend it to everyone.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "profilePic": "https://via.placeholder.com/50",
            "reviewDate": "2025-01-14",
            "rating": 4,
            "review": "Great quality, but the delivery was slightly delayed.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            "id": 3,
            "name": "Alex Johnson",
            "profilePic": "https://via.placeholder.com/50",
            "reviewDate": "2025-01-13T08:20:00",
            "rating": 3,
            "review": "Product is decent but doesn't fully meet my expectations.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        }
    ];

export const qsn_ans_data =
    [
        {
            "id": 1,
            "question": "Does it have RGB lighting?",
            "answer": "Yes, the keyboard supports customizable RGB lighting.",
            "user": {
                "name": "John Doe",
                "profile": "https://example.com/john-profile.jpg"
            },
            "likes": 10,
            "dislikes": 2
        },
        {
            "id": 2,
            "question": "Does it have RGB lighting?",
            "answer": "Yes, the keyboard supports customizable RGB lighting.",
            "user": {
                "name": "Jane Smith",
                "profile": "https://example.com/jane-profile.jpg"
            },
            "likes": 8,
            "dislikes": 1
        }
        ,
        {
            "id": 3,
            "question": "Does it have RGB lighting?",
            "answer": "Yes, the keyboard supports customizable RGB lighting.",
            "user": {
                "name": "RK Somya",
                "profile": "https://example.com/jane-profile.jpg"
            },
            "likes": 4,
            "dislikes": 1
        }
    ];

export const image_product_page =
    [
        {
            "extraImages": [
                "./assets/Dealsofthemonth/deal1.png",
                "./assets/Dealsofthemonth/deal2.png",
                "./assets/Dealsofthemonth/deal3.png",
            ]
        }
    ];



export const wishlistData = [
    {
      id: 1,
      productName: "DELL 3080 Tower Desktop, intel core i5 10th Gen, 8 GB DDR4, 512 GB SSD",
      price: 149990,
      originalPrice: 200000,
      stockStatus: "IN STOCK",
      image: deal4, // Example path
    },
    {
      id: 2,
      productName: "DELL Ultrasharp 27 4K Monitor (U2723QE), VESA display HDR 400",
      price: 159990,
      originalPrice: 210000,
      stockStatus: "IN STOCK",
      image: deal1, // Example path
    },
    {
      id: 3,
      productName: "HP Z4 G4 Workstation intel Xeon W -2133, RAM 16GB DDR4, Windows 11 pro",
      price: 199990,
      originalPrice: 250000,
      stockStatus: "IN STOCK",
      image: deal2, // Example path
    },
    {
        id: 4,
        productName: "Lenovo Legion K5 00RGB Gaming Keyboard, 16.8M RGB colors",
        price: 199990,
        originalPrice: 250000,
        stockStatus: "OUT OF STOCK",
        image: deal5, // Example path
      },
      {
        id: 5,
        productName: "WD My Passport 1TB Portable SSD, Upto 1050 MB/s, Windows & MacOS",
        price: 199990,
        originalPrice: 250000,
        stockStatus: "OUT OF STOCK",
        image: deal6, // Example path
      },
  ];
  

  export const CategoryData = {
    products: [
      {
        id: 1,
        name: "DELL 3080",
        image: deal1,
        price: "₹80,000 - ₹90,000",
        description: "DELL 3080 Tower Desktop, intel core i5 10th Gen, 8 GB DDR4, 512 GB SSD",
      },
      {
        id: 2,
        name: "HP Z4 G4 Workstation",
        image: deal4,
        price: "₹80,000 - ₹90,000",
        description: "HP Z4 G4 Workstation intel Xeon W -2133, RAM 16GB DDR4, Windows 11 pro",
      },
      {
        id: 3,
        name: "WD My Passport",
        image: deal6,
        price: "₹1,20,000 - ₹1,30,000",
        description: "WD My Passport 1TB Portable SSD, Upto 1050 MB/s, Windows & MacOS",
      },
    ],
  };
  