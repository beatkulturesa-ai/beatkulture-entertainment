import { useEquipmentCatalog } from "@/hooks/useEquipmentCatalog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export const EquipmentShowcase = () => {
  const { equipment, isLoading, error } = useEquipmentCatalog();

  if (isLoading) {
    return (
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>Loading equipment showcase...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="equipment" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Professional Equipment</h2>
        
        {error && (
          <div className="mb-8 p-4 bg-destructive/10 border border-destructive rounded-lg flex gap-3">
            <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {equipment && equipment.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {equipment.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(item.name);
                    }}
                  />
                )}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">Equipment catalog coming soon!</p>
          </div>
        )}

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/effects">View All Effects & Equipment →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};