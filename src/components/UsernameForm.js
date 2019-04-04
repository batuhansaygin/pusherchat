import React, { Component } from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  padding: 3em;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
background: papayawhip;
`;

const Input = styled.input`
  padding: 1em;
  margin: 3em;
  color: darkgrey;
  width: 90%;
  font-size: 1em;
  text-align: center;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

class UsernameForm extends Component {
constructor(props) {
 super(props)
 this.state = {
   username: '',
 }
 this.inputRef = React.createRef();
 this.onSubmit = this.onSubmit.bind(this)
 this.onChange = this.onChange.bind(this)
}

onSubmit(e) {
 e.preventDefault()
 this.props.onSubmit(this.state.username)
}

onChange(e) {
  this.setState({ username: e.target.value })
}

render() {
  return (
    <Wrapper>
        <Title>Kullanıcı Adınız Nedir?</Title>
        <form onSubmit={this.onSubmit}>
          <Input
            ref={this.inputRef}
            type="text"
            placeholder="kullaniciAdi"
            onChange={this.onChange}
            onMouseEnter={() => {
              this.inputRef.current.focus()
            }}
          />
        </form>

      </Wrapper>
  )
}
}

export default UsernameForm
