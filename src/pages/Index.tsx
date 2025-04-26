
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GameCard from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DEMO_GAMES = [
  {
    id: "1",
    title: "Half-Life: Uplink",
    imageUrl: "https://source.unsplash.com/random/300x200/?scifi",
    developer: "Valve",
    releaseYear: 1999,
    version: "Demo 1.0",
    type: "demo" as const,
    downloads: 45789,
    size: "124 МБ"
  },
  {
    id: "2",
    title: "Silent Hill P.T.",
    imageUrl: "https://source.unsplash.com/random/300x200/?horror",
    developer: "Kojima Productions",
    releaseYear: 2014,
    version: "Demo",
    type: "demo" as const,
    downloads: 156432,
    size: "1.3 ГБ"
  },
  {
    id: "3",
    title: "Resident Evil Village",
    imageUrl: "https://source.unsplash.com/random/300x200/?castle",
    developer: "Capcom",
    releaseYear: 2021,
    version: "Maiden Demo",
    type: "demo" as const,
    downloads: 89564,
    size: "4.2 ГБ"
  },
  {
    id: "4",
    title: "Star Craft: Ghost",
    imageUrl: "https://source.unsplash.com/random/300x200/?space",
    developer: "Blizzard",
    releaseYear: 2006,
    version: "Alpha 0.3",
    type: "alpha" as const,
    downloads: 32145,
    size: "850 МБ"
  },
  {
    id: "5",
    title: "Duke Nukem Forever",
    imageUrl: "https://source.unsplash.com/random/300x200/?action",
    developer: "3D Realms",
    releaseYear: 2001,
    version: "E3 Build",
    type: "alpha" as const,
    downloads: 76543,
    size: "562 МБ"
  },
  {
    id: "6",
    title: "Deus Ex: Human Revolution",
    imageUrl: "https://source.unsplash.com/random/300x200/?cyberpunk",
    developer: "Eidos Montreal",
    releaseYear: 2011,
    version: "Beta 2.1",
    type: "beta" as const,
    downloads: 54789,
    size: "3.8 ГБ"
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredGames = activeTab === "all" 
    ? DEMO_GAMES 
    : DEMO_GAMES.filter(game => game.type === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">Библиотека игр</h2>
              <p className="text-muted-foreground">Найдите и скачайте редкие, старые и демо-версии игр</p>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="demo">Демо</TabsTrigger>
                <TabsTrigger value="alpha">Альфа</TabsTrigger>
                <TabsTrigger value="beta">Бета</TabsTrigger>
                <TabsTrigger value="classic">Классика</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map(game => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">Загрузить еще</Button>
          </div>
        </div>
      </main>
      
      <footer className="bg-primary/5 border-t border-primary/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            RetroGameVault © 2025 — Архив старых, демо и альфа-версий игр
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Все игры загружены пользователями. Мы не храним нелегальный контент.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
