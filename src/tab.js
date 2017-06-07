import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Tab extends Component {
  constructor (props) {
    super(props)
    this.styles = {
      'li': {
        'textAlign': 'center',
        'display': 'table-cell',
        'color': '#707070'
      },
      'liSelect': {
        'textAlign': 'center',
        'display': 'table-cell',
        'color': 'rgba(33, 150, 243, 1)',
        'borderTop': '2px solid rgba(33, 150, 243, 1)'
      },
      'a': {
        'display': 'block',
        'whiteSpace': 'nowrap',
        'textTransform': 'uppercase',
        'fontWeight': 500,
        'fontSize': '17px',
        'cursor': 'pointer',
        'height': '48px',
        'lineHeight': '48px',
        'textAlign': 'center',
        'paddingLeft': 0,
        'paddingRight': 0
      }
    }
  }
  render () {
    return (
      <li style={this.props.active ? this.styles.liSelect : this.styles.li}>
        <a onClick={this.props.clickHandler} style={this.styles.a}>
          {this.props.item.label}
        </a>
      </li>
    )
  }
}

Tab.propTypes = {
  item: PropTypes.object,
  clickHandler: PropTypes.func,
  label: PropTypes.string,
  active: PropTypes.bool
}

Tab.defaultProps = {
  active: false,
  clickHandler () {}
}

export default Tab
