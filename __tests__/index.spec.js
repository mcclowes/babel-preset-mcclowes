var config = require('../index')

describe('babel config', () => {
  it('exports correctly', () => {
    expect(config.presets).toMatchSnapshot()
    expect(config.plugins).toMatchSnapshot()
  })
})