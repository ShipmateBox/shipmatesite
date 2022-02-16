import Rive from 'rive-react';
import {useRive, useStateMachineInput} from 'rive-react';
import lockboxDelivery from '../lockboxDelivery.riv';

function LockboxDeliveryRive() {
  const STATE_MACHINE_NAME = 'StateMachine';
  const INPUT_NAME = 'start';

  const { RiveComponent, rive } = useRive({
    src: lockboxDelivery,
    stateMachines: STATE_MACHINE_NAME,
    artboard: 'Lockbox Delivery',
    autoplay: true
  });

  const onTrigger = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  );

  return <RiveComponent onClick={() => onTrigger.fire()}/>;
}

export default LockboxDeliveryRive;
