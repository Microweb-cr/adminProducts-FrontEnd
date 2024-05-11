import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { Loader as productLoader, Action as actionAvailabilityProduct } from "./views/Products";
import NewProduct, { Action as newProductAction} from "./views/NewProduct";
import EditProduct, { Loader as EditProductLoader, Action as editProductAction} from "./views/EditProducts";
import { Action as deleteProductAction } from "./components/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productLoader,
                action: actionAvailabilityProduct
            },
            {
                path: "producto/nuevo",
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path:'productos/:id/editar', // ROA Pattern - Resource-oriented desing
                element: <EditProduct />,
                loader: EditProductLoader,
                action: editProductAction
            },
            {
                path:'productos/:id/eliminar', 
                action: deleteProductAction
            }
        ]
    }
])