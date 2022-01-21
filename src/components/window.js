import {useState, useEffect} from 'react';


function windowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return{width, height};
}

function GetWindowDimensions() {  //update window size in hook
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

function distanceToTop(element) {
  let distance = null
  if(element) {
    distance = element.getBoundingClientRect().y
  }
  return distance;
}

function GetDistanceToTop(id, dist) { //Return hook true if dist to top < dist
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    let triggered = false;  //prevent retrigering
    const element = document.getElementById(id);
    function handleScroll() {
      if(distanceToTop(element) < dist && triggered === false) {
        setTrigger(true)
        triggered=true;
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return trigger;
}

export {GetWindowDimensions, GetDistanceToTop};
