import React from 'react';
import { Circle } from 'lucide-react';

const SystemStatus = () => {
  const statusItems = [
    {
      label: 'Campañas Activas',
      value: '0',
      status: 'active',
      color: 'text-blue-600'
    },
    {
      label: 'Total Contactos',
      value: '0',
      status: 'active',
      color: 'text-green-600'
    },
    {
      label: 'Conexiones WhatsApp',
      value: 'Sin conexiones',
      status: 'warning',
      color: 'text-yellow-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Estado del Sistema</h2>
      <p className="text-sm text-gray-600 mb-6">Resumen de tu cuenta</p>
      
      <div className="space-y-4">
        {statusItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Circle 
                className={`h-3 w-3 ${
                  item.status === 'active' ? 'text-green-500 fill-current' :
                  item.status === 'warning' ? 'text-yellow-500 fill-current' :
                  'text-gray-400 fill-current'
                }`} 
              />
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
            <span className={`text-sm font-medium ${item.color}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full btn-primary text-sm">
          Ver Mensajes
        </button>
      </div>
    </div>
  );
};

export default SystemStatus;