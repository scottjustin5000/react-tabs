import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Tab from './tab'

class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = { currentIndex: this.props.selectedIndex }
    this.styles = {
      panel: {
        display: 'table',
        width: '100%',
        tableLayout: 'fixed',
        listStyle: 'none',
        paddingLeft: 0,
        marginBottom: 0,
        backgroundColor: 'transparent',
        whiteSpace: 'nowrap',
        overflowXx: 'auto'
      }
    }
  }

  onChange (index, item, event) {
    if (this.state.currentIndex === index) return
    this.setState({ currentIndex: index })
    this.props.onChange(index, item, event)
  }

  render () {
    const tabs = React.Children.map(this.props.children, (child, index) => {
      return <Tab key={'tab' + index} active={(index === this.state.currentIndex)} clickHandler={this.onChange.bind(this, index, child.props)} item={{label: child.props.label, value: child.props.value}} />
    })
    return (
      <ul style={this.styles.panel}>
        { tabs }
      </ul>
    )
  }
}

Tabs.propTypes = {
  selectedIndex: PropTypes.number,
  onChange: PropTypes.func
}

Tabs.defaultProps = {
  selectedIndex: 0,
  onChange () {}
}

export default Tabs
