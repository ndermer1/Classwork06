import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import List from './List';
import './FilteredList.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  handleSelect = (eventKey, event) => {
    this.setState({ type: eventKey });
  }

  filterItem = (item) => {
    const nameMatch = item.name.toLowerCase().includes(this.state.search);
    const typeMatch = this.state.type === "all" || item.type === this.state.type;
    return nameMatch && typeMatch;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.handleSelect}>
          <Dropdown.Item eventKey="all">All  </Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">Fruit  </Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">Vegetable  </Dropdown.Item>
        </DropdownButton>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;

