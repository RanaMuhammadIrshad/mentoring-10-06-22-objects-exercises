/*
 * 01
 * Create a function that adds an item to a given array using the spread operator
 *
 * E.g. in an array fruits = ['bananas', 'oranges', 'kiwis']
 * addItem('apples', fruits) the result should be ['bananas', 'oranges', 'kiwis', 'apples']
 */

console.log(`*********01*********`);
let fruits = ["bananas", "oranges", "kiwis"];
function addItem(item, arr) {
  const newArr = [...arr, item];
  return newArr;
}
console.log(addItem("apples", fruits));

/**
 * 02
 * Your app is accepting an object as the one named "recipe" just after the exercise description.
 * This object contains details for a cooking recipe.
 *
 * a) Create a function that accepts such an object and returns an array of the ingredients that object contains
 * b) Create another similar function that returns an array of the quantities of each ingredient
 * c) Create a function that accepts an array of ingredients and an array of quantities and prints a list in the form of:
 * ingredient - quantity
 *
 * N.B. data come from here: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52818
 */

const recipe = {
  idMeal: "52818",
  strMeal: "Chicken Fajita Mac and Cheese",
  strDrinkAlternate: null,
  strCategory: "Chicken",
  strArea: "American",
  strInstructions:
    "Fry your onion, peppers and garlic in olive oil until nicely translucent. Make a well in your veg and add your chicken. Add your seasoning and salt. Allow to colour slightly.\r\nAdd your cream, stock and macaroni.\r\nCook on low for 20 minutes. Add your cheeses, stir to combine.\r\nTop with roasted peppers and parsley.",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
  strTags: "Pasta,Cheasy,Meat",
  strYoutube: "https://www.youtube.com/watch?v=bwTSmLTZKNg",
  strIngredient1: "macaroni",
  strIngredient2: "chicken stock",
  strIngredient3: "heavy cream",
  strIngredient4: "fajita seasoning",
  strIngredient5: "salt",
  strIngredient6: "chicken breast",
  strIngredient7: "olive oil",
  strIngredient8: "onion",
  strIngredient9: "red pepper",
  strIngredient10: "garlic",
  strIngredient11: "cheddar cheese",
  strIngredient12: "parsley",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strMeasure1: "500g",
  strMeasure2: "2 cups",
  strMeasure3: "1/2 cup",
  strMeasure4: "1 packet",
  strMeasure5: "1 tsp",
  strMeasure6: "3 diced",
  strMeasure7: "2 tbsp",
  strMeasure8: "1 small finely diced",
  strMeasure9: "2 finely diced",
  strMeasure10: "2 cloves minced",
  strMeasure11: "1 cup",
  strMeasure12: "garnish chopped",
  strMeasure13: "",
  strMeasure14: "",
  strMeasure15: "",
  strMeasure16: "",
  strMeasure17: "",
  strMeasure18: "",
  strMeasure19: "",
  strMeasure20: "",
  strSource: "http://twistedfood.co.uk/chicken-fajita-mac-n-cheese/",
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
};
console.log(`*********02-A*********`);
// a) Create a function that accepts such an object and returns an array of the ingredients that object contains

function ingredientArr(object) {
  const ingredients = [];
  const localRecipe = Object.entries(object);

  for (let i = 0; i < localRecipe.length; i++) {
    // check if object property contains the 'strIngredient' string and also check if the value is not empty

    if (
      localRecipe[i][0].includes("strIngredient") &&
      localRecipe[i][1].length
    ) {
      ingredients.push(localRecipe[i][1]);
    }
  }

  return ingredients;
}

console.log(ingredientArr(recipe));

// b) Create another similar function that returns an array of the quantities of each ingredient
console.log(`*********02-B*********`);

function quantitiesArr(object) {
  const quantities = [];

  const localQuantities = Object.entries(object);

  for (let i = 0; i < localQuantities.length; i++) {
    if (
      localQuantities[i][0].includes("strMeasure") &&
      localQuantities[i][1].length
    ) {
      quantities.push(localQuantities[i][1]);
    }
  }
  return quantities;
}

console.log(quantitiesArr(recipe));

// c) Create a function that accepts an array of ingredients and an array of quantities and prints a list in the form of: ingredient - quantity

console.log(`*********02-C*********`);

function printRecipe(ingredients, quantities) {
  for (let i = 0; i < ingredients.length; i++) {
    console.log(`${ingredients[i]} - ${quantities[i]}`);
  }
}

console.log(printRecipe(ingredientArr(recipe), quantitiesArr(recipe)));

/*
 * 03
 * Create a function that adds any number of objects to another existing object.
 *
 * For example:
 * giving the following objects to that function should output this:
 * {
  username: 'Kane',
  email: 'test@email.com',
  age: 30,
  country: 'Germany',
  address: 'berlin',
  image: 'logo.png',
  animal: 'cat',
  food: 'chicken',
  music: 'rock'
}
 */

console.log(`*********03*********`);
const user = {
  username: "Kane",
  email: "test@email.com",
  age: 30,
};

const userAddress = {
  country: "Germany",
  address: "berlin",
  image: "logo.png",
};

const favorites = {
  animal: "cat",
  food: "chicken",
  music: "rock",
};

