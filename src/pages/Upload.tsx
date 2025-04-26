
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Upload as UploadIcon } from "lucide-react";
import Navbar from "@/components/Navbar";

const Upload = () => {
  const [uploading, setUploading] = useState(false);
  const [gameFile, setGameFile] = useState<File | null>(null);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    
    // Имитация загрузки
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Игра загружена!",
        description: "Ваша игра будет проверена модераторами и скоро появится на сайте.",
      });
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="container max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Загрузить игру
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <Label htmlFor="title">Название игры</Label>
            <Input id="title" placeholder="Введите название игры" required />
          </div>
          
          <div className="space-y-4">
            <Label htmlFor="gameType">Тип релиза</Label>
            <Select defaultValue="demo">
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="demo">Демо-версия</SelectItem>
                <SelectItem value="alpha">Альфа-версия</SelectItem>
                <SelectItem value="beta">Бета-версия</SelectItem>
                <SelectItem value="classic">Классика</SelectItem>
                <SelectItem value="cancelled">Отмененная игра</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-4">
            <Label htmlFor="description">Описание</Label>
            <Textarea id="description" placeholder="Расскажите об игре..." className="min-h-32" required />
          </div>
          
          <div className="space-y-4">
            <Label htmlFor="gameFile">Файл игры</Label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center border-primary/20 hover:border-primary/50 transition-colors">
              <UploadIcon className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-4">ZIP, RAR или EXE файл (макс. 1GB)</p>
              <Input 
                id="gameFile" 
                type="file" 
                className="hidden" 
                onChange={(e) => setGameFile(e.target.files?.[0] || null)}
                required
              />
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => document.getElementById("gameFile")?.click()}>
                {gameFile ? gameFile.name : "Выбрать файл"}
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <Label htmlFor="screenshot">Скриншот игры</Label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center border-primary/20 hover:border-primary/50 transition-colors">
              <UploadIcon className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-4">JPG, PNG (макс. 5MB)</p>
              <Input 
                id="screenshot" 
                type="file" 
                accept="image/*"
                className="hidden" 
                onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
                required
              />
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => document.getElementById("screenshot")?.click()}>
                {screenshot ? screenshot.name : "Выбрать изображение"}
              </Button>
            </div>
          </div>
          
          <Button type="submit" className="w-full" disabled={uploading}>
            {uploading ? "Загрузка..." : "Опубликовать игру"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Upload;
