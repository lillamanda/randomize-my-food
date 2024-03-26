/* const proteinsArray =[
    {
        name: "Chicken fillet",
        cookingMethod: ["pan-fried", "woked", "baked", "air-fried"], //have this in separated items for ease of ID and images?
        meal: ["dinner", "lunch"],
        ingredients: ["chicken fillet"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },
    {
        name: "Pork fillet",
        cookingMethod: ["pan-fried", "woked", "baked", "air-fried"], //have this in separated items for ease of ID and images?
        meal: ["dinner", "lunch"],
        ingredients: ["pork fillet"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },
    {
        name: "Salmon",
        cookingMethod: ["pan-fried", "woked", "baked", "air-fried"], //have this in separated items for ease of ID and images?
        meal: ["dinner", "lunch"],
        ingredients: ["salmon"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },
    {
        name: "Cod",
        cookingMethod: ["pan-fried", "woked", "baked", "air-fried"], //have this in separated items for ease of ID and images?
        meal: ["dinner", "lunch"],
        ingredients: ["cod"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },
];*/

const proteinsArray =[
    {
        name: "Chicken fillet",
        meal: ["dinner", "lunch"],
        ingredients: ["chicken fillet"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },
    {
        name: "Pork fillet",
        meal: ["dinner", "lunch"],
        ingredients: ["pork fillet"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },
    {
        name: "Salmon",
        meal: ["dinner", "lunch"],
        ingredients: ["salmon"],
        link: "n/a",
        image: "/assets/food/salmon2.png",
        // id: "protein1"
    },
    {
        name: "Cod",
        meal: ["dinner", "lunch"],
        ingredients: ["cod"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },
    {
        name: "Trout",
        meal: ["dinner", "lunch"],
        ingredients: ["trout"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },
    {
        name: "Chicken thighs",
        meal: ["dinner", "lunch"],
        ingredients: ["Chicken thighs"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },
    {
        name: "Chicken thighs",
        meal: ["dinner", "lunch"],
        ingredients: ["Chicken thighs"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },
    {
        name: "Porkchops",
        meal: ["dinner", "lunch"],
        ingredients: ["porkchops"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },
    {
        name: "Air-fried whole chicken",
        meal: ["dinner", "lunch"],
        ingredients: ["Chicken"],
        link: "n/a",
        image: null,
        // id: "protein1"
    },

];

const vegetablesArray =[
    {
        name: "Air-fried broccoli / cauliflower",
        meal: ["dinner", "lunch"],
        ingredients: ["vegetables"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Turnip mash",
        meal: ["dinner"],
        ingredients: ["turnip", "milk", "butter", "flour"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Carrot mash",
        meal: ["dinner"],
        ingredients: ["turnip", "milk", "butter", "flour"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Woked vegetables",
        meal: ["dinner", "lunch"],
        ingredients: ["vegetables", "oil", "soy sauce"],
        link: "n/a",
        image: "/assets/food/wokveg.png",
        // id: ""
    },
    {
        name: "Baked vegetables",
        meal: ["dinner", "lunch"],
        ingredients: ["vegetables"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Butter-steamed vegetables",
        meal: ["dinner", "lunch"],
        ingredients: ["vegetables"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Stewed carrots and cauliflower",
        meal: ["dinner", "lunch"],
        ingredients: ["vegetables"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Boiled vegetables",
        meal: ["dinner", "lunch"],
        ingredients: ["vegetables"],
        link: "n/a",
        image: null,
        // id: ""
    },

]; 


const carbsArray = [
    {
        name: "Bulgur",
        cookingMethod: ["boiled", "fried"], 
        meal: ["dinner", "lunch"],
        ingredients: ["bulgur"],
        link: "n/a",
        image: "/assets/food/bulgur.png",
        // id: ""
    },
    {
        name: "Pasta",
        cookingMethod: ["boiled", "fried"], 
        meal: ["dinner", "lunch"],
        ingredients: ["pasta"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Rice",
        cookingMethod: ["boiled", "fried"], 
        meal: ["dinner", "lunch"],
        ingredients: ["rice"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Potatoes",
        cookingMethod: ["boiled", "fried", "baked"], 
        meal: ["dinner", "lunch"],
        ingredients: ["potatoes"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "French fries",
        cookingMethod: ["baked", "fried", "air-fried"], 
        meal: ["dinner", "lunch"],
        ingredients: ["french fries"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Sweet potatoes",
        cookingMethod: ["boiled", "fried", "baked"], 
        meal: ["dinner", "lunch"],
        ingredients: ["sweet potatoes"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Mashed potatoes",
        cookingMethod: ["boiled"], 
        meal: ["dinner", "lunch"],
        ingredients: ["potatoes"],
        link: "n/a",
        image: null,
        // id: ""
    },
]


const saucesArray =[
    {
        name: "Bechamel sauce",
        meal: ["dinner"],
        ingredients: ["milk", "flour", "butter"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Brown sauce",
        meal: ["dinner"],
        ingredients: ["stock", "flour", "butter"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Thai Red Curry sauce",
        meal: ["dinner"],
        ingredients: ["stock", "coconut milk", "peanut butter", "red curry paste", "lemon juice", "sugar", "fish sauce"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Tomato sauce",
        meal: ["dinner"],
        ingredients: ["tomatoes"],
        link: "n/a",
        image: null,
        // id: ""
    },
    {
        name: "Satay sauce",
        meal: ["dinner"],
        ingredients: ["tomatoes"],
        link: "n/a",
        image: null,
        // id: ""
    },
    
]


export {proteinsArray, vegetablesArray, carbsArray, saucesArray}