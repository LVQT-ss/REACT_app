import React from 'react';

class MyComponent extends React.Component {


    //key:value
    //state lưu lại trạng thái ứng dụng không cần load lại trang 
    //setState để thay đổi lại set dữ liệu thay đổi state
    state = {
        name : ' ethinhle ',
        channel:'hoi dan it '
    }
    // return block 
    // cách để bọc 2 div thì dùng react.fragment hoặc <></>
    // state là 1 object có key và value 

    handleOnChangeName = (event) => { 
        this.setState({
            name: event.target.value,
            channel:'abc'
        })
    }

    handleClickButton=()=>{
        alert('click me')
    }

    render() {
        console.log('>>> call render ',this.state)


        return (
            <>
            <div className='first'> 
            
            <input value={this.state.name} type='text'

            onChange={(event) => this.handleOnChangeName(event)}
            />
            this is not a div </div>
            <div>
                hello my component my name is {this.state.name}
            </div>
            <div>my ytb is sht {this.state.channel} </div>

            <div className='third'>
                <button onClick={() => this.handleClickButton()}>clickme </button>
            </div>
            </>
        );
    }
}

export default MyComponent;
