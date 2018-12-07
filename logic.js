var ToDoList = {}



ToDoList.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

ToDoList.generateDays = function () {
    ToDoList.days = [];
    for (var i = 1; i <= 31; i++) {
        ToDoList.days.push(i)
    }
}


ToDoList.generateYears = function () {
    ToDoList.years = [];
    for (var i = 2018; i <= 2050; i++) {
        ToDoList.years.push(i)
    }
}
ToDoList.init = function () {
    ToDoList.generateDays();
    ToDoList.generateYears()
}

ToDoList.init()


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='todolist'>
                <InputBar bgcolor='rgba(0,0,0,0.8)' text='MY TO DO LIST' font='white' source='https://image.shutterstock.com/image-illustration/todo-list-raster-pictogram-illustration-260nw-623169395.jpg' />
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
        this.dayS = [];
        this.add = this.add.bind(this);
        this.passToDone = this.passToDone.bind(this);
        this.passToDo = this.passToDo.bind(this);
        this.delete = this.delete.bind(this);
        this.changeDayList = this.changeDayList.bind(this);
        this.state = {
            tasks: [],
            doneTasks: [],
            key: 0,
            days: ToDoList.days
        }
    }
    delete(e){
        e.target.parentElement.remove();

    }
    passToDo(e) {
        var newDo = e.target.textContent;
        e.target.parentElement.remove();
        this.setState({
            tasks: this.state.tasks,
            key: this.state.key + 1
        })
        this.state.tasks.push(
            <li key={this.state.key + 1} className='list'>
                <div onClick={this.passToDone} className='result' >{newDo}</div>
                <button onClick={this.delete} className="trash-button"></button>
            </li>)
    }
    passToDone(e) {
        var newDone = e.target.textContent;
        e.target.parentElement.remove();
        this.setState({
            doneTasks: this.state.doneTasks,
            key: this.state.key + 1
        })

        this.state.doneTasks.push(
            <li key={this.state.key + 1} className='list'>
                <div onClick={this.passToDo} className='result' >{newDone}</div>
                <button onClick={this.delete} className="trash-button"></button>
            </li>)
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
        var ordinal = ""
        if (day == 1) {
            ordinal = 'st'
        } else if (day == 2) {
            ordinal = 'nd'
        }
        else if (day == 3) {
            ordinal = "rd"
        }
        else { ordinal = "th" }
        var date = ` on ${month}, ${day}${ordinal} ${year}`;
        var task = ` ${input}`
        this.state.tasks.push(
            <li key={this.state.key + 1} className='list'>
                <div onClick={this.passToDone} className='result'>{`${task}\u00A0${date}`}</div>
                <button onClick={this.delete} className="trash-button"></button>
            </li>)
        this.textInput.value = "";
    }
    renderOption(arr) {
        return arr.map(
            x => <option key={`item${x}`}>{x}</option>);

    }
    changeDayList(){
        var daysList = this.state.days;
        ((this.monthSelect.value == "February") || (this.monthSelect.value == "April") || (this.monthSelect.value == "June") || (this.monthSelect.value == "September") || (this.monthSelect.value == "November")) ? daysList = ToDoList.days.slice(0, 30) : daysList = ToDoList.days;
        this.setState({
            days: daysList
        })    
    }

    render() {
        return (
            <div className='tododone' >
                <div className='todo'>
                    <div>{this.props.day}</div>
                    <br />
                    <div className='add'>
                        <input type='text' placeholder=" Something new ? Add a task" ref={(input) => { this.textInput = input; }} />
                        <select ref={(select) => { this.daySelect = select; }}>
                            {this.renderOption(this.state.days)}
                        </select>
                        <select onChange={this.changeDayList} ref={(select) => { this.monthSelect = select; }}>
                            {this.renderOption(ToDoList.months)}
                        </select>
                        <select ref={(select) => { this.yearSelect = select; }}>
                            {this.renderOption(ToDoList.years)}
                        </select>
                        <button onClick={this.add}>Add</button><br />
                    </div>
                    <br />
                    <ul>
                        {this.state.tasks}
                    </ul>
                </div>
                <div className='done'>
                    <h2>Ok... That's done !</h2>
                    <br />
                    <br />
                    <ul>
                        {this.state.doneTasks}
                    </ul>
                </div>
            </div>
        )
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
