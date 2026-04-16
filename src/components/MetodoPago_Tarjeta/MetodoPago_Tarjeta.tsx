import { Box } from '../ui/box';
import { Button, ButtonText } from '../ui/button';
import { HStack } from '../ui/hstack';
import { Text } from '../ui/text';
import { VStack } from '../ui/vstack';
import React from 'react';

// 1. NUEVA IMPORTACIÓN: Traemos Visa y Mastercard de FontAwesome (fa)
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';

interface Props { 
  brand: "visa" | "mastercard"; 
  last4: string;
  expiry: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function PaymentMethodCard({ brand, last4, expiry, onEdit, onDelete }: Props) {
  const numeroCensurado = `**** **** **** ${last4}`;

  return (
    <Box className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex-row items-center justify-between mb-3">
      <HStack className="items-center">
        <Box className="bg-slate-100 p-2 rounded-lg mr-4 w-12 items-center justify-center">
          
          {/* 2. RENDERIZADO CONDICIONAL: Mostramos el SVG correcto */}
          {brand === 'visa' ? (
            <FaCcVisa size={24} color="#1e293b" />
          ) : (
            <FaCcMastercard size={24} color="#1e293b" />
          )}

        </Box>
        <VStack>
          <Text className="text-slate-800 font-bold tracking-widest">{numeroCensurado}</Text>
          <Text className="text-slate-500 text-xs">Expira {expiry}</Text>
        </VStack>
      </HStack>
      
      <HStack space="lg" className="items-center"> 
        <Button variant="link" className="px-3 py-2" onPress={onEdit}> 
          <ButtonText className="text-blue-600 text-base font-bold hover:text-blue-800 transition-colors">
            Editar
          </ButtonText> 
        </Button>
        <Button variant="link" className="px-3 py-2" onPress={onDelete}>
          <ButtonText className="text-red-500 text-base font-bold hover:text-red-700 transition-colors">
            Eliminar
          </ButtonText>
        </Button>
      </HStack>
    </Box>
  );
}