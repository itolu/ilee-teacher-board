
import React from 'react';
import { Home, BookOpen, Users, BarChart2, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out md:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="p-6">
        <h2 className="text-xl font-bold font-buenos text-ilee-purple">iLee Teacher Board</h2>
      </div>
      <nav className="px-4 py-2">
        <ul className="space-y-1">
          <li>
            <a 
              href="#" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg bg-ilee-lavender"
            >
              <Home className="h-5 w-5 text-ilee-purple" />
              <span className="font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="flex items-center gap-3 px-4 py-3 text-gray-600 rounded-lg hover:bg-ilee-lavender transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span>Subjects</span>
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="flex items-center gap-3 px-4 py-3 text-gray-600 rounded-lg hover:bg-ilee-lavender transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>Students</span>
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="flex items-center gap-3 px-4 py-3 text-gray-600 rounded-lg hover:bg-ilee-lavender transition-colors"
            >
              <BarChart2 className="h-5 w-5" />
              <span>Reports</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
        <ul className="space-y-1">
          <li>
            <a 
              href="#" 
              className="flex items-center gap-3 px-4 py-3 text-gray-600 rounded-lg hover:bg-ilee-lavender transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="flex items-center gap-3 px-4 py-3 text-gray-600 rounded-lg hover:bg-ilee-lavender transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
