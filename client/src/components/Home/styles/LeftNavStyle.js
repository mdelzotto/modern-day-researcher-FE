'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style
 */

let LeftNavStyle = styled.div(() => `
  height: 100vh;
  border-right: 1px solid #333;
`)

/**
 * Export style
 */

module.exports = LeftNavStyle