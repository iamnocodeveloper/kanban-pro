import React from 'react';
import { Send, Users, Phone, Bot } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      title: 'Nueva Campaña',
      description: 'Crear campaña masiva',
      icon: Send,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      title: 'Importar Contactos',
      description: 'Gestionar listas',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      title: 'Conectar WhatsApp',
      description: 'Nueva línea de negocio',
      icon: Phone,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      title: 'Configurar Bot',
      description: 'IA automatizada',
      icon: Bot,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h2>
      <p className="text-sm text-gray-600 mb-6">Accede rápidamente a las funciones más utilizadas</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className={`${action.bgColor} ${action.hoverColor} p-4 rounded-lg transition-colors duration-200 text-left group`}
            >
              <div className="flex items-center space-x-3">
                <div className={`${action.color} p-2 rounded-lg bg-white shadow-sm`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={`font-medium ${action.color} group-hover:text-opacity-80`}>
                    {action.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {action.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;