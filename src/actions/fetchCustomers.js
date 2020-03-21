import { FETCH_CUSTOMERS } from "./../constans";
import { createAction } from 'redux-actions';

const customers = [
  {
      "dni"  : "27000000",
      "name" : "Juan Perez",
      "age"  : 37
  },
  {
      "dni"  : "30000000",
      "name" : "Manolito",
      "age"  : 35
  },
  {
      "dni"  : "26000000",
      "name" : "Pepe nombre",
      "age"  : 18
  },
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, 
  () => customers);