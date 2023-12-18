import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';

export default function Rope(props) {
  const [grabbing, setGrabbing] = useState()
  const [action, setAction] = useState();
  const [{ y, height }, set] = useSpring(() => ({ y: 0, height: 100, config: { tension: 200, friction: 20 } }));


  useEffect(() => {
    if (action) {
      props.setAction(true);
    }
  }, [action])

  const bind = useGesture({
    onDrag: ({ down, movement: [_, my] }) => {
      if (down) {
        if (100 + my >= 200) {
          setAction(true);
          return;
        }

        setGrabbing(true);
        set.start({ y: my, height: 100 + my });


      } else {
        setGrabbing(false);
        set.start({ y: 0, height: 100 });
      }
    },
  });

  return (
    <div className="content-rope">
      <animated.div
        {...bind()}
        style={{
          width: '10px',
          height,
          maxHeight: '200px',
          backgroundColor: '#B4B0AD',
          cursor: grabbing ? 'grabbing' : 'grab',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          boxShadow: 'inset 6px -6px 6px -4px #000000be'
        }}
      />
    </div>
  );
};

