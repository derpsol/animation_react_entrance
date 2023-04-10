import { Box } from "@mui/material";
import doorBack from "../../assets/images/door_back.png";
import arch from "../../assets/images/Arch.png";
import { Timeline, Tween } from "react-gsap";

function Entrance() {
  return (
    <Box>
      <Box display="flex" justifyContent="center" position='absolute' top={0} left='50px'>
        <Timeline
          target={<Box component="img" src={doorBack} height='100vh' position="relative" />}
          repeat={0}
        >
          <Tween
            from={{ scaleX: 20, scaleY: 20 }}
            to={{ scaleX: 1, scaleY: 1 }}
            duration={1}
            ease="back.in(1)"
          />
        </Timeline>
        <Timeline
          target={
            <Box component="img" src={arch} position="absolute" mt="86px" />
          }
          repeat={0}
        >
          <Tween
            from={{ scaleX: 0.1, scaleY: 0.1, rotation: -90 }}
            to={{ scaleX: 1, scaleY: 1, rotation: 0 }}
            duration={1}
            ease="back.in(1)"
          />
        </Timeline>
      </Box>
    </Box>
  );
}

export default Entrance;
