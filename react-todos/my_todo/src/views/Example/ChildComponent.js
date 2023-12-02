import React from 'react';

// class ChildComponent extends React.Component {


//     //key:value
//     //state lưu lại trạng thái ứng dụng không cần load lại trang 
//     //setState để thay đổi lại set dữ liệu thay đổi state
//     // state = {
//     //     firstName:'',
//     //     lastName:''

//     // }
//     // // return block 
//     // // cách để bọc 2 div thì dùng react.fragment hoặc <></>
//     // // state là 1 object có key và value 

//     // handleChangeFirstName = (event) =>{
//     //     this.setState({
//     //         firstName: event.target.value
//     //     })
//     // }
//     // handleChangeLastName = (event) =>{
//     //     this.setState({
//     //         lastName: event.target.value
//     //     })
//     // }
//     // handleSubmit = (event) => {
//     //     event.preventDefault()
//     //     console.log('check data input :', this.state)
//     // }

//     render() {
//         console.log('>>> check props  ', this.props)
//         // let name = this.props.name;
//         // let age = this.props.age;
//         let {name,age , address,arrJobs} = this.props;
//         //re-render
//         return (
           
//             <>
//             <div className='job-lists'>
//                 {
//                     arrJobs.map((item,index) => {
//                         return(
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//                                 </>
//                                     );
//     }
// }

    const ChildComponent = (props) => { 

        let {arrJobs} = props;
        return (
           
            <>
            <div className='job-lists'>
                {
                    arrJobs.map((item,index) => {
                        return(
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                }
            </div>
                                </>
        )
    }


                                    export default ChildComponent;
