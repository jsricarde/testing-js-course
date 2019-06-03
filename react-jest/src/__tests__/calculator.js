import React from 'react'
import {render} from 'react-testing-library'
import Calculator from '../calculator'
import loadable from 'react-loadable'

test('renders', async () => {
    await loadable.preloadAll()
    const {container, debug} = render(<Calculator />)
    // debug(container)
});