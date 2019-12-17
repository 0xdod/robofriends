import React ,{Component} from 'react'
import {robots} from './robots'
import CardArray from './CardArray';
import Searchbox from './Searchbox';
import Scroll from './Scroll'
import {connect} from 'react-redux';
import {setSearchField} from './action'


function mapStateToProps(state){
    return {
        searchField: state.searchField
    }
}


function mapDispatchToProps(dispatch){
    return{
        onSearchChange: function(event){
            dispatch(setSearchField(event.target.value))
        }
    }
}
class App extends Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         robots:[],
    //     }
    // }

    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/users") 
    //     .then(response => response.json())
    //     .then(users => {
    //         this.setState({robots:users})
    //     })
    // }


    render(){

        const filtered = robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()))
        return (!robots.length) ? <h1>Loading Robots....</h1>:
        (
        <div className='tc'>
            <h1>RoboRoomies</h1>
            <Searchbox s = {this.props.onSearchChange}/>
            <Scroll>
                <CardArray robots={filtered} />
            </Scroll>
        </div>
        );
    }
}
 export default connect(mapStateToProps, mapDispatchToProps)(App)