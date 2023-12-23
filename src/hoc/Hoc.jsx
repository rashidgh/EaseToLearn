import React, { Component } from 'react'

const Hoc = (Wrapper) => {
    return class Hoc extends Component{
        render() {
          return <Wrapper value="hello I'm Hoc"></Wrapper>
      }
  }
}

export default Hoc