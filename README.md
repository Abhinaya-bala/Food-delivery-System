
##Introduction:

This "Online food ordering" is a process of food delivery to people need order food from local restaurant or takeout from a local restaurant or food cooperative through a web page or app.
 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Used Library:
 1.BootStrap -This appication was designed used bootstrap framework 
Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS.

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
2. React -This Apllication was made out of React A JavaScript library for building user interfaces

Install react using 

## npm create-react-app my-app

3.Redux -This Apllication was made out of Redux a predictable State Container for JS Apps

Install redux using 

## npm install redux and ##  npm install react-redux



### `npm Start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Used Package

[
  {
    "name": "The Marina",
    "id": 3,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 600,
    "minOrder": 50,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": true
    },
    "rating": 3.8,
    "votes": 300,
    "reviews": 445,
    "src": "https://www.chennaifoodguide.in/images/gallery/photos/297.jpg",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Southern Spice",
    "id": 4,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 600,
    "minOrder": 50,
    "deliveryTime": 30,
    "payment_methods": {
      "card": false,
      "cash": true
    },
    "rating": 2.3,
    "votes": 300,
    "reviews": 445,
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpsgKWkqWUcckd8c7pz_ViYENX0rJLXGz_N5ux0yOEnDNa0R1l&usqp=CAU",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "ITC Grand Chola",
    "id": 5,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 5000,
    "minOrder": 2000,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": false
    },
    "rating": 4.9,
    "votes": 3000,
    "reviews": 2445,
    "src": "https://r1imghtlak.mmtcdn.com/14853ec0a99311e7a4e10a209fbd0127.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Kovai Alangar vilas",
    "id": 2,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 600,
    "minOrder": 50,
    "deliveryTime": 30,
    "payment_methods": {
      "card": false,
      "cash": true
    },
    "rating": 4.6,
    "votes": 300,
    "reviews": 445,
    "src": "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "The Raintree",
    "id": 6,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 3000,
    "minOrder": 2000,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": true
    },
    "rating": 3.7,
    "votes": 30650,
    "reviews": 12445,
    "src": "https://www.gannett-cdn.com/presto/2018/08/30/PKNS/ef37b7dc-aee5-4f6d-b771-4520efcf41ac-Sahara_09.jpg?width=540&height=&fit=bounds&auto=webp",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Karaikudi Chettinadu",
    "id": 7,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 1500,
    "minOrder": 500,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": true
    },
    "rating": 4.8,
    "votes": 30650,
    "reviews": 12445,
    "src": "https://www.thehindu.com/life-and-style/food/jp5jb3/article27060927.ece/ALTERNATES/LANDSCAPE_1200/NV-Horizontal-Thali-Shot",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "The Red Box",
    "id": 8,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 500,
    "minOrder": 200,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": true
    },
    "rating": 3.8,
    "votes": 506,
    "reviews": 645,
    "src": "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/cz5eqfncnraapuvijryb",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Hotel Crescent",
    "id": 9,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 1000,
    "minOrder": 200,
    "deliveryTime": 2.4,
    "payment_methods": {
      "card": true,
      "cash": false
    },
    "rating": 2.5,
    "votes": 850,
    "reviews": 72545,
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwnz3tmUlZNkyfXSb3Zp1MXMBbvo6QWb3cjbNe0QI-_hfCWaWX&usqp=CAU",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Food @ Finger",
    "id": 10,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 700,
    "minOrder": 100,
    "deliveryTime": 30,
    "payment_methods": {
      "card": false,
      "cash": true
    },
    "rating": 4.5,
    "votes": 65450,
    "reviews": 86445,
    "src": "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2019/10/07135449/sofitel-dubai-palm_HONG-LOONG-585x390.jpg",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Kobe Sizzlers",
    "id": 11,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 1200,
    "minOrder": 500,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": false
    },
    "rating": 4.7,
    "votes": 70650,
    "reviews": 42445,
    "src": "https://indiarestaurant.com/newsite/wp-content/uploads/2019/04/170823_India_Restaurant0111-Edit-1024x683.jpg?189db0&189db0",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Parambriym",
    "id": 12,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 800,
    "minOrder": 200,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": true
    },
    "rating": 2.7,
    "votes": 650,
    "reviews": 3645,
    "src": "https://www.gannett-cdn.com/presto/2018/08/30/PKNS/ef37b7dc-aee5-4f6d-b771-4520efcf41ac-Sahara_09.jpg?width=540&height=&fit=bounds&auto=webp",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Wok Monk",
    "id": 13,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 3000,
    "minOrder": 2000,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": false
    },
    "rating": 1.5,
    "votes": 450,
    "reviews": 200,
    "src": "https://b.zmtcdn.com/data/reviews_photos/280/ea04387ceb1c81d114f1e901bd45d280_1527338372.jpg",
    "menu": [
      {
        "id": "menu_1",
        "name": "chinese noodles",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "High on Grills",
    "id": 14,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 2000,
    "minOrder": 500,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": false
    },
    "rating": 3.5,
    "votes": 90650,
    "reviews": 112445,
    "src": "https://placepull.com/wp-content/uploads/2020/01/restaurant-busy-885-600x345.jpg",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Frozen Bottle",
    "id": 15,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 350,
    "minOrder": 100,
    "deliveryTime": 30,
    "payment_methods": {
      "card": false,
      "cash": true
    },
    "rating": 4.7,
    "votes": 30650,
    "reviews": 12445,
    "src": "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/rc370aeebn5pj9rcptqj",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Kebabery",
    "id": 16,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 600,
    "minOrder": 100,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": true
    },
    "rating": 2.8,
    "votes": 650,
    "reviews": 835,
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVzavKX6ARKIWmy1HJbsD74yp-TkX3MoZJTrCzCR3JReN8xUg6&usqp=CAU",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Loretta's",
    "id": 17,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 300,
    "minOrder": 50,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": true
    },
    "rating": 4.9,
    "votes": 90650,
    "reviews": 17445,
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX8ar-gewzBPeJooH4IlhkeVIMNX8c5lCUEeSxrqDpYsp_3mbR&usqp=CAU",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "The Baker's Nook",
    "id": 18,
    "cuisine": [
      "Deserts"
    ],
    "costForTwo": 50,
    "minOrder": 50,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": true
    },
    "rating": 4.2,
    "votes": 5650,
    "reviews": 8249,
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-aUVDN6jZNnwpl-TzpCXL0BqHWmd3kaX97-LdFtVbKHlLCFFJ&usqp=CAU",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Chidambaram New Moorthy Cafe",
    "id": 19,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 500,
    "minOrder": 150,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": true
    },
    "rating": 4.9,
    "votes": 90650,
    "reviews": 92445,
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbOYb5UHDcgZ53JhIOMImo8hqyS3Qs1Rhnc9CP3ndXYNMERxAk&usqp=CAU",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "Little Hut",
    "id": 20,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 30,
    "minOrder": 200,
    "deliveryTime": 30,
    "payment_methods": {
      "card": false,
      "cash": true
    },
    "rating": 1.6,
    "votes": 650,
    "reviews": 445,
    "src": "https://b.zmtcdn.com/data/pictures/9/18669029/299b4a7d3aec912534398222f8a4fbe2.jpg",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  },
  {
    "name": "URU Brew Park",
    "id": 1,
    "cuisine": [
      "Continental",
      "Asian",
      "Beverages",
      "Deserts"
    ],
    "costForTwo": 600,
    "minOrder": 50,
    "deliveryTime": 30,
    "payment_methods": {
      "card": true,
      "cash": false
    },
    "rating": 4.3,
    "votes": 300,
    "reviews": 445,
    "src": "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb",
    "menu": [
      {
        "id": "menu_1",
        "name": "Briyani",
        "price": 200
      },
      {
        "id": "menu_2",
        "name": "Egg fried rice",
        "price": 215
      },
      {
        "id": "menu_3",
        "name": "chicken Noodles",
        "price": 120
      },
      {
        "id": "menu_4",
        "name": "apple juice",
        "price": 100
      },
      {
        "id": "menu_5",
        "name": "choco lase",
        "price": 150
      },
      {
        "id": "menu_6",
        "name": "Roti",
        "price": 55
      }
    ]
  }
]
