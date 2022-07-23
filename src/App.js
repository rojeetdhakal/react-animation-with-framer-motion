import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [rotate, setrotate] = useState(false);
  const [move, setmove] = useState(false);
  return (
    <>
      <div className="container">
      <h1 style={{color:"yellow"}}>React Animation using framer motion</h1>
      
        <motion.div
        whileHover={{scale:2}}
        drag whileDrag={{scale:2}} 
        // animate={{ rotate: rotate ? 180 : 0 }}
        //   onClick={() => {
        //     setrotate(!rotate);
        //   animate={{ x: move ? 300 : -300 }}
        //   transition={{type:'tween' , duration:1}}
        //   transition={{type:'spring' , bounce:1}}

        //   onClick={() => {
        //     setmove(!move);
        //   }}
          animate={{
            rotate: [1, 200, 200, 1],
            x: [0, 200, 200, 0, -200, -200, 0]
          }}
          transition={{ type: "tween", duration: 1, repeat: Infinity }}
        ></motion.div>
      </div>
    </>
  );
}

export default App;
