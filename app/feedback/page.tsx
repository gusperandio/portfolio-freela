"use client";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

export default function Page() {
  const saveSettings = async (): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    //throw new Error('This is an example exception');
    return false;
  };

  const notify = () =>
    toast.promise(
      saveSettings(),
      {
        loading: "Enviando...",
        success: (
          <div className="flex justify-center flex-col">
            <b className="text-center">Feedback enviado </b>
            <p className="text-xs text-justify mt-2">
              Agradeço seu feedback, ele é super importante para evolução do
              meu trabalho.
            </p>
          </div>
        ),
        error: <b>Erro ao enviar feedback</b>,
      },
      {
        duration: 4000,
      }
    );

  return (
    <div className="h-full flex items-center flex-col justify-center">
      <div>
        {" "}
        <Toaster />
      </div>
      <Card className="mx-auto max-w-sm">
        <CardHeader className="flex items-center py-4">
          <CardTitle className="text-2xl">Feedback</CardTitle>
          <CardDescription className="text-center px-4 pb-4">
            Escreva uma mensagem dando o seu feedback sobre o serviço prestado
            por{" "}
            <span className="font-bold text-gray-800">Gustavo Sperandio</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="name"
                type="text"
                placeholder="Nome e Sobrenome"
                required
              />
            </div>
            <div className="flex flex-row gap-2">
              <Checkbox checked={true} /> 
              <Label htmlFor="text">Mostrar meu nome na lista de Avaliações</Label>
            </div>
            <div className="grid gap-2 mt-2">
              <div className="flex items-center">
                <Label htmlFor="password">Sua opnião</Label>
              </div>
              <Textarea placeholder="✨ Escreva sua mensagem aqui ✨" />
            </div>
            <Button type="submit" className="w-full" onClick={notify}>
              Enviar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
