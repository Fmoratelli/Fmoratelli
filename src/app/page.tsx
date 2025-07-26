import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 p-8">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-4">
          Construa sua Carreira com IA — do seu jeito, no seu ritmo.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Descubra como a Inteligência Artificial pode se tornar sua principal aliada
          para evoluir na carreira, inovar no seu negócio e se destacar no mercado —
          com uma jornada personalizada e prática.
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl">Quero descobrir meu perfil com IA</Button>
      </section>

      {/* Etapas da Jornada */}
      <section className="max-w-5xl mx-auto py-12">
        <h2 className="text-2xl font-semibold text-center mb-10">A Jornada com IA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Despertar", desc: "Entenda o que é IA e como ela muda o jogo." },
            { title: "Exploração", desc: "Identifique onde aplicar IA no seu contexto." },
            { title: "Experimentação", desc: "Comece a usar ferramentas e criar valor." },
            { title: "Autoridade", desc: "Desenvolva projetos próprios e se posicione." },
            { title: "Futurabilidade", desc: "Evolua continuamente com visão estratégica." },
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sobre Fabi */}
      <section className="max-w-3xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Quem é Fabi Moratelli</h2>
        <p className="text-gray-700">
          Estrategista digital, criadora do método de Carreira com IA e mentora de profissionais que querem transformar IA em competência estratégica nos seus negócios e carreiras. Sua missão é tornar a IA acessível, prática e lucrativa para pessoas com propósito.
        </p>
      </section>

      {/* CTA Final */}
      <section className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">Quer descobrir como a IA pode transformar sua carreira?</h3>
        <Button className="text-lg px-6 py-3 rounded-2xl">Fazer o teste de perfil</Button>
      </section>
    </div>
  );
}
