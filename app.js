class TodoListItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            done: false
        };
    }

    onListItemClick() {
        this.setState({
          done: !this.state.done
        });
      }

render() {
    var style = {
        textDecoration: this.state.done ? 'line-through' : 'none'
      };

      return (
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
      );
    // return (
    //     <li>{this.props.todo}</li>
    // );

    }
}


var array = ['Cucumber', 'Kale', 'Coffee','Salad'];
var App = (props) => (
   
    
    <div>   
    <ul>
    <h2>Grocery List</h2>

    {props.todos.map(todo =>
        <TodoListItem todo = {todo}/>
    )}  
    </ul>

    </div>
);

ReactDOM.render(<App todos = {array}/>, document.getElementById("app"));
