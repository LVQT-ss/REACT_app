import React from 'react';
import './Demo.scss'
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete= (job) =>{
       console.log('>>>handle',job)
       this.props.deleteAJob(job)
    }
    render() {


        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional ',check)
        return (

            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-show"
                         onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                :
                    <>
                        <div className='job-lists'>
                            {
                                arrJobs.map((item, index) => { 
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> <button onClick={()=> this.handleOnclickDelete(item)}>x</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button
                                onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }     </>
        );
    }
}

// const ChildComponent = (props) => { 

//     let {arrJobs} = props;
//     return (

//         <>
//         <div className='job-lists'>
//             {
//                 arrJobs.map((item,index) => {
//                     if(item.salary >= 500){


//                     return(
//                         <div key={item.id}>
//                             {item.title} - {item.salary} $
//                         </div>
//                     )
//                     }
//                 })
//             }
//         </div>
//                             </>
//     )
// }


export default ChildComponent;
