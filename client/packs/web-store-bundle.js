import ReactOnRails from 'react-on-rails';

import { SiteHeader } from '../bundles/WebStore/components/SiteHeader.jsx';
import { ProductRow } from '../bundles/WebStore/components/ProductRow.jsx';
import { ShoppingCartList } from '../bundles/WebStore/components/ShoppingCartList.jsx';
import { CheckoutForm } from '../bundles/WebStore/components/CheckoutForm.jsx';

ReactOnRails.register({
  SiteHeader,
  ProductRow,
  ShoppingCartList,
  CheckoutForm
});
