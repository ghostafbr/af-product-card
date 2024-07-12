# AF-Product-Card

    ## Description
    This project is a product card that displays a product image, product name, product description, and product price. The product card is responsive and will adjust to the size of the screen. The product card is styled with CSS and the product information is displayed using HTML. 

    ## Screenshots
    ![Product Card](./images/product-card.png)

    ## How to run
    1. Clone down this project from GitHub. 
    1. Install http-server from npm. 
    1. At the root of this project run the following command: `hs -p 8888`
    1. In your browser navigate to `https://localhost:8888`


### Andrés Felipe Bolaños

## Example
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'af-product-card';
```

```
<ProductCard
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    () => (
                        <>
                            <ProductImage/>
                            <ProductTitle/>
                            <ProductButtons/>
                        </>
                    )
                }

            </ProductCard>
```
