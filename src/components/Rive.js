import {useEffect} from 'react';
import {useRive, useStateMachineInput} from 'rive-react';
import lockboxDelivery from '../lockboxDelivery.riv';
import {GetDistanceToTop} from './window';


function LockboxDeliveryRive() {
  const STATE_MACHINE_NAME = 'StateMachine';
  const TRIGGER_NAME = 'start';
  const distanceMet = GetDistanceToTop('lockboxDeliverRive', window.innerHeight*2/3);

  useEffect(() => {
    if(distanceMet === true) {
      onTrigger.fire();
    }
  }, [distanceMet]);

  const { RiveComponent, rive } = useRive({
    src: lockboxDelivery,
    stateMachines: STATE_MACHINE_NAME,
    artboard: 'Lockbox Delivery',
    autoplay: true,
  }, {
    fitCanvisToArtboardHeight: false,
  });

  const onTrigger = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    TRIGGER_NAME
  );


  return <RiveComponent id='lockboxDeliverRive' onClick={() => onTrigger.fire()}/>;
}

export default LockboxDeliveryRive;
