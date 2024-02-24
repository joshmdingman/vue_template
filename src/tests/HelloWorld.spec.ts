import {  describe, expect, test } from 'vitest';
import { mount  } from '@vue/test-utils';

import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
    const wrapper = mount(HelloWorld, {
        props: {
            msg: 'Hello World'
        }
    });
    test('renders props.msg when passed', () => {
        expect(wrapper.html()).includes('Hello World');
    });
});