import React from "react";
import { ItemListing } from "../../Components/ItemListingComponent"

const data = [
    {
        productId: "1",
        productImage: "NA",
        productTitle: "Sock",
        productSubCategory: [
            {name: "Ankle"}, 
            {name: "Stockings"},
            {name: "Canvas Socks"},
            {name: "Sock Category 4"},
            {name: "Type of Sock Category 5"},
        ],
        productBody: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        lastUpdateAt: "June 2010",
        lastUpdateBy: "Aryan Jain",
        currentNumber: "234"
    },
    {
        productId: "2",
        productImage: "NA",
        productTitle: "T-shirt",
        productSubCategory: [],
        productBody: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        lastUpdateAt: "June 2010",
        lastUpdateBy: "Siddarth Jain",
        currentNumber: "1324"
    },
    {
        productId: "3",
        productImage: "NA",
        productTitle: "Bandana",
        productSubCategory: [],
        productBody: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        lastUpdateAt: "June 2010",
        lastUpdateBy: "Prateek Sharma",
        currentNumber: "2345"
    },
    {
        productId: "4",
        productImage: "NA",
        productTitle: "Shoes",
        productSubCategory: [],
        productBody: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        lastUpdateAt: "June 2010",
        lastUpdateBy: "Alpa Jain",
        currentNumber: "545"
    },
    {
        productId: "5",
        productImage: "NA",
        productTitle: "Streching Band",
        productSubCategory: [],
        productBody: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        lastUpdateAt: "June 2010",
        lastUpdateBy: "XYZ",
        currentNumber: "12343"
    },
    {
        productId: "6",
        productImage: "NA",
        productTitle: "Vest",
        productSubCategory: [],
        productBody: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        lastUpdateAt: "June 2010",
        lastUpdateBy: "",
        currentNumber: "3454"
    },
    {
        productId: "3",
        productImage: "NA",
        productTitle: "Bandana",
        productSubCategory: [],
        productBody: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        lastUpdateAt: "June 2010",
        lastUpdateBy: "",
        currentNumber: "2345"
    },
    {
        productId: "4",
        productImage: "NA",
        productTitle: "Shoes",
        productSubCategory: [],
        productBody: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        lastUpdateAt: "June 2010",
        lastUpdateBy: "",
        currentNumber: "545"
    },
    {
        productId: "5",
        productImage: "NA",
        productTitle: "Streching Band",
        productSubCategory: [],
        productBody: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        lastUpdateAt: "June 2010",
        lastUpdateBy: "",
        currentNumber: "12343"
    },
    {
        productId: "6",
        productImage: "NA",
        productTitle: "Vest",
        productSubCategory: [],
        productBody: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        lastUpdateAt: "June 2010",
        lastUpdateBy: "",
        currentNumber: "3454"
    },
]

export const ItemListingContainer = () => {
    return <ItemListing data={data} />
}


// const x = [
//     {
//         productId: "1",
//         productImage: "NA",
//         productTitle: "Sock",
//         productSubCategory: [
//             {
//                 id: "ankleSock1",
//                 name: "Ankle",
//                 sex: "",    // M, F, "" = Both/Unisex Product
//                 validColors: ["#fff", "#2fs", "#6fg", "#", ""],
//                 currentCount: 1120
//             }, 
//             {
//                 id: "stockingSock1",
//                 name: "Stockings",
//                 sex: "",    // M, F, 
//                 validColors: ["#fff", "#2fs", "#6fg", "#", ""],
//                 currentCount: 76
//             },
//             {
//                 id: "canvasSock1",
//                 name: "Canvas Socks",
//                 sex: "",    // M, F, 
//                 validColors: ["#fff", "#2fs", "#6fg", "#", ""],
//                 currentCount: 1123
//             },
//             {
//                 id: "Sock4",
//                 name: "Category 4",
//                 sex: "",    // M, F, 
//                 validColors: ["#fff", "#2fs", "#6fg", "#", ""],
//                 currentCount: 34
//             },
//             {
//                 id: "sick5",
//                 name: "Type of Sock Category 5",
//                 sex: "",    // M, F, 
//                 validColors: ["#fff", "#2fs", "#6fg", "#", ""],
//                 currentCount: 65
//             },
//         ],
//         createdAt: "",
//         createdBy: "",
//         lastUpdateAt: "June 2010",
//         lastUpdateBy: "",
//     },
// ]



































