// import React,{ useState} from "react";


import React, {useState, useEffect} from "react";


export const Counter = () => {
    const [count, setCount] = useState(0);

    const handelClick = () => {
        setCount(prevCount => prevCount + 1);//state
        console.log(count)
    };

    useEffect(() => {
        console.log(' did mount ')
    }, []); //усли в хук передаем пустой массив то будет только did mount

    useEffect(() =>{
        console.log('did mount + did update')
    }); //если ничего не передаем то будет монтирование + обновление, используется редко

    useEffect(() =>{
        console.log('did mount + let, const changed')
    }, [count]); //если поместить переменную то этаа ф-ция будет срабатывваать только тогда, когда переменная изменилась, можно передавать сколько угодно переменных

    useEffect(()=> {
        //const timeOut = setInterval(() => setCount(prevCount => prevCount +1), 2000);//перевызов ф-ции через определенное время 
        return()=> {
            //clearTimeout(timeOut);
            console.log(' unmounting')
        }
    }, []);//  что бы размонтировать нужно вернуть из useEffect функцию



    return(
        <div>
            <h3>{count}</h3>
            <button onClick= {handelClick}>Click</button>
        </div>
    );
}




// export class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0
//         };
//         console.log('------конструктор------');
//     }

//    componentDidMount(){
//     console.log('------did Mount (Монтирование)------');
//     this.setState({
//         count: this.state.count + 1
//     })
//    } 

//    componentDidUpdate(prevProps, prevState){
//     console.log('------did Update (Обновление)------',prevProps, prevState);
//    }

//    componentWillUnmount(){
//     console.log('------will unmount (Размонтирование)------');
//    }
//     handelClick = () => {
//         this.setState(prevState => ({ count: prevState.count + 1 }), //state
//         () => {
//             console.log(this.state.count);
//         }
//         );
//        }
//     render(){
//         console.log('------рендер------');
//         return(
//         <div>
//           <h3>{this.state.count}</h3>
//            <button onClick= {this.handelClick}>Click</button>
//         </div>
//         );
//     }
// }