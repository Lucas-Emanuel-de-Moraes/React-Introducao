import { Component } from 'react';

class App extends Component {
  // // constructor(props) {
  // //   super(props)
  // //   this.handlePClick = this.handlePClick.bind(this)

  // //   this.state = {
  // //     name: "Fulano de Tal",
  // //     count: 0
  // //   }
  // // }

  // state = {
  //   name: 'Fulano de Tal',
  //   count: 0
  // }

  // // handlePClick() {
  // //   // const { name } = this.state
  // //   // console.log(name)
  // //   this.setState({ name: 'Algum Nome' })
  // // }

  // handlePClick = () => {
  //   this.setState({ name: 'Algum Nome' })
  // }

  // // Uso de Arrow Function nao necessita de bind na funcao para uso de state
  // handleAClick = (e) => {
  //   e.preventDefault() // Ignora a acao padrao da tag para executar a funcao
  //   const { count } = this.state
  //   this.setState({ count: count + 1 })
  // }

  // render() {
  //   // const name = this.state.name
  //   const { name, count } = this.state
  //   return (
  //     <>
  //       <h1>{name} {count}</h1>
  //       <button onClick={this.handlePClick}>Setar novo nome</button>
  //       <a href='https://google.com' onClick={this.handleAClick}>Somar Count</a>
  //     </>
  //   )
  // }

  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo 3'
      },
    ]
  }

  timeoutUpdate = null

  componentDidMount() {
    this.handleTimeout()
  }

  componentDidUpdate() {
    this.handleTimeout()
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeout = () => {
    const { posts, counter } = this.state
    posts[0].title = 'O titulo mudou'

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 1000)
  }


  render() {
    const { posts } = this.state
    return (
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
