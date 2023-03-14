import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: [
      { name: 'Kelvin Valerio', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Secret Garden', price: 0.99, sale: 0, type: 'Flower', information: 'test', image: 'https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      { name: 'Simona Kidric', price: 0.99, sale: 0, type: 'Dog', information: 'test', image: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Alexandra Novitskaya', price: 0.99, sale: 0, type: 'Dog', information: 'test', image: 'https://images.pexels.com/photos/2951921/pexels-photo-2951921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Natasha Fernandez', price: 0.99, sale: 0, type: 'Dog', information: 'test', image: 'https://images.pexels.com/photos/733835/pexels-photo-733835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Katarzyna Modrzejewska', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Anna Shvets', price: 0.99, sale: 0, type: 'Dog', information: 'test', image: 'https://images.pexels.com/photos/4587987/pexels-photo-4587987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Cats Coming', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'cottonbro studio', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/6869655/pexels-photo-6869655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'llargian Faus', price: 0.99, sale: 0, type: 'Dog', information: 'test', image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Gary Moore', price: 0.99, sale: 0, type: 'Flower', information: 'test', image: 'https://images.pexels.com/photos/599679/pexels-photo-599679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      { name: 'Arunodhai V', price: 0.99, sale: 0, type: 'Electrical', information: 'test', image: 'https://images.pexels.com/photos/672111/pexels-photo-672111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Pixabay', price: 0.99, sale: 0, type: 'Electrical', information: 'test', image: 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Marlene Leppanen', price: 0.99, sale: 0, type: 'Electrical', information: 'test', image: 'https://images.pexels.com/photos/1434984/pexels-photo-1434984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Timo Volz', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/3643714/pexels-photo-3643714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Bia Sousa', price: 0.99, sale: 0, type: 'Electrical', information: 'test', image: 'https://images.pexels.com/photos/2212955/pexels-photo-2212955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Pixabay', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg' },
      { name: 'Serena Koi', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/1576193/pexels-photo-1576193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Pixabay', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/208773/pexels-photo-208773.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Peng Louis', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/1653357/pexels-photo-1653357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Anna Shvets', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Nikita Khandelwal', price: 0.99, sale: 0, type: 'Electrical', information: 'test', image: 'https://images.pexels.com/photos/788855/pexels-photo-788855.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Jess Bailey Designs', price: 0.99, sale: 0, type: 'Flower', information: 'test', image: 'https://images.pexels.com/photos/850359/pexels-photo-850359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Carms Onoya', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/690744/pexels-photo-690744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Aleksandr Nadyojin', price: 0.99, sale: 0, type: 'Cat', information: 'test', image: 'https://images.pexels.com/photos/4492170/pexels-photo-4492170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { name: 'Evie Shaffer', price: 0.99, sale: 0, type: 'Flower', information: 'test', image: 'https://images.pexels.com/photos/2395251/pexels-photo-2395251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ]
  }
})

export const {} = productSlice.actions
export default productSlice.reducer
