import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import  axios from 'axios';

function Registeration() {
  
  axios.post('/api/products/register', {
    companyName: 'goMart',
    ownerName: 'Kiruthik Kumar N',
    rollNo: '717821P132',
    ownerEmail: '717821p132@kce.ac.in',
    accessCode: 'FKDLjg',
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
   <>
   <div class=" text-center bg-slate-800  text-white h-20 p-6 text-3xl font-serif ">
     <h1>Shopping Mart</h1>
  </div>
  <br/>
  <div >
    
<Link to={"/"} class="block max-w-sm p-6 bg-stone-400 border border-gray-200 rounded-lg shadow  ">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Product Name:</h5>Laptop 10
<h6 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Price:</h6> 199999
<h6 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Rating:</h6>4.5
<h6 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Discount:</h6>33
<p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</Link>


  </div>
   
   </>
  );
}

export default Registeration;
 