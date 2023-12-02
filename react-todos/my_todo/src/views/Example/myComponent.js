import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component {


    //key:value
    //state lưu lại trạng thái ứng dụng không cần load lại trang 
    //setState để thay đổi lại set dữ liệu thay đổi state
    state = {
        firstName:'',
        lastName:'',
        arrJobs:[
            {id:'abcJob1',title:'developer',salary:'500$'},
            {id:'abcJob2',title:'tester',salary:'400$'},
            {id:'abcJob3',title:'project manafer',salary:'1000$'}
        ]
    }
    // return block 
    // cách để bọc 2 div thì dùng react.fragment hoặc <></>
    // state là 1 object có key và value 

    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('check data input :', this.state)
    }

    render() {
        console.log('>>> call render ', this.state)


        return (
           
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                        />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input 
                    type="text" 
                    value={this.state.lastName} 
                    onChange={(event) => this.handleChangeLastName(event)}
                    /><br /><br />
                    <input type="submit" 
                    onClick={(event)=> this.handleSubmit(event)}
                    />
                                    </form>
                                    <ChildComponent 
                                    name={this.state.firstName}
                                    age={'20'}
                                    address={'sai gone'}
                                    arrJobs={this.state.arrJobs}
                                    />

                                </>
                                    );
    }
}

                                    export default MyComponent;
