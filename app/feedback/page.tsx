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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const saveSettings = async (params: any) => {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    try {
      await sleep(1200);
      const response = await fetch("/api/v1/feedback", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
    } catch (error: any) {
      throw new Error(`Erro ao enviar o feedback: ${error.message}`);
    }

    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Nome deve ter mais que duas letras",
    }),
    company: z.string().min(2, {
      message: "Empresa deve ter mais que 2 letras",
    }),
    description: z.string().min(50, {
      message: "Feedback precisa de no mínimo 50 letras",
    }),
    showName: z.boolean().default(false),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      description: "",
      showName: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.promise(
      saveSettings(values),
      {
        loading: "Enviando...",
        success: (
          <div className="flex justify-center flex-col">
            <b className="text-center">Feedback enviado </b>
            <p className="text-xs text-justify mt-2">Obrigado pelo FEEDBACK!</p>
            <p className="text-xs text-justify mt-2 font-extrabold">
              Você será redirecionado!!!
            </p>
          </div>
        ),
        error: <b>Erro ao enviar feedback</b>,
      },
      {
        duration: 4000,
      }
    );
  }

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormMessage />
              <div className="grid gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid gap-4">
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Maria Silva" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid gap-4">
                        <FormLabel>Nome Empresa ou Software</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Google" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="showName"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>
                        Mostrar meu nome na lista de Avaliações
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid gap-4">
                        <FormLabel>Sua opinião/feedback</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="✨ Escreva sua mensagem aqui ✨"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Enviar
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
