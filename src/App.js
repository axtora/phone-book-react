import React, { Component } from 'react';
import PhoneForm from './PhoneForm'
import PhoneInfoList from './PhoneInfoList';

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "test1",
        phone: "010-1234-5135"
      },
      {
        id: 1,
        name: "test2",
        phone: "010-2213-1123"  
      }
    ],
    keyword: ''
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info => id === info.id ? {...info, ...data} : info)
    })
  }

  render() {
    const { information, keyword } = this.state;
    const fillteredList = information.filter(info => info.name.indexOf(keyword) !== -1);
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <p>
          <input placeholder="검색 할 이름을 입력하세요." onChange={this.handleChange} value={keyword}/>
        </p>
        <hr/>
        <PhoneInfoList data={fillteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate}/>
      </div>
    );
  }
}

export default App;
