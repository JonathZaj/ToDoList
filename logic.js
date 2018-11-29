class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='todolist'>
                <Title bgcolor='red' text='TO DO LIST' font='black' source='https://img.icons8.com/metro/1600/todo-list.png' />
                <div className='container'>
                    <List day='Sunday' length='25' /><List day='Monday' length='25'/><List day='Tuesday' length='25'/><List day='Wednesday' length='25' /><List day='Thursday' length='25'/><List day='Friday' length='25'/><List day='Saturday' length='25'/>
                </div>
            </div>
        )
    }

}
class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='Title' style={{ backgroundColor: this.props.bgcolor, color: this.props.font }}>
                <img src={this.props.source}></img>
                <div>{this.props.text}</div>
            </div>
        )
    }

}
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='tododone' >
                <div className='todo'>
                    <div>{this.props.day}</div>
                    <br />
                    <span>Something for today?</span>
                    <br />
                    <br />
                    <input maxLength={this.props.length} ></input>
                    <input maxLength={this.props.length}></input>
                    <input maxLength={this.props.length}></input>
                    <input maxLength={this.props.length}></input>
                    <input maxLength={this.props.length}></input>
                    <input maxLength={this.props.length}></input>
                    <input maxLength={this.props.length}></input>
                    <input maxLength={this.props.length}></input>

                </div>
                <div className='done'>
                    <br />
                    <br />
                    <input maxLength={this.props.length}></input>
                    <input maxLength={this.props.length}></input>
                    <input maxLength={this.props.length}></input>
                </div>
            </div>
        )
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);