const products = [
  {
    id: 0,
    name: 'Wheat',
    price: '2000',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/WN/WC/BA/128869338/wheat-lokwan-1-500x500.jpg'
  },
  { id: 1, name: 'Rice', price: '2500', image: 'https://as1.ftcdn.net/v2/jpg/05/69/11/92/1000_F_569119245_nXXyAWO7PWhjbcgnZOblQZljOMV3BRut.jpg' },
  { id: 2, name: 'Corn', price: '1800', image: 'https://as2.ftcdn.net/v2/jpg/00/58/46/65/1000_F_58466577_t5M5UtFDj3kSfO9GWj9NWAuTPBChoEvX.jpg' },
  {
    id: 3,
    name: 'Barley',
    price: '2200',
    image: 'https://as1.ftcdn.net/v2/jpg/02/13/58/26/1000_F_213582640_w6Dry2ojr3xtGYIKLVwIdPBHX0DBE2I0.jpg'
  },
  {
    id: 4,
    name: 'Soybean',
    price: '3200',
    image: 'https://m.media-amazon.com/images/I/61DyHPGTwuL.jpg'
  },
  {
    id: 5,
    name: 'Sugarcane',
    price: '2500',
    image: 'https://thumbs.dreamstime.com/z/cartoon-bag-sugar-sugarcane-product-burlap-sack-pack-brown-ingredient-vector-flat-icon-illustration-isolated-white-234159446.jpg?ct=jpeg'
  },
  {
    id: 6,
    name: 'Cotton',
    price: '4000',
    image: 'https://as1.ftcdn.net/v2/jpg/00/98/19/72/1000_F_98197216_nsuRjjs4ltzp8pl1fpzWjsaISfD9gvsK.jpg'
  },
  {
    id: 7,
    name: 'Potato',
    price: '20',
    image: 'https://img.freepik.com/free-vector/hand-drawn-potato-cartoon-illustration_23-2150625868.jpg?w=900&t=st=1712226040~exp=1712226640~hmac=d3db6dd76e06fcbdb777d34a772f6a6db6f9e5dd288b7a2218a0619df7b32436'
  },
  {
    id: 8,
    name: 'Tomato',
    price: '30',
    image: 'https://cdn.vectorstock.com/i/1000x1000/02/56/tomato-cartoon-isolated-vector-31040256.webp'
  },
  { id: 9, name: 'Onion', price: '25', image: 'https://cdn.vectorstock.com/i/1000x1000/10/42/onion-isolated-vegetable-cartoon-badge-vector-23081042.webp' },
  {
    id: 10,
    name: 'Carrot',
    price: '35',
    image: 'https://media.gettyimages.com/id/472107852/vector/carrot.jpg?s=612x612&w=gi&k=20&c=rSVyf69r36iY03QX_MBd-imvm6g2zu9QtAF3t0lp4VA='
  },
  {
    id: 11,
    name: 'Cauliflower',
    price: '40',
    image: 'https://cdn.vectorstock.com/i/1000x1000/64/58/cauliflower-vegetable-cartoon-colored-clipart-vector-46536458.webp'
  },
  {
    id: 12,
    name: 'Cabbage',
    price: '20',
    image: 'https://as1.ftcdn.net/v2/jpg/05/98/34/60/1000_F_598346014_2iKR4IF3aRyXGFpS3EXbTIbMNuwpxRzc.jpg'
  },
  {
    id: 13,
    name: 'Brinjal',
    price: '25',
    image: 'https://img.freepik.com/premium-vector/chef-eggplant-brinjal-cartoon-character-vector-illustration_701164-281.jpg?w=900'
  },
  {
    id: 14,
    name: 'Pumpkin',
    price: '30',
    image: 'https://illustoon.com/photo/dl/2581.png'
  },
  {
    id: 15,
    name: 'Broccoli',
    price: '45',
    image: 'https://i.pinimg.com/564x/a5/65/01/a565019e605018a27ca99e0253ac5efc.jpg'
  },
  {
    id: 16,
    name: 'Lettuce',
    price: '40',
    image: ''
  },
  {
    id: 17,
    name: 'Spinach',
    price: '30',
    image: ''
  },
  { id: 18, name: 'Kale', price: '35', image: '' },
  {
    id: 19,
    name: 'Arugula',
    price: '30',
    image: ''
  },
  {
    id: 20,
    name: 'Radish',
    price: '25',
    image: ''
  },
  {
    id: 21,
    name: 'Beetroot',
    price: '35',
    image: 'https://img.freepik.com/free-vector/whole-beetroot-sliced-white-background_1308-134753.jpg?w=900&t=st=1712226619~exp=1712227219~hmac=4e556e154f77735cd6479da0a3a8b6de16bbfd512c709fdc15220f7ea9a32e29'
  },
  {
    id: 22,
    name: 'Turnip',
    price: '30',
    image: ''
  },
  {
    id: 23,
    name: 'Asparagus',
    price: '50',
    image: ''
  },
  {
    id: 24,
    name: 'Zucchini',
    price: '40',
    image: ''
  },
  {
    id: 25,
    name: 'Cucumber',
    price: '30',
    image: ''
  },
  {
    id: 26,
    name: 'Celery',
    price: '25',
    image: ''
  },
  {
    id: 27,
    name: 'Bell Pepper',
    price: '35',
    image: ''
  },
  {
    id: 28,
    name: 'Chili Pepper',
    price: '30',
    image: ''
  },
  {
    id: 29,
    name: 'Garlic',
    price: '20',
    image: ''
  },
  {
    id: 30,
    name: 'Ginger',
    price: '40',
    image: ''
  },
  {
    id: 31,
    name: 'Turmeric',
    price: '45',
    image: ''
  },
  {
    id: 32,
    name: 'Mushroom',
    price: '30',
    image: 'https://as2.ftcdn.net/v2/jpg/06/62/95/59/1000_F_662955932_DBhfqz07UZjc4fgjj5YexSKzst2eBoo4.webp'
  },
  {
    id: 33,
    name: 'Lemon',
    price: '25',
    image: ''
  },
  {
    id: 34,
    name: 'Orange',
    price: '30',
    image: ''
  },
  {
    id: 35,
    name: 'Apple',
    price: '35',
    image: ''
  },
  {
    id: 36,
    name: 'Banana',
    price: '20',
    image: ''
  },
  {
    id: 37,
    name: 'Grapes',
    price: '40',
    image: 'https://img.freepik.com/free-vector/grape-fruit-cartoon-illustration-flat-cartoon-style_138676-2877.jpg?w=826&t=st=1712222037~exp=1712222637~hmac=d6c4e74ab205a1eec02e4dc71bc70366cce67903b41f5d2dda9ef0c7131d3cea'
  },
  {
    id: 38,
    name: 'Watermelon',
    price: '25',
    image: 'https://cdn.pixabay.com/photo/2017/10/14/15/50/fruit-2850840_1280.png'
  },
  { id: 39, name: 'Pineapple', price: '30', image: '' }
];

export default products

