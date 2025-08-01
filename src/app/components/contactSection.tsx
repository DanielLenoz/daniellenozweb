"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Mail, Phone, MapPin, Send } from "lucide-react";

// Interface for form data
interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // service_b9y8nxf
    emailjs
      .sendForm("service_b9y8nxf", "template_q7lnbmy", form.current ?? "", {
        publicKey: "J0rpwA8wQ8a8gd1XM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error: { text: string }) => {
          console.log("FAILED...", error.text);
        },
      );
  };
  //-----------------------------------------------------

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "danielstivenxx@gmail.com",
      href: "mailto:danielstivenxx@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "(+57) 3227047476",
      href: "tel:+573227047476",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Bogotá D.C, Colombia",
      href: "#",
    },
  ];

  return (
    <section
      id="contacto"
      className="bg-gradient-to-t from-gray-900/40 to-transparent px-4 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Contacto
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y
            colaborar contigo para crear algo extraordinario.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Hablemos
              </h3>
              <p className="mb-8 leading-relaxed text-gray-400">
                Estoy siempre abierto a discutir nuevas oportunidades, proyectos
                interesantes o simplemente charlar sobre tecnología y desarrollo
                web.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center space-x-4 rounded-lg border border-white/10 bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-4 transition-all duration-300 hover:scale-105 hover:border-white/20"
                  >
                    <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8">
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.user_name}
                  onChange={(e) =>
                    setFormData({ ...formData, user_name: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-white/20 bg-gray-800/50 p-1 text-white placeholder-gray-400 shadow-indigo-500/50 focus:border-blue-500 focus:shadow-lg focus:ring-1 focus:ring-blue-500 focus-visible:outline-none"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.user_email}
                  onChange={(e) =>
                    setFormData({ ...formData, user_email: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-white/20 bg-gray-800/50 p-1 text-white placeholder-gray-400 shadow-indigo-500/50 focus:shadow-lg focus:ring-1 focus:ring-blue-500 focus-visible:outline-none"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[120px] w-full rounded-lg border-2 border-white/20 bg-gray-800/50 p-1 text-white placeholder-gray-400 shadow-indigo-500/50 focus:border-blue-500 focus:shadow-lg focus:ring-1 focus:ring-blue-500 focus-visible:outline-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <button
                type="submit"
                value="Enviar Correo"
                className="flex w-full cursor-pointer justify-center gap-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Daniel Lenoz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
