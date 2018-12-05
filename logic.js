class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='todolist'>
                <InputBar bgcolor='rgba(0,0,0,0.5)' text='TO DO LIST' font='white' source='http://chittagongit.com//images/todo-list-icon/todo-list-icon-18.jpg' />
                <div className='container'>
                    <List />
                </div>
            </div>
        )
    }

}
class InputBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className='InputBar' style={{ backgroundColor: this.props.bgcolor, color: this.props.font }}>
                <img src={this.props.source}></img>
                <div>{this.props.text}</div>
            </div>
        )
    }

}
class List extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.state = {
            tasks: [],
            key: 0
        }
    }
    add() {
        this.setState({
            tasks: this.state.tasks,
            key: this.state.key + 1

        })
        var day = this.daySelect.value;
        var month = this.monthSelect.value;
        var year = this.yearSelect.value;
        var input = this.textInput.value;
        var task = ` ${input} On ${day}.${month}.${year}`;
        this.state.tasks.push(<li key={this.state.key + 1} className='list'><input type="checkbox"></input><div>{task}</div></li>)
    }
    render() {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = [];
        var years = [];
        for (var i = 1; i <= 31; i++) {
            days.push(i)
        }
        for (var i = 2018; i <= 2050; i++) {
            years.push(i)
        }
        var daysDropdown = days.map(
            x => <option key={`item${x}`}>{x}</option>);
        var monthsDropdown = months.map(
            x => <option key={`item${x}`}>{x}</option>);
        var yearsDropdown = years.map(
            x => <option key={`item${x}`}>{x}</option>);
        return (
            <div className='tododone' >
                <div className='todo'>
                    <div>{this.props.day}</div>
                    <br />
                    <div className='add'>
                        <input type='text' placeholder=" Something new ? Add a task" ref={(input) => { this.textInput = input; }} />
                        <select ref={(select) => { this.daySelect = select; }}>
                            {daysDropdown}
                        </select>
                        <select ref={(select) => { this.monthSelect = select; }}>
                            {monthsDropdown}
                        </select>
                        <select ref={(select) => { this.yearSelect = select; }}>
                            {yearsDropdown}
                        </select>
                        <button onClick={this.add}>Add</button><br />
                    </div>
                    <br />
                    <ul>
                        {this.state.tasks}
                    </ul>
                </div>
                <div className='done'>
                    <br />
                    <span>You made it !</span>
                    <br />
                </div>
            </div>
        )
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);