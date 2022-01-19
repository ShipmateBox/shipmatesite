import {useState, useEffect} from 'react';


function windowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return{width, height};
}

function GetWindowDimensions() {
  const [dimensions, setDimensions] = useState(windowDimensions())

  useEffect(()=>{
    function handleResize() {
      setDimensions(windowDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
}

export {GetWindowDimensions};
