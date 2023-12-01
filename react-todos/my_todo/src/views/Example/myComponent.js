import React from 'react';

class MyComponent extends React.Component {


    //key:value
    state = {
        name : ' ethinhle ',
        chanel:'hoi dan it '
    }
    // return block 
    // cách để bọc 2 div thì dùng react.fragment hoặc <></>
    // state là 1 object có key và value 

    handleOnChangeName = (event) => { 
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton=()=>{
        console.log('hit the button ')
        alert('click me')
    }

    render() {
        let name = 'Eric';

        console.log('my name is : ', name); // Move console.log outside of the return statement

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
            <div>my ytb is sht {this.state.chanel} </div>
            <div className='third'>
                <button onClick={() => this.handleClickButton()}>clickme </button>
            </div>
            </>
        );
    }
}

export default MyComponent;