function addObjects(targetObject, ...sourceObjects) {
  return Object.assign(targetObject, ...sourceObjects);
}
console.log(addObjects(user, userAddress, favorites));

/**
 * 04
 * Create the wishlist functionality of an eshop that is selling vitamins. (Only the JS part)
 *
 * a) create a function that adds a product to a given user's item in the wishlist. If the product id exists for the given user, then remove the product id.
 * If the user doesn't exist in the wishlist array then add the user to the array
 *
 * b) create a function that lists product details for all products in the wishlist for the given userid
 */
// Data

const products = [
  {
    // 1
    id: 1,
    name: "D3 5000 iu",
    description: "Takes care of your immune system",
    price: 10,
    image: "http://example.com/1",
  },
  {
    // 2
    id: 2,
    name: "C 1000mg",
    description: "180 tabs of vitamin C with Bioflanoids",
    price: 3,
    image: "http://example.com/23",
  },
  {
    // 3
    id: 3,
    name: "B - Complex 50 mg",
    description: "Balanced mix of all basic B vitamins",
    price: 12,
    image: "http://example.com/44",
  },
  {
    // 4
    id: 4,
    name: "Cal-Mag",
    description: "Calcium and Magnesium in the proper analogy",
    price: 15,
    image: "http://example.com/123",
  },
  {
    // 5
    id: 5,
    name: "E 400iu",
    description: "Best for skin issues",
    price: 10,
    image: "http://example.com/456",
  },
];

const users = [
  {
    userId: 1,
    name: "alkis",
  },
  {
    userId: 2,
    name: "george",
  },
  {
    userId: 3,
    name: "jim",
  },
  {
    userId: 4,
    name: "Ruby",
  },
];

const wishlist = [
  {
    userid: 1,
    products: [1, 2, 3],
  },
  {
    userid: 2,
    products: [1, 3, 5],
  },
  {
    userid: 3,
    products: [2, 4],
  },
];

// a)
console.log(`*********04-A-Method-1*********`);

function addWishList(user, product) {
  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i].userid === user) {
      if (wishlist[i].products.includes(product)) {
        //remove it

        for (let j = 0; j < wishlist[i].products.length; j++) {
          if (wishlist[i].products[j] === product) {
            wishlist[i].products.splice(j, 1);
            return;
          }
        }
      } else {
        //add product
        wishlist[i].products.push(product);
        return;
      }
    }
  }

  //2. The user is not in wishlist array
  wishlist.push({
    userid: user,
    products: [product],
  });
}

addWishList(1, 4);
addWishList(1, 1);
addWishList(4, 1);
console.log("wishlist:", wishlist);

console.log(`*********04-B-Method-1*********`);

function listProducts(user) {
  let foundProducts = [];
  // 1. find products for the user

  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i].userid === user) {
      foundProducts = wishlist[i].products;
      break;
    }
  }
  // 2. print details for those products
  for (let i = 0; i < foundProducts.length; i++) {
    // If foundProducts id is equal to products id then print it

    for (let j = 0; j < products.length; j++) {
      if (products[j].id === foundProducts[i]) {
        console.log(products[j]);
      }
    }
  }
}

listProducts(3);

console.log(`*********04-A-Method-2*********`);
function updateWishlist(userid, productid) {
  // 1. find the index for the user in wishlist
  let wishIdx = -1;

  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i].userid === userid) {
      wishIdx = i;
      break; // stop the loop since index has been found
    }
  }

  if (wishIdx === -1) {
    // user not found in the wishlist
    wishlist.push({ userid }); // add user to wishlist
    wishlist[wishlist.length - 1].products = []; // create an empty array for this user
    wishlist[wishlist.length - 1].products.push(productid); // add product to the newly inserted user
    return; // nothing else to do in that case
  }

  // check if product is in the nested array for that user
  for (let i = 0; i < wishlist[wishIdx].products.length; i++) {
    if (wishlist[wishIdx].products[i] === productid) {
      // product found so needs to be deleted
      wishlist[wishIdx].products.splice(i, 1);
      return; // product found and deleted
    }
  }

  // since the function reached this place, then the productid isn't in the user's array so we need to add it
  wishlist[wishIdx].products.push(productid);
}

updateWishlist(1, 3); // delete productid 3 for user 1
console.log(wishlist);
updateWishlist(4, 1);
console.log(wishlist); // add a new usercd
updateWishlist(4, 2);
console.log(wishlist); // add a new product

// b)
console.log(`*********04-B-Method-2*********`);
function printWishlist(user) {
  let wishIdx = -1;

  // find the index in wishlist for given user
  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i].userid === user) {
      wishIdx = i;
      break;
    }
  }

  // if the user is found print product for each item in the nested products array inside wishlist
  if (wishIdx > -1) {
    console.log(
      "User with id",
      user,
      " has the following products wishlisted:"
    );
    for (let i = 0; i < wishlist[wishIdx].products.length; i++) {
      const product = getProduct(wishlist[wishIdx].products[i]);
      console.log("Name: ", product.name);
      console.log("Decription: ", product.description);
      console.log("Price: ", product.price);
      console.log("----");
    }

    return;
  }
}

/**
 *
 * @param {*} productId
 * @returns an object from products array
 */
function getProduct(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      return products[i];
    }
  }
}

printWishlist(4);
