import { store } from 'react-easy-state';

// Create a store with an initial value.
const Store = store({
  balance: 200,
  dishsList: [
    {
      id: 1,
      title: 'Couscous',
      price: 10,
      description:
        "Le couscous, c'est un peu long à cuisiner, mais ce n'est pas dur du tout. Et puis la semoule peut être préparée de façon simple et rapide.",
      ingredients: [
        '4 courgettes',
        '1 poireau',
        '4 carottes',
        '4 navets',
        '1 oignon',
        "1 gousse d'ail",
        "4 cuillères à soupe d'huile d'olive",
        '20 Boulettes de viandes (facultatif)',
        '800 g de filet de poulet',
        "4 cuillères à soupe d'épices à couscous",
        '350 g de pois chiche en boite',
        "2 litres d'eau",
        '70 g de concentré de tomate',
        '2 cubes de bouillon de bœuf',
        "5 verres d'eau",
        "3 cuillères à soupe d'huile d'olive",
        '5 verres de semoule',
        '50 g de beurre',
        'sel',
        'poivre',
        "un peu d'harissa (facultatif)"
      ],
      image: 'https://delivecrous.netlify.com/dish-01.jpg'
    },
    {
      id: 2,
      title: 'Cake aux épinards et au Comté',
      price: 20,
      description:
        'Pour cette recette de cake salé, on utilisera une classique pâte a cake à laquelle on ajoute des épinards revenus aux échalotes et des dés de Comté.',
      ingredients: [
        '4 œufs',
        '150 g de farine',
        '30 g de beurre',
        '10 g de levure chimique',
        "100 ml d'huile d'olive",
        'sel',
        'poivre',
        '2 échalotes',
        '30 g de beurre',
        "100 g d'épinards cuits",
        '100 g de Comté',
        'sel',
        'poivre'
      ],
      image: 'https://delivecrous.netlify.com/dish-02.jpg'
    },
    {
      id: 3,
      title: 'Turban de sole aux langoustines',
      price: 30,
      description:
        "Le turban est formé par un filet de sole roulé en cercle creux et poché dans un fumet de poisson. Chaque turban est garni de langoustines sautées, et napées d'une gouteuse sauce crème au fumet de langoustines. C'est un peu long à faire, à cause du fumet de langoustines, mais promis, vous allez épater vos invités.",
      ingredients: [
        '400 g de langoustines',
        '1 échalote',
        '1 carotte',
        '2 brins de persil',
        "3 cuillères à soupe d'huile d'olive",
        '300 ml de vin blanc sec',
        "200 ml d'eau",
        '200 ml de crème fraiche liquide',
        '1 noix de beurre',
        '8 filets de sole',
        "1 cuillère à soupe d'huile d'olive",
        'sel',
        'poivre'
      ],
      image: 'https://delivecrous.netlify.com/dish-03.jpg'
    },
    {
      id: 4,
      title: 'Dos de cabillaud au safran',
      price: 40,
      description:
        'Un épais filet de poisson, ici du dos de cabillaud, grillé et servi avec une sauce qui est une réduction de vin blanc et échalote au safran.',
      ingredients: [
        '1 échalote',
        '4 filets de poisson',
        '2 cuillères à soupe de farine',
        '30 g de beurre',
        "3 cuillères à soupe d'huile d'olive",
        '2 verres de vin blanc sec',
        '200 ml de crème fraiche liquide',
        '½ petite cuillère de safran',
        'sel',
        'poivre'
      ],
      image: 'https://delivecrous.netlify.com/dish-04.jpg'
    },
    {
      id: 5,
      title: 'Crèmes brûlées vanille-chocolat',
      price: 50,
      description:
        "Cette recette de crèmes brûlées, est un délicat mélange en trois couches, d'abord une ganache au chocolat, puis une crème à la vanille, et bien sur la délicieuse et fine croute de caramel sur le dessus.",
      ingredients: [
        '350 g de Ganache au chocolat',
        '125 ml de lait entier',
        '125 ml de crème fraiche liquide',
        '½ gousse de vanille',
        '30 g de sucre en poudre',
        "3 jaunes d'œuf",
        '4 cuillères à soupe de sucre en poudre'
      ],
      image: 'https://delivecrous.netlify.com/dish-05.jpg'
    },
    {
      id: 6,
      title: 'Riz au lait aux pommes et fruits secs',
      price: 60,
      description:
        "C'est un peu comme pour un riz au lait classique, mais à mi-cuisson, on y ajoute des amandes et pistaches torréfiées, des dés de pommes sautés et des abricots secs découpés en lanières.",
      ingredients: [
        '50 g de pistaches',
        "30 g d'amandes entières",
        "50 g d'abricots secs",
        '150 g de riz',
        '1 litre de lait entier',
        '60 g de sucre en poudre',
        '1 gousse de vanille',
        '2 pommes',
        '30 g de beurre',
        '20 g de sucre en poudre'
      ],
      image: 'https://delivecrous.netlify.com/dish-06.jpg'
    },
    {
      id: 7,
      title: 'Granola',
      price: 70,
      description:
        "Le granola c'est un savoureux et croustillant mélange de graines, de fruits secs et de céréales, liés avec un peu de sirop d'érable, et toastées au four, on dit souvent que c'est la version américaine du muesli.",
      ingredients: [
        "250 g de flocons d'avoine",
        '50 g de noisettes',
        "50 g d'amandes entières",
        '50 g de cerneaux de noix',
        '50 g de pistaches',
        '30 g de graines de tournesol',
        "2 cuillères à soupe d'huile",
        "4 cuillères à soupe de sirop d'érable"
      ],
      image: 'https://delivecrous.netlify.com/dish-07.jpg'
    },
    {
      id: 8,
      title: 'Curry de moules au chou',
      price: 80,
      description:
        'En partant de moules cuites à la marinière, et après les avoir décortiquées, on va pour cette recette les servir avec une gouteuse crème au curry, et un émincé de chou cuit juste tendre.',
      ingredients: [
        '1 kg de moules',
        "50 g d'oignon",
        '400 g de chou',
        "4 cuillères à soupe d'huile d'olive",
        '250 ml de crème fraiche liquide',
        '1 cuillère à soupe de curry',
        'sel',
        'poivre'
      ],
      image: 'https://delivecrous.netlify.com/dish-08.jpg'
    },
    {
      id: 9,
      title: 'Avocat aux crevettes sautées',
      price: 90,
      description:
        'Un avocat aux crevettes classique ? Non, non, dans cette recette les crevettes sont rapidement sautées, pour plus de gout, et ensuite mélangées à une mayonnaise au curry.',
      ingredients: [
        '4 avocats',
        '1 citron vert',
        '400 g de crevettes cuites',
        "2 cuillères à soupe d'huile d'olive",
        '150 g de Mayonnaise',
        '1 petite cuillère de curry',
        'persil',
        'sel',
        'poivre'
      ],
      image: 'https://delivecrous.netlify.com/dish-09.jpg'
    },
    {
      id: 10,
      title: 'Vol-au-vent',
      price: 100,
      description:
        "Le vol-au-vent est un plat classique de la cuisine Française, il est composé d'une croute très légère (d'où son nom) en pâte feuilletée garnie d'une préparation à la crème.",
      ingredients: [
        '1 poireau',
        '½ oignon',
        '300 g de champignons',
        '½ citron',
        '150 g de lardons',
        '1 cuillère à soupe de vinaigre',
        '200 g de filet de poulet',
        '250 ml de crème fraiche',
        "6 cuillères à soupe d'huile d'olive",
        '4 fonds de vol-au-vent',
        'sel',
        'poivre'
      ],
      image: 'https://delivecrous.netlify.com/dish-10.jpg'
    },
    {
      id: 11,
      title: 'Crémeux au citron',
      price: 110,
      description:
        "Un crémeux au citron, c'est une sorte de crème prise, légère et parfumée, mais sans épaississant, c'est juste le jus de citron qui fait prendre la crème légèrement chauffée.",
      ingredients: [
        '250 ml de crème fraiche liquide',
        '80 g de sucre en poudre',
        '1 citron',
        '120 g de Coulis de cassis'
      ],
      image: 'https://delivecrous.netlify.com/dish-11.jpg'
    }
  ],
  cartList: [],
  singleDish: dishID => Store.dishsList.find(dish => dish.id === dishID),
  addToCart: dishID => {
    const dish = Store.dishsList.find(dish => dish.id === dishID);
    Store.cartList.push(dish);
  },
  removeFromCart: dishID => {
    Store.cartList = Store.cartList.filter(dish => dish.id !== dishID);
  },
  existInCart: dishID => {
    return !!Store.cartList.find(dish => dish.id === dishID);
  },
  clearCart: () => {
    Store.cartList = [];
  },
  totalPriceInCart: () => {
    return Store.cartList.reduce((total, dish) => total + dish.price, 0);
  },
  canAfford: () => Store.balance > Store.totalPriceInCart(),
  buy: () => {
    Store.balance = Store.balance - Store.totalPriceInCart();
    Store.clearCart();
    return Store.balance;
  }
});

export default Store;
