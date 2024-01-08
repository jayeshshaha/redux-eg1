import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const value = 10;
    const dispatch = useDispatch();
    // const { c } =  useSelector(state => state.custom)
    function addBtn(){
        dispatch({
            type:'increment',
        })
    }
    function subBtn(){
        dispatch({
            type:'decrement',
        })
    }

       function addBtn25(){
        dispatch({
            type:'incrementByValue',
            payload:25
        })
    }

  return (
    <div>
       {/* <h2>{c}</h2> */}
       <button onClick={addBtn}>Increment</button>
       <button onClick={subBtn}>Decrement</button>
       <button onClick={addBtn25}>Increment by 25</button>
    </div>
  )
}

export default Home

