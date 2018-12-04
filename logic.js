class App extends React.Component {
    constructor(props) {
        super(props);
        this.writeTask=this.writeTask.bind(this)
        this.state = {
            tasks: []
        }
    }
    writeTask(update){
        var updatedTasks = this.state.tasks;
        updatedTasks.push(update);
        this.setState({
            tasks: updatedTasks
        })
    }
    render() {
        return (
            <div className='todolist'>
                <Title bgcolor='red' text='TO DO LIST' font='black' source='https://img.icons8.com/metro/1600/todo-list.png' updateList={this.writeTask}/>
                <div className='container'>
                    <List addedTask={this.state.tasks}/>
                </div>
            </div>
        )
    }

}
class Title extends React.Component {
    constructor(props) {
        super(props);
        this.add=this.add.bind(this)
    }
    add(){
        var day = this.daySelect.value;   
        var month = this.monthSelect.value;   
        var year = this.yearSelect.value;   
        var input = this.textInput.value;
        var task = `${input} on ${day}.${month}.${year}`;
        this.props.updateList(task);   

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
            <div className='Title' style={{ backgroundColor: this.props.bgcolor, color: this.props.font }}>
                <img src={this.props.source}></img>
                <div>{this.props.text}</div>
                <div className='add'>
                    <input type='text' placeholder="Add a task" ref={(input) => { this.textInput = input; }} />
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
            </div>
        )
    }

}
class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var list=this.props.addedTask.map(
            x => <li key={`item${x}`}>{x}</li>
        )
        return (
            <div className='tododone' >
                <div className='todo'>
                    <div>{this.props.day}</div>
                    <br />
                    <span>Something for today?</span>
                    <br />
                    <br />
                    <ul>
                        {list}
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