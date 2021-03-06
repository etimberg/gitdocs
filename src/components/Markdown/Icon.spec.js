import React from 'react'
import { shallow } from 'enzyme'

import Checkmark from 'svg/Checkmark'
import Link from 'svg/Link'
import Icon from './Icon'

describe('Component: Icon', () => {
  test('Should render a checkmark', () => {
    const icon = shallow(<Icon className="doc-plus" />)
    expect(icon).not.toBe(undefined)
    expect(icon.instance instanceof Checkmark)
  })

  test('Should render a link', () => {
    const icon = shallow(<Icon className="link" />)
    expect(icon).not.toBe(undefined)
    expect(icon.instance instanceof Link)
  })
})
