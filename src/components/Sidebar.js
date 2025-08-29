import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Send, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ isOpen, onToggle }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Users, label: 'Conexiones WhatsApp' },
    { icon: MessageSquare, label: 'Mensajes' },
    { icon: Send, label: 'Campañas Masivas' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white shadow-lg border-r border-gray-200 z-30 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      }`}>
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className={`flex items-center space-x-3 ${!isOpen && 'justify-center'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="grid grid-cols-3 gap-0.5 w-5 h-5">
                <div className="bg-white rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
                <div className="bg-red-400 rounded-sm"></div>
                <div className="bg-green-400 rounded-sm"></div>
                <div className="bg-yellow-400 rounded-sm"></div>
                <div className="bg-green-400 rounded-sm"></div>
                <div className="bg-yellow-400 rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
              </div>
            </div>
            {isOpen && (
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  <span className="text-blue-800">Kanban</span>
                  <span className="text-blue-600">PRO</span>
                </h1>
              </div>
            )}
          </div>
          
          <button
            onClick={onToggle}
            className="p-1.5 rounded-lg hover:bg-gray-100 hidden lg:flex"
          >
            {isOpen ? (
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-600" />
            )}
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="p-4">
          <div className="space-y-2">
            <div className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ${
              !isOpen && 'text-center'
            }`}>
              {isOpen ? 'Principal' : '•'}
            </div>
            
            {menuItems.slice(0, 1).map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors duration-200 ${
                    item.active
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  } ${!isOpen && 'justify-center'}`}
                >
                  <Icon className={`h-5 w-5 flex-shrink-0 ${
                    item.active ? 'text-primary-600' : 'text-gray-500'
                  }`} />
                  {isOpen && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </a>
              );
            })}
            
            <div className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-3 ${
              !isOpen && 'text-center'
            }`}>
              {isOpen ? 'Comunicaciones' : '•'}
            </div>
            
            {menuItems.slice(1).map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index + 1}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-100 ${
                    !isOpen && 'justify-center'
                  }`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0 text-gray-500" />
                  {isOpen && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </a>
              );
            })}
          </div>
        </nav>
        
        {/* Settings at bottom */}
        <div className="absolute bottom-4 left-4 right-4">
          <a
            href="#"
            className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-100 ${
              !isOpen && 'justify-center'
            }`}
          >
            <Settings className="h-5 w-5 flex-shrink-0 text-gray-500" />
            {isOpen && (
              <span className="font-medium">Configuración</span>
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;