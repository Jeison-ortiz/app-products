import { Invoice } from "../models/invoice";

export const invoiceData: any = {
  id:1,
  name: 'Componentes de pc',
  client:{
    name: 'Jeison',
    lastname: 'Ortiz',
    address:{
      country: 'Colombia',
      city: 'Cali',
      street: 'one street',
      number: 15,
    }
  },
  company:{
    name:'New Age',
    fiscalNumber:3206102542
  },
  items:[
    {
      id:1,
      product:'CPU Intel I9',
      price:599,
      quantity:1,
    },
    {
      id:2,
      product:'Cosair teclado mecanico',
      price:99,
      quantity:2,
    },
    {
      id:3,
      product:'Monitor asus',
      price:899,
      quantity:3,
    }
  ]
}
