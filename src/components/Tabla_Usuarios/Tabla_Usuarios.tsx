import { Box } from '../ui/box';
import { HStack } from '../ui/hstack';
import { Pressable } from '../ui/pressable';
import { Text } from '../ui/text';
import React from 'react';

// 1. NUEVO IMPORT: Íconos de Lucide
import { Edit2, Trash2 } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastAccess: string;
}

interface Props {
  users: User[];
  onEditUser: (user: User) => void;
  onDeleteUser: (user: User) => void;
}

export function UserTable({ users, onEditUser, onDeleteUser }: Props) {
  // Función interna para los colores
  const obtenerEstiloRol = (rol: string) => {
    switch (rol) {
      case 'Director': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      case 'Administrador': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Gerente': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return ( 
    <Box className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex-1">
      {/* CABECERA DE LA TABLA */}
      <HStack className="bg-slate-50 p-4 border-b border-slate-200">
        <Text className="flex-1 font-bold text-slate-600 text-xs uppercase tracking-wider">Usuario</Text>
        <Text className="w-32 font-bold text-slate-600 text-xs uppercase tracking-wider">Rol</Text>
        <Text className="w-32 font-bold text-slate-600 text-xs uppercase tracking-wider">Último Acceso</Text>
        <Text className="w-24 font-bold text-slate-600 text-xs uppercase tracking-wider">Estado</Text>
        <Text className="w-44 font-bold text-slate-600 text-xs uppercase tracking-wider text-center">Acciones</Text>
      </HStack>

      {/* 2. REEMPLAZO DEL SCROLLVIEW: Usamos un div con overflow-y-auto */}
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <HStack key={user.id} className="p-4 border-b border-slate-100 items-center">
            <Box className="flex-1">
              <Text className="font-semibold text-slate-800">{user.name}</Text>
              <Text className="text-slate-400 text-xs">{user.email}</Text>
            </Box>
            
            <Box className="w-32">
              <Box className={`px-2 py-1 rounded-md border self-start ${obtenerEstiloRol(user.role)}`}>
                <Text className={`text-[11px] font-bold uppercase tracking-wide ${obtenerEstiloRol(user.role).split(' ')[1]}`}>
                  {user.role}
                </Text>
              </Box>
            </Box>

            <Box className="w-32">
              <Text className="text-slate-500 text-sm">{user.lastAccess}</Text>
            </Box>
            
            <Box className="w-24">
              <Box className={`px-3 py-1 rounded-full self-start ${user.status === 'Activo' ? 'bg-green-100' : 'bg-slate-100'}`}>
                <Text className={`text-[10px] font-bold uppercase ${user.status === 'Activo' ? 'text-green-700' : 'text-slate-500'}`}>
                  {user.status}
                </Text>
              </Box>
            </Box>
            
            <HStack className="w-44 justify-center" space="sm">
              {/* Botón de Editar */}
              <Pressable 
                onPress={() => onEditUser(user)}
                className="flex-row items-center bg-slate-100 px-3 py-2 rounded-lg active:bg-slate-200 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {/* 3. REEMPLAZO DEL ÍCONO EDITAR */}
                <Edit2 size={14} color="#3b82f6" style={{ marginRight: 4 }} />
                <Text className="text-blue-500 text-sm font-medium">Editar</Text>
              </Pressable>

              {/* Botón de Eliminar */}
              <Pressable 
                onPress={() => onDeleteUser(user)}
                className="flex-row items-center bg-red-50 px-3 py-2 rounded-lg active:bg-red-100 hover:bg-red-100 transition-colors cursor-pointer"
              >
                {/* 4. REEMPLAZO DEL ÍCONO ELIMINAR */}
                <Trash2 size={14} color="#ef4444" style={{ marginRight: 4 }} />
                <Text className="text-red-500 text-sm font-medium">Eliminar</Text>
              </Pressable>
            </HStack>
          </HStack>
        ))}

        {users.length === 0 && (
          <Box className="p-8 items-center justify-center">
            <Text className="text-slate-400">No hay usuarios con este estado.</Text>
          </Box>
        )}
      </div>
    </Box>
  );
}