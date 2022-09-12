import { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Tabs.css';

export class Tabs extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired
    ),
  };

  state = {
    activeTab: 0,
  };

    componentDidMount() {
        const savedTab = Number(localStorage.getItem('activeTab'))
        if (savedTab) {
            this.setState({
                activeTab: savedTab
            })
        }
    }    
    
    
  componentDidUpdate() {
    const { activeTab } = this.state;

    localStorage.setItem('activeTab', activeTab);
  }
    

  handleSwitchTabs = index => {
    const { activeTab } = this.state;
    if (activeTab === index) {
      return;
    }
    this.setState({ activeTab: index });
  };

  render() {
    const { items } = this.props;
    const { activeTab } = this.state;
    const { handleSwitchTabs } = this;

    const titleElements = items.map(({ id, title }, index) => (
      <li
        className={index === activeTab ? 'active' : ''}
        key={id}
        onClick={() => handleSwitchTabs(index)}
      >
        {title}
      </li>
    ));

    return (
      <div className="tabs">
        <ul className="tabs__caption">{titleElements}</ul>

        <div className="tabs__content  active">
          <p>{items[activeTab].content}</p>
        </div>
      </div>
    );
  }
}
