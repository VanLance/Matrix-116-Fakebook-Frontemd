import Body from '../components/Body';
import Counter from '../components/Counter';

export default function Workouts() {
  const workoutArray = [
    'pushups',
    'squats',
    'burpees',
    'swings',
    'jumping jacks',
  ];

  return (
    <Body sidebar>
      {workoutArray.map((workout) => {
        return <Counter exercise={workout} key={workout} />;
      })}
    </Body>
  );
}
