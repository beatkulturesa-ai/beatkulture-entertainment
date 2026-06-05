import { useParams } from 'react-router-dom';

const EventPlanner = () => {
  const { quoteId } = useParams();
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Event Planner</h1>
      <p className="text-gray-600 mt-2">Plan event for quote #{quoteId}</p>
    </div>
  );
};

export default EventPlanner;
