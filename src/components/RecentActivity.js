import React from 'react';
import { AlertCircle } from 'lucide-react';

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Actividad Reciente</h2>
      <p className="text-sm text-gray-600 mb-6">Últimas interacciones en tu plataforma</p>
      
      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-orange-50 p-3 rounded-full mb-4">
          <AlertCircle className="h-8 w-8 text-orange-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Conexión defdefr actualizada</h3>
        <p className="text-sm text-gray-600 text-center mb-4">
          WhatsApp +58 904622822 • Hace 6 horas
        </p>
        <p className="text-xs text-gray-500 text-center max-w-md">
          No hay actividad reciente. Conecta tu WhatsApp Business para comenzar a ver las interacciones.
        </p>
      </div>
    </div>
  );
};

export default RecentActivity;