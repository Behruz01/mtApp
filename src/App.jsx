import "./App.css";
import Card from "./companents/cards/card";

let products = [
  {
    createdAt: "2019-02-01T15:08:09.146Z",
    name: "Mr. Lynn Hills",
    image: "https://loremflickr.com/640/480/transport",
    category: "Czech Republic",
    price: "598.00",
    rating: "55991",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    id: "9",
  },
  {
    createdAt: "2031-02-24T09:43:49.440Z",
    name: "Erika Stamm",
    image: "https://loremflickr.com/640/480/transport",
    category: "Lebanon",
    price: "140.00",
    rating: "417",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    id: "10",
  },
  {
    createdAt: "2087-07-08T06:08:30.925Z",
    name: "Darla Kerluke",
    image: "https://loremflickr.com/640/480/transport",
    category: "Virgin Islands, U.S.",
    price: "166.00",
    rating: "3246",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    id: "11",
  },
  {
    createdAt: "2066-07-17T14:24:40.679Z",
    name: "Leona Olson",
    image: "https://loremflickr.com/640/480/transport",
    category: "Trinidad and Tobago",
    price: "104.00",
    rating: "547",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    id: "12",
  },
  {
    createdAt: "2021-01-01T06:21:23.262Z",
    name: "Donald Beatty PhD",
    image: "https://loremflickr.com/640/480/transport",
    category: "Equatorial Guinea",
    price: "886.00",
    rating: "045",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    id: "13",
  },
  {
    createdAt: "2096-10-01T12:44:09.636Z",
    name: "Hugo West",
    image: "https://loremflickr.com/640/480/transport",
    category: "Israel",
    price: "376.00",
    rating: "193",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    id: "14",
  },
  {
    createdAt: "2075-01-10T06:04:23.393Z",
    name: "Mrs. Philip Toy",
    image: "https://loremflickr.com/640/480/transport",
    category: "Sri Lanka",
    price: "832.00",
    rating: "4717",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    id: "15",
  },
  {
    createdAt: "2010-12-15T21:20:18.059Z",
    name: "Madeline Wyman",
    image: "https://loremflickr.com/640/480/transport",
    category: "Colombia",
    price: "840.00",
    rating: "62612",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    id: "16",
  },
  {
    createdAt: "2045-07-02T13:25:06.755Z",
    name: "Rosie Reichert",
    image: "https://loremflickr.com/640/480/transport",
    category: "Isle of Man",
    price: "626.00",
    rating: "74421",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    id: "17",
  },
  {
    createdAt: "2083-08-07T09:08:37.079Z",
    name: "Edmund Braun",
    image: "https://loremflickr.com/640/480/transport",
    category: "Switzerland",
    price: "843.00",
    rating: "0335",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    id: "18",
  },
  {
    createdAt: "2055-03-28T14:53:44.841Z",
    name: "Jean Hintz MD",
    image: "https://loremflickr.com/640/480/transport",
    category: "Albania",
    price: "768.00",
    rating: "0441",
    description: "The Football Is Good For Training And Recreational Purposes",
    id: "19",
  },
  {
    createdAt: "2072-08-27T23:09:27.108Z",
    name: "Lana Gibson",
    image: "https://loremflickr.com/640/480/transport",
    category: "Oman",
    price: "536.00",
    rating: "46016",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    id: "20",
  },
  {
    createdAt: "2013-11-09T19:50:26.786Z",
    name: "Miguel Miller",
    image: "https://loremflickr.com/640/480/transport",
    category: "Guinea",
    price: "953.00",
    rating: "801",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    id: "21",
  },
  {
    createdAt: "2008-12-26T12:10:57.205Z",
    name: "Regina McCullough",
    image: "https://loremflickr.com/640/480/transport",
    category: "Bolivia",
    price: "622.00",
    rating: "10592",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    id: "22",
  },
  {
    createdAt: "2004-07-02T16:45:58.085Z",
    name: "Juanita Wyman",
    image: "https://loremflickr.com/640/480/transport",
    category: "Belgium",
    price: "30.00",
    rating: "422",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    id: "23",
  },
  {
    createdAt: "2000-10-13T04:28:05.780Z",
    name: "Derrick Quigley",
    image: "https://loremflickr.com/640/480/transport",
    category: "Guyana",
    price: "669.00",
    rating: "5363",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    id: "24",
  },
  {
    createdAt: "2048-01-19T02:19:51.158Z",
    name: "Nadine Bernhard DVM",
    image: "https://loremflickr.com/640/480/transport",
    category: "Mongolia",
    price: "215.00",
    rating: "0859",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    id: "25",
  },
  {
    createdAt: "2038-10-01T08:44:13.004Z",
    name: "Dennis Carter",
    image: "https://loremflickr.com/640/480/transport",
    category: "Romania",
    price: "901.00",
    rating: "60558",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    id: "26",
  },
  {
    createdAt: "2051-07-27T12:51:18.962Z",
    name: "Miss Terrence Turner",
    image: "https://loremflickr.com/640/480/transport",
    category: "Equatorial Guinea",
    price: "83.00",
    rating: "79359",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    id: "27",
  },
  {
    createdAt: "2061-10-03T10:56:24.067Z",
    name: "Muriel Weber",
    image: "https://loremflickr.com/640/480/transport",
    category: "Burundi",
    price: "453.00",
    rating: "1974",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    id: "28",
  },
  {
    createdAt: "2028-02-22T06:14:49.070Z",
    name: "Cecil Monahan",
    image: "https://loremflickr.com/640/480/transport",
    category: "Norfolk Island",
    price: "176.00",
    rating: "8224",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    id: "29",
  },
  {
    createdAt: "2059-03-14T16:06:28.782Z",
    name: "Chad Reichel",
    image: "https://loremflickr.com/640/480/transport",
    category: "Czech Republic",
    price: "905.00",
    rating: "5859",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    id: "30",
  },
  {
    createdAt: "1996-10-05T13:20:52.437Z",
    name: "Richard Miller",
    image: "https://loremflickr.com/640/480/transport",
    category: "Afghanistan",
    price: "239.00",
    rating: "574",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    id: "31",
  },
  {
    createdAt: "2032-10-11T13:51:34.950Z",
    name: "Elsie Reilly",
    image: "https://loremflickr.com/640/480/transport",
    category: "Liberia",
    price: "17.00",
    rating: "5552",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    id: "32",
  },
  {
    createdAt: "2031-04-29T08:17:44.676Z",
    name: "Jonathon Moore III",
    image: "https://loremflickr.com/640/480/transport",
    category: "San Marino",
    price: "807.00",
    rating: "578",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    id: "33",
  },
  {
    createdAt: "2068-06-24T06:06:16.785Z",
    name: "Helen Huels",
    image: "https://loremflickr.com/640/480/transport",
    category: "Kazakhstan",
    price: "407.00",
    rating: "1370",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    id: "35",
  },
  {
    createdAt: "2074-04-09T07:55:45.762Z",
    name: "Tiffany Mills",
    image: "https://loremflickr.com/640/480/transport",
    category: "Japan",
    price: "933.00",
    rating: "484",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    id: "36",
  },
  {
    createdAt: "2083-11-07T08:21:10.254Z",
    name: "Dexter Stamm",
    image: "https://loremflickr.com/640/480/transport",
    category: "China",
    price: "385.00",
    rating: "2578",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    id: "37",
  },
  {
    createdAt: "2042-03-29T23:33:18.441Z",
    name: "Carlton Mohr",
    image: "https://loremflickr.com/640/480/transport",
    category: "Guinea",
    price: "576.00",
    rating: "88717",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    id: "38",
  },
  {
    createdAt: "2021-10-30T08:25:15.894Z",
    name: "Alfredo Cole",
    image: "https://loremflickr.com/640/480/transport",
    category: "Saint Kitts and Nevis",
    price: "344.00",
    rating: "199",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    id: "39",
  },
  {
    createdAt: "2071-01-15T17:06:23.430Z",
    name: "Velma Rutherford V",
    image: "https://loremflickr.com/640/480/transport",
    category: "Ukraine",
    price: "747.00",
    rating: "6880",
    description: "The Football Is Good For Training And Recreational Purposes",
    id: "40",
  },
];

function App() {
  return (
    <>
      <div className="container">
        <header>
          <div className="row m-3">
            {products.map((product, i) => {
              return <Card key={i} product={product} />;
            })}
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
