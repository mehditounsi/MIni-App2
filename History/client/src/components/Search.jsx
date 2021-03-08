import React from 'react' ;
import axios from 'axios';



class Search extends React.Component{
constructor(props){
    super(props)
    this.state={
    search: ""
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
}

handleChange(e){
this.setState({search:e.target.value})
}

handleClick(){
axios.get(`/api/history/?title=${this.state.search}`)
.then((response)=>{
    console.log(response)
})
}

render() {
    return (
        <div>
             <input onChange={this.handleChange} placeholder='Event'></input>
             <button onClick={this.handleClick}>Search</button>
        </div>
    )
}
}
export default Search ;
