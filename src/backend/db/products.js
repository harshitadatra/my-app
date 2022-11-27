import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    productName: "Modern Poster",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "3999",
    categoryName: "livingroom",
    brand: "liddy",
    imgSource:
      "https://www.customframestore.com/blog/wp-content/uploads/2021/10/gallery-wall-white-bedroom.png",
    inStock: true,
    ratings: 2,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    productName: "Bar Stool",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "2049",
    categoryName: "dining",
    brand: "liddy",
    imgSource:
      "https://thekitchenshowcase.com/wp-content/uploads/2020/08/pexels-pixabay-279648.jpg",
    inStock: true,
    ratings: 4,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "ArmChair",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "6299.50",
    brand: "marcos",
    categoryName: "bedroom",
    imgSource:
      "https://www.vassallogroupmalta.com/wp-content/uploads/2018/03/Vassallo-Furniture-1200x750.jpeg",
    inStock: true,
    ratings: 4.5,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Suede Armchair",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "7999.50",
    brand: "caressa",
    categoryName: "Footwear",
    imgSource:
      "https://www.noaandnani.co.uk/blog/wp-content/uploads/2020/06/photo-1520453714493-d85cdd7b033b-1080x743.jpeg",
    inStock: true,
    ratings: 3.5,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Leather Chair",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "10049",
    brand: "caressa",

    categoryName: "bedroom",
    imgSource:
      "https://www.roohanrealty.com/wp-content/uploads/2022/01/biophilic-design-valeria-boltneva-827518-1024x1536.jpg",
    inStock: true,
    ratings: 4.5,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Emperor Bed",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "11999",
    brand: "Ikea",
    categoryName: "bedroom",
    imgSource:
      "https://cdn1.npcdn.net/images/155246632727f24e0427fb201e5ee43d9d2f1169af.jpg",
    inStock: false,
    ratings: 5,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Accent Chair",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "12999",
    brand: "Macros",
    categoryName: "office",
    imgSource:
      "https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_1280.jpg",

    inStock: true,
    ratings: 4.5,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Shelf",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "15499",
    brand: "Ikea",
    categoryName: "livingroom",
    imgSource:
      "https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    inStock: true,
    ratings: 4,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Modern BookShelf",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "15999",
    brand: "Caressa",
    categoryName: "kids",
    imgSource:
      "https://uspropainters.com/wp-content/uploads/2021/10/How-Light-Affects-Paint.jpg",
    inStock: true,
    ratings: 4,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "High-Back Bench",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "19999",
    brand: "Ikea",
    categoryName: "office",
    imgSource:
      "https://images.squarespace-cdn.com/content/v1/5af031fe1137a69ce89114fd/1553181413052-OTPAICWJZZ3TSRWBL7RJ/where-to-buy-vintage-furniture-online.jpg?format=1500w",
    inStock: true,
    ratings: 4,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Wooden Desk",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "20049",
    brand: "Ikea",
    categoryName: "office",
    imgSource:
      "https://881275.smushcdn.com/1991859/wp-content/uploads/2019/09/Global-Construction-office-lighting-1200x480.jpg?lossy=1&strip=1&webp=1",
    inStock: true,
    ratings: 3,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    productName: "Dining Table",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "21499",
    brand: "Ikea",
    categoryName: "office",
    imgSource:
      "https://cdn.pixabay.com/photo/2017/07/08/23/48/dining-room-2485946_1280.jpg",
    inStock: true,
    ratings: 1,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Entertainment Center",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "29999",
    brand: "Caressa",
    categoryName: "livingroom",
    imgSource:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71+sISz6JiL._SX679_.jpg",
    inStock: true,
    ratings: 3.5,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Utopia Sofa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "39999",
    brand: "Liddy",
    categoryName: "livingroom",
    imgSource:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71DWianlXjL._SX679_.jpg",
    inStock: true,
    ratings: 2,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    productName: "Leather Sofa",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "49999",
    brand: "Caressa",
    categoryName: "office",
    imgSource:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTM3Mzc1MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    inStock: true,
    ratings: 3,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Albany Sectional",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "54999",
    brand: "Liddy",
    categoryName: "livingroom",
    imgSource:
      "https://shik-galichina.com/wp-content/uploads/2019/02/apartment-architecture-carpet-276583-e1550874741461.jpg",
    inStock: false,
    ratings: 3,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Simple Chair",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "54999",
    brand: "Liddy",
    categoryName: "livingroom",
    imgSource:
      "https://assets-global.website-files.com/61fca82f539c6b26ed9af94e/622839e68a16082dba83c92e_empty-chair-banner.png",
    inStock: true,
    ratings: 1,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    productName: "Vase Table",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "60499",
    brand: "Macros",
    categoryName: "office",
    imgSource:
      "https://www.supermiro.com/img/inspis/thumbs/sq_ins_1659_1625641397@2x.jpg",
    inStock: true,
    ratings: 4.5,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    productName: "Sofa Set",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "64999",
    brand: "Macros",
    categoryName: "livingroom",
    imgSource:
      "https://www.performance-painting.com/hs-fs/hubfs/apartment-clean-condominium-279719%20(1).jpg?width=900&name=apartment-clean-condominium-279719%20(1).jpg",
    inStock: true,
    ratings: 4.5,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Wooden Desk",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "3999",
    brand: "ikea",
    categoryName: "office",
    imgSource:
      "https://881275.smushcdn.com/1991859/wp-content/uploads/2019/09/Global-Construction-office-lighting-1200x480.jpg?lossy=1&strip=1&webp=1",
    inStock: true,
    ratings: 3,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Wooden Table",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "3999",
    brand: "Ikea",
    categoryName: "kitchen",
    imgSource:
      "https://images.pexels.com/photos/1139785/pexels-photo-1139785.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
    ratings: 3,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Wooden Bed",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "125049",
    brand: "Ikea",
    categoryName: "bedroom",
    imgSource:
      "https://rukminim1.flixcart.com/image/832/832/kt64fbk0/pillow/8/v/1/15-ultra-microfiber-2-white-605-ag-s-active-original-imag6krphecpfq3b.jpeg?q=70",
    inStock: true,
    ratings: 3,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productName: "Albany Table",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repudiandae?",
    price: "15499",
    brand: "Liddy",
    categoryName: "Footwear",
    imgSource:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91mSUxsPTlL._SY879_.jpg",
    inStock: true,
    ratings: 3.5,
    fastDelivery: true,
  },
];
