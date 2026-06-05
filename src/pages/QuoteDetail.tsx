import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Quote #{id}</h1>
      <p className="text-gray-600 mt-2">Quote details</p>
    </div>
  );
};

export default QuoteDetail;
