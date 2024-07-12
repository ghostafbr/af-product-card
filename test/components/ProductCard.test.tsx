import * as React from 'react';
import renderer, {ReactTestRenderer} from 'react-test-renderer';
import {ProductCard, ProductImage} from '../../src';
import {product1, product2} from '../data/products';

const {act} = renderer;

describe('ProductImage', () => {

    it('should display the component correctly', (): void => {
        const wrapper: ReactTestRenderer = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should increase the quantity of the product', (): void => {
        const value: number = 1;
        const wrapper: ReactTestRenderer = renderer.create(
            <ProductCard product={product1}>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button onClick={ () => increaseBy(value) }>+</button>
                        </>
                    )
                }
            </ProductCard>
        );

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
        act(() => {
            (tree as any).children[2].props.onClick();
        });
        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe('1');

    });

});
