import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {


    //key:value
    //state lưu lại trạng thái ứng dụng không cần load lại trang 
    //setState để thay đổi lại set dữ liệu thay đổi state
    state = {
      
        arrJobs:[
            {id:'abcJob1',title:'developer',salary:'500'},
            {id:'abcJob2',title:'tester',salary:'400'},
            {id:'abcJob3',title:'project manafer',salary:'1000'}
        ]
    }
    // return block 
    // cách để bọc 2 div thì dùng react.fragment hoặc <></>
    // state là 1 object có key và value 

   
 

    render() {
        console.log('>>> call render ', this.state)


        return (
           
            <>
            <AddComponent/>
              
                                    <ChildComponent 
                                    
                                    arrJobs={this.state.arrJobs}
                                    />

                                </>
                                    );
    }
}

                                    export default MyComponent;
