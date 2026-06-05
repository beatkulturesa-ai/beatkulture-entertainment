import { useParams } from 'react-router-dom';

const SongRequest = () => {
  const { eventId } = useParams();
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Song Requests</h1>
      <p className="text-gray-600 mt-2">Request songs for event #{eventId}</p>
    </div>
  );
};

export default SongRequest;
