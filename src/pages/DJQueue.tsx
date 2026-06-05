import { useParams } from 'react-router-dom';

const DJQueue = () => {
  const { eventId } = useParams();
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">DJ Queue</h1>
      <p className="text-gray-600 mt-2">Queue for event #{eventId}</p>
    </div>
  );
};

export default DJQueue;
