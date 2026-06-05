import { useParams } from 'react-router-dom';

const QuoteEdit = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Edit Quote #{id}</h1>
      <p className="text-gray-600 mt-2">Edit quote information</p>
    </div>
  );
};

export default QuoteEdit;
