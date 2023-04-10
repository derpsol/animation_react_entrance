import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import circle from "../../assets/images/Ellipse.png";
import { Timeline, Tween } from "react-gsap";
import Entrance from "../entrance";

const content = [
  "Ready To Play?",
  "click to enter the portal",
  "Ready To Play?",
  "click to enter the portal",
];

function Welcome() {
  const [textId, setTextID] = useState(0);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      setTextID((prevTextId) => (prevTextId + 1) % content.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (count >= 4) {
      setVisible(true);
    }
  }, [count]);

  return (
    <Box position="relative">
      <Box bgcolor="#88222B" height="100vh">
        <Box display="flex" alignItems="center" flexDirection="column">
          <Timeline
            target={
              <Box
                component="img"
                mt="40vh"
                width="100px"
                height="100px"
                src={circle}
              />
            }
            repeat={10000}
          >
            <Tween from={{ y: 0 }} to={{ y: 20 }} duration={0.8} />
            <Tween from={{ y: 20 }} to={{ y: 0 }} duration={0.8} />
          </Timeline>
          <Timeline
            target={
              <Box mt="10vh">
                <Typography
                  fontSize={textId % 2 === 0 ? "64px" : "48px"}
                  fontFamily="Georgia"
                  fontWeight="900"
                  color="white"
                  lineHeight='64px'
                >
                  {content[textId]}
                </Typography>
              </Box>
            }
            repeat={10000}
          >
            <Tween
              from={{ scaleX: 1.1, scaleY: 1.1 }}
              to={{ scaleX: 1, scaleY: 1 }}
              duration={1.5}
            />
            <Tween
              from={{ scaleX: 1, scaleY: 1 }}
              to={{ scaleX: 1.1, scaleY: 1.1 }}
              duration={1.5}
            />
          </Timeline>
          <Button
            onClick={() => {
              setCount(4);
            }}
            sx={{
              mt: "20vh",
            }}
          >
            <Typography
              fontSize="32px"
              fontFamily="Georgia"
              fontWeight="900"
              color="white"
            >
              sign in to skip
            </Typography>
          </Button>
        </Box>
      </Box>
      {visible ? (
        <Box position="absolute" top={0} left="-50px">
          <Entrance />
        </Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}

export default Welcome;
