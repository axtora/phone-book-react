import React, { Component } from 'react';

class PhoneForm extends Component {
    state = { 
        id: 0,
        name: '정동건',
        phone: '010-0000-0000'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        //페이지 리로딩 방지
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="이름" value={this.state.name} onChange={this.handleChange} name="name"/>
                <input placeholder="전화번호" value={this.state.phone} onChange={this.handleChange} name="phone"/>
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm;