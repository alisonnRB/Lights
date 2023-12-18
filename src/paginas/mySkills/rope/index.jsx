import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';

import Ropes from '../../../drawble/corda.png';

export default function Rope(props) {
  const [grabbing, setGrabbing] = useState(false)
  const [action, setAction] = useState(false);
  const [{ y, height }, set] = useSpring(() => ({ y: 0, height: 100, config: { tension: 200, friction: 20 } }));


  useEffect(() => {
    if (action) {
      props.setAction(true);
    }else{
      props.setAction(false);
    }
  }, [action])

  

  const bind = useGesture({
    onDrag: ({ down, movement: [_, my] }) => {
      if (down) {
      
        if (100 + my >= 300) {
          setAction(true);
          return;
        }

        setGrabbing(true);
        set.start({ y: my, height: 100 + my });


      } else {
        setGrabbing(false);
        setAction(false);
        set.start({ y: 0, height: 100 });
      }
    },
  });

  return (
    <div className="content-rope">
      <animated.div
        {...bind()}
        className='ropes'
        style={{
          width: '30px',
          height,
          maxHeight: '300px',
          cursor: grabbing ? 'grabbing' : 'grab',
          touchAction: 'none',
          userSelect: 'none',
        }}
      />
    </div>
  );
};

