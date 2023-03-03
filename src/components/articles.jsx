import { Button,Box } from "@mui/material";
import News from "../components/data/data";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/system";


const Article =({handleClose})=>{

const {state} = useLocation()
console.log(state)



return(

    <div style={{backgroundColor:"whitesmoke"}}>
    <Button varient="text" href='/' >Back</Button>
    <Container>

    <Box >
        <h1>
        {state.title}
        </h1>
        <img
          style={{ width:"100%", height:"350px"}}
          src={state.image}
          alt="im"
        />
        <p  style={{fontSize:"20px"}}>{state.desc}</p>


     </Box>
    </Container>
  
    </div>
)
}


export default Article;