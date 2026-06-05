import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white mb-4">BeatKulture Entertainment</h1>
      <p className="text-xl text-gray-300 mb-8">DJ Booking & Event Management</p>
      <div className="flex gap-4">
        <Link to="/auth">
          <Button size="lg">Get Started</Button>
        </Link>
        <Link to="/dashboard">
          <Button size="lg" variant="outline">Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
