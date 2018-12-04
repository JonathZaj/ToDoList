class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='todolist'>
                <Title bgcolor='red' text='TO DO LIST' font='black' source='https://img.icons8.com/metro/1600/todo-list.png' />
                <div className='container'>
                    <List day='Sunday' length='25' /><List day='Monday' length='25' /><List day='Tuesday' length='25' /><List day='Wednesday' length='25' /><List day='Thursday' length='25' /><List day='Friday' length='25' /><List day='Saturday' length='25' />
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
                    <button onClick={this.select}>Add</button><br />
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
        return (
            <div className='tododone' >
                <div className='todo'>
                    <div>{this.props.day}</div>
                    <br />
                    <span>Something for today?</span>
                    <br />
                    <br />
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