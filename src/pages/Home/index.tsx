import NewAdded from "../NewAdded";
import PopBooks from "../PopBooks";

function Home(){
    return (
        <>
            <h2>Welcome</h2>
            <p>Welcome to Code and Coffee's Library</p>
            <NewAdded />
            <PopBooks />
        </>
    );    
}

export default Home;