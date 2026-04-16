import React from 'react';

import { VStack } from '../ui/vstack';
import { Spinner } from '../ui/spinner';
import { Text } from '../ui/text';

interface Props {
  isVisible: boolean;
  mensaje?: string;
}

export function PantallaCarga({ isVisible, mensaje = "Cargando..." }: Props) {
  if (!isVisible) return null;

  return (
    // 1. Reemplazamos <View> por <div>
    // 2. Quitamos el StyleSheet y agregamos 'fixed inset-0 flex'
    <div className="fixed inset-0 flex bg-slate-950/60 items-center justify-center z-[100] backdrop-blur-sm">
      
      <VStack space="md" className="bg-white p-8 rounded-2xl items-center shadow-2xl border border-slate-200">
        {/* El Spinner animado de Gluestack Web */}
        <Spinner size="large" className="text-blue-500" />
        
        <Text className="text-slate-700 font-semibold text-base mt-2">
          {mensaje}
        </Text>
      </VStack>
      
    </div>
  );
}