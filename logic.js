var ToDoList = {}



ToDoList.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

ToDoList.generateDays = function () {
    ToDoList.days = [];
    for (var i = 1; i <= 31; i++) {
        ToDoList.days.push(i)
    }
    return ToDoList.day
}

ToDoList.generateYears = function () {
    ToDoList.years = [];
    for (var i = 2018; i <= 2050; i++) {
        ToDoList.years.push(i)
    }
    return ToDoList.day
}
ToDoList.init = function () {
    ToDoList.generateDays();
    ToDoList.generateYears()
}

ToDoList.init()


class App extends React.Component {
    constructor(props) {
        super(props);
        this.modal = this.modal.bind(this)

        this.state = {
            display: 'none'
        }
    }
    modal() {
        if (this.state.display === 'none'){

            this.setState({
                display: ''

            })
        }else{this.setState({
            display: 'none'

        })

        }

    }
    render() {
        return (
            <div className='todolist'>
                <NavBar bgcolor='rgba(0,0,0,0.8)' handleClick={this.modal} text='MY TO DO LIST' font='white' source='https://image.shutterstock.com/image-illustration/todo-list-raster-pictogram-illustration-260nw-623169395.jpg' source2='http://img.over-blog.com/231x300/3/89/36/53/point_d_interrogation-2bf4e1.png' />
                <div className='container'>
                    <List display={this.state.display} rules={`Hello guys,\nhere how to use our To Do List:\n 1-Write a task in the bar, choose a date and click on the button'Add' \n2-If you want to put your task in the done list(or put back in the to do list), click on the task.\n 3-If you want to remove a task, click on the trash.`} />
                </div>
            </div>
        )
    }

}
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.display = this.display.bind(this)
    }
    display() {
        this.props.handleClick()
    }
    render() {

        return (
            <div className='NavBar' style={{ backgroundColor: this.props.bgcolor, color: this.props.font }}>
                <img src={this.props.source}></img>
                <div>{this.props.text}</div>
                <img onClick={this.display} src={this.props.source2}></img>
            </div>
        )
    }

}
class List extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.passToDone = this.passToDone.bind(this);
        this.passToDo = this.passToDo.bind(this);
        this.delete = this.delete.bind(this);
        this.state = {
            tasks: [],
            doneTasks: [],
            key: 0
        }
    }
    delete(e) {
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
        console.log(newDone)
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

    render() {
        return (
            <div className='tododone' >
                <div className='todo'>
                    <div className='modal' style={{ display: this.props.display }}><p>{this.props.rules}</p></div>
                    <div>{this.props.day}</div>
                    <br />
                    <div className='add'>
                        <input type='text' placeholder=" Something new ? Add a task" ref={(input) => { this.textInput = input; }} />
                        <select className='day' ref={(select) => { this.daySelect = select; }}>
                            {this.renderOption(ToDoList.days)}
                        </select>
                        <select className='month' ref={(select) => { this.monthSelect = select; }}>
                            {this.renderOption(ToDoList.months)}
                        </select>
                        <select className='month' ref={(select) => { this.yearSelect = select; }}>
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
