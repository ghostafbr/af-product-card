import * as React from 'react';
import renderer, {ReactTestRenderer} from 'react-test-renderer';
import {ProductImage} from '../../src';
import {product2} from '../data/products';

describe('ProductImage', () => {

    it('should display the component with the correct personalized image', (): void => {
        const wrapper: ReactTestRenderer = renderer.create(<ProductImage img="https://hola.jpg" className="custom-image" />);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should display the component with the name of the product', (): void => {
        const wrapper: ReactTestRenderer = renderer.create(<ProductImage img={product2.img} className="custom-image" />);
        expect(wrapper.toJSON()).toMatchSnapshot();

    });

});
