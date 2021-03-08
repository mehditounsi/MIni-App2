import React from 'react'
import Reactdom from 'react-dom'
import axios from 'axios'
import Feed from './components/Feed.jsx'
import Search from './components/Search.jsx'

class App extends React.Component{
constructor(props){
    super(props)
    this.state={
        data:[]
    }
}
componentDidMount(){
    axios.get('/api/history')
    .then((response=>{this.setState({data: response.data})

})    
)}


render(){
    return (
<div>
<Search />
<Feed data={this.state.data}/>

</div>
    )
}}

Reactdom.render(<App/>,document.getElementById('app'))