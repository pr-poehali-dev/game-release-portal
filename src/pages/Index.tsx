
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Добро пожаловать в RetroGameVault</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Мы создаем архив редких, старых и демо-версий игр. Присоединяйтесь к нашему сообществу, чтобы делиться находками и открывать для себя игровую историю.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Исследовать игры
            </Button>
            <Button variant="outline" size="lg">
              Загрузить игру
            </Button>
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
