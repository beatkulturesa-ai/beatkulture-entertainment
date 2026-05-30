import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Play } from "lucide-react";

interface Effect {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  youtubeId: string;
  icon: string;
}

const EffectsShowcase = () => {
  const [selectedEffect, setSelectedEffect] = useState<Effect | null>(null);

  const effects: Effect[] = [
    {
      id: "uplighting",
      name: "Up Lighting",
      description: "Creates ambient lighting that enhances your venue's architecture and atmosphere. Perfect for setting the mood and creating depth.",
      benefits: [
        "Transforms venue appearance",
        "Creates professional ambiance",
        "Highlights architectural features",
        "Customizable colors for any theme",
        "Energizes the dance floor"
      ],
      youtubeId: "YOUR_UPLIGHTING_VIDEO_ID",
      icon: "💡"
    },
    {
      id: "laser",
      name: "Laser Lighting",
      description: "High-impact laser effects that create dynamic patterns and animations. Adds excitement and energy to any event.",
      benefits: [
        "Creates stunning visual effects",
        "Mesmerizing light patterns",
        "Perfect for dance floors",
        "Synchronizes with music",
        "Professional entertainment grade"
      ],
      youtubeId: "YOUR_LASER_VIDEO_ID",
      icon: "🔴"
    },
    {
      id: "smoke",
      name: "Smoke Machine",
      description: "Dense, atmospheric smoke that works with lighting to create dramatic visual effects. Essential for concerts and high-energy events.",
      benefits: [
        "Enhances lighting visibility",
        "Creates dramatic atmosphere",
        "Perfect for entrances",
        "Fills the dance floor",
        "Professional event standard"
      ],
      youtubeId: "YOUR_SMOKE_VIDEO_ID",
      icon: "☁️"
    },
    {
      id: "lowfog",
      name: "Low Fog Effect",
      description: "Creates a cool, low-lying fog that stays near the ground. Perfect for dramatic entrances and mystical effects.",
      benefits: [
        "Stays low and dramatic",
        "Creates mystical atmosphere",
        "Perfect for unveilings",
        "Cools the venue",
        "Highly visual with lighting"
      ],
      youtubeId: "YOUR_LOWFOG_VIDEO_ID",
      icon: "❄️"
    },
    {
      id: "strobe",
      name: "Strobe Lighting",
      description: "High-speed flashing lights that create dynamic, high-energy effects. Great for keeping the crowd engaged.",
      benefits: [
        "Creates high-energy atmosphere",
        "Keeps crowds engaged",
        "Synchronized to music beats",
        "Professional lighting effect",
        "Customizable speeds and patterns"
      ],
      youtubeId: "YOUR_STROBE_VIDEO_ID",
      icon: "⚡"
    },
    {
      id: "moving-head",
      name: "Moving Head Lights",
      description: "Professional moving lights that track dancers and create dynamic lighting shows. Industry standard for premium events.",
      benefits: [
        "Tracks movement and dancers",
        "Creates light shows",
        "Professional appearance",
        "Fully programmable",
        "Creates spotlight effects"
      ],
      youtubeId: "YOUR_MOVINGHEAD_VIDEO_ID",
      icon: "🎬"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 gradient-text">Equipment & Effects Showcase</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our professional lighting and effects equipment. See exactly what you'll get with each package.
            </p>
          </div>

          {/* Effects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {effects.map((effect) => (
              <Card
                key={effect.id}
                className="p-6 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 hover:border-primary"
                onClick={() => setSelectedEffect(effect)}
              >
                <div className="text-5xl mb-4">{effect.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{effect.name}</h3>
                <p className="text-muted-foreground mb-4">{effect.description}</p>
                <Button className="w-full gap-2" variant="outline">
                  <Play className="w-4 h-4" />
                  Watch Video
                </Button>
              </Card>
            ))}
          </div>

          {/* Selected Effect Detail */}
          {selectedEffect && (
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Video Section */}
                <div>
                  <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedEffect.youtubeId}`}
                      title={selectedEffect.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Watch tutorial and examples on YouTube</p>
                </div>

                {/* Details Section */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl">{selectedEffect.icon}</span>
                    <h2 className="text-3xl font-bold">{selectedEffect.name}</h2>
                  </div>

                  <p className="text-muted-foreground mb-6 text-lg">{selectedEffect.description}</p>

                  <h3 className="text-xl font-bold mb-4">Key Benefits:</h3>
                  <ul className="space-y-3 mb-6">
                    {selectedEffect.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedEffect.youtubeId.startsWith('YOUR_') ? (
                    <Button disabled className="w-full" variant="outline">
                      Video Coming Soon
                    </Button>
                  ) : (
                    <Button
                      className="w-full gap-2"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${selectedEffect.youtubeId}`, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Full Video on YouTube
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          )}

          {/* FAQ Section */}
          <div className="mt-16 bg-muted p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Effects FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Can I combine effects?</h3>
                <p className="text-muted-foreground">Absolutely! Our packages allow multiple effects to work together for maximum impact.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Are effects safe?</h3>
                <p className="text-muted-foreground">Yes! All our equipment is professional-grade and meets safety standards.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Can effects be customized?</h3>
                <p className="text-muted-foreground">Yes! Colors, speeds, and patterns can be customized to match your theme.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Do I need a big venue?</h3>
                <p className="text-muted-foreground">No! Effects work great in any size space. We scale them to your venue.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EffectsShowcase;