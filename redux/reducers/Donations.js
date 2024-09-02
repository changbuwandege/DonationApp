import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      name: 'Non-perishable food',
      description:
        'Non-perishable food, such as canned goods and rice, to provide essential sustenance to those in need.',
      image:
        'https://palyvoice.com/wp-content/uploads/2014/05/882321_386319028176767_1639367332967763652_o-11.jpg',
      donationItemId: 1,
      categoryIds: [1, 9], // Highlight, Clothing and Equipment
      price: '11.64',
    },
    {
      name: 'Recycled Paper',
      description: 'Environmentally friendly recycled paper for various uses.',
      image:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fg-search1.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi4%2F1997385344%2FO1CN01sMkemW1pLbBCzHlh7_%21%211997385344.jpg_300x300.jpg&refer=http%3A%2F%2Fg-search1.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1727492687&t=e3089ca0038887223d5978045cb7ae88',
      donationItemId: 2,
      categoryIds: [2, 5], // Environment, Office Supplies
      price: '5.50',
    },
    {
      name: "Children's Books",
      description: 'Books for children to encourage reading and education.',
      image:
        'https://img0.baidu.com/it/u=4014157987,1967007066&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=338',
      donationItemId: 3,
      categoryIds: [3, 8], // Books and Media, Education
      price: '7.99',
    },
    {
      name: 'First Aid Kit',
      description: 'A comprehensive first aid kit for emergencies.',
      image:
        'https://cdn.shopify.com/s/files/1/0030/7766/8982/products/LM_1045_03_800x.jpg?v=1534303781',
      donationItemId: 4,
      categoryIds: [4, 9], // Health and Beauty Products, Clothing and Equipment
      price: '25.00',
    },
    {
      name: 'Stationery Set',
      description: 'A complete stationery set for office or school use.',
      image:
        'https://img2.baidu.com/it/u=343841323,2913012803&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      donationItemId: 5,
      categoryIds: [5, 8], // Office Supplies, Education
      price: '8.75',
    },
    {
      name: 'Hand Tools',
      description: 'Essential hand tools for various DIY projects.',
      image:
        'https://img0.baidu.com/it/u=1649115214,2023711161&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      donationItemId: 6,
      categoryIds: [6], // Tools and Hardware
      price: '15.99',
    },
    {
      name: 'Crafting Materials',
      description:
        'Materials for art and craft projects, including paper, glue, and scissors.',
      image:
        'https://img1.baidu.com/it/u=1038480837,2810687204&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300',
      donationItemId: 7,
      categoryIds: [7, 8], // Art and Craft Supplies, Education
      price: '12.50',
    },
    {
      name: 'Organic Shampoo',
      description: 'Health and beauty product made with organic ingredients.',
      image:
        'https://img0.baidu.com/it/u=451613636,1762867192&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300',
      donationItemId: 8,
      categoryIds: [4], // Health and Beauty Products
      price: '9.45',
    },
    {
      name: 'Reusable Water Bottle',
      description: 'A durable and environmentally friendly water bottle.',
      image:
        'http://t14.baidu.com/it/u=2293710360,4253689305&fm=224&app=112&f=JPEG?w=500&h=500',
      donationItemId: 9,
      categoryIds: [2, 9], // Environment, Clothing and Equipment
      price: '10.00',
    },
    {
      name: 'Educational Board Games',
      description:
        'Board games designed to promote learning and cognitive skills.',
      image:
        'http://t14.baidu.com/it/u=2650814004,2659378011&fm=224&app=112&f=JPEG?w=500&h=500',
      donationItemId: 10,
      categoryIds: [8, 3], // Education, Books and Media
      price: '20.00',
    },
    {
      name: 'Office Chair',
      description: 'Ergonomic office chair for comfortable working.',
      image:
        'https://img2.baidu.com/it/u=2347824395,1615406874&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      donationItemId: 11,
      categoryIds: [5], // Office Supplies
      price: '120.00',
    },
    {
      name: 'Safety Gloves',
      description: 'Protective gloves for handling tools and materials.',
      image:
        'https://img2.baidu.com/it/u=3938747303,1287257772&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      donationItemId: 12,
      categoryIds: [6, 9], // Tools and Hardware, Clothing and Equipment
      price: '14.00',
    },
    {
      name: 'Art Paints',
      description: 'High-quality paints for art projects.',
      image:
        'https://img0.baidu.com/it/u=2609189333,304544624&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501',
      donationItemId: 13,
      categoryIds: [7], // Art and Craft Supplies
      price: '18.99',
    },
    {
      name: 'Solar-Powered Flashlight',
      description:
        'Environmentally friendly flashlight powered by solar energy.',
      image:
        'https://img2.baidu.com/it/u=1969866553,498181570&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
      donationItemId: 14,
      categoryIds: [2, 9], // Environment, Clothing and Equipment
      price: '25.99',
    },
    {
      name: 'Yoga Mat',
      description: 'Comfortable and durable yoga mat for fitness activities.',
      image:
        'https://img2.baidu.com/it/u=996818852,2240326002&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
      donationItemId: 15,
      categoryIds: [4, 9], // Health and Beauty Products, Clothing and Equipment
      price: '30.00',
    },
    {
      name: 'Eco-Friendly Cleaning Supplies',
      description: 'Environmentally safe cleaning products for household use.',
      image:
        'https://img1.baidu.com/it/u=4062152042,1783523525&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=600',
      donationItemId: 16,
      categoryIds: [2, 4], // Environment, Health and Beauty Products
      price: '12.50',
    },
    {
      name: 'Notebooks',
      description: 'Set of notebooks for writing, planning, and taking notes.',
      image:
        'https://img2.baidu.com/it/u=2465429275,784385646&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      donationItemId: 17,
      categoryIds: [5, 8], // Office Supplies, Education
      price: '6.75',
    },
    {
      name: 'Portable Tool Kit',
      description: 'Compact tool kit for on-the-go repairs and DIY projects.',
      image:
        'https://img1.baidu.com/it/u=4039379700,1825590148&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      donationItemId: 18,
      categoryIds: [6], // Tools and Hardware
      price: '45.00',
    },
    {
      name: "Children's Art Supplies",
      description: 'Art supplies specifically designed for children.',
      image:
        'https://img1.baidu.com/it/u=3556359165,2694931365&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=537',
      donationItemId: 19,
      categoryIds: [7, 8], // Art and Craft Supplies, Education
      price: '14.99',
    },
    {
      name: 'Fitness Tracker',
      description:
        'Wearable device for tracking fitness activities and health metrics.',
      image:
        'http://t13.baidu.com/it/u=1520583075,304501673&fm=224&app=112&f=JPEG?w=500&h=500',
      donationItemId: 20,
      categoryIds: [4, 9], // Health and Beauty Products, Clothing and Equipment
      price: '75.00',
    },
  ],
  selectedDonationId: null,
  selectedDonationItem: {},
};

const Donations = createSlice({
  name: 'donations',
  initialState: initialState,
  reducers: {
    resetDonations: () => {
      return initialState;
    },
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
      state.selectedDonationItem = state.items.find(
        item => item.donationItemId === action.payload,
      );
    },
  },
});

export const {resetDonations, updateSelectedDonationId} = Donations.actions;
export default Donations.reducer;
