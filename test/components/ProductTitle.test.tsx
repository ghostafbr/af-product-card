import * as React from 'react';
import renderer, {ReactTestRenderer} from 'react-test-renderer';
import {ProductTitle, ProductCard} from '../../src';
import {product1} from '../data/products';

describe('ProductTitle', () => {

    it('show display the component with the correct personalized title', (): void => {
        const wrapper: ReactTestRenderer = renderer.create(<ProductTitle title="Coffee Mug" className="custom-class"/>);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should display the component with the name of the product', (): void => {
        const wrapper: ReactTestRenderer = renderer.create(
            <ProductCard product={product1} initialValues={{count: 4, maxCount: 10}}>
                {() => <ProductTitle/>}
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

});
