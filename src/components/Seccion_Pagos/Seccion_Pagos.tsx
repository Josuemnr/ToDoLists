import { Button, ButtonText } from '../ui/button';
import { Heading } from '../ui/heading';
import { VStack } from '../ui/vstack';
import React from 'react';

// Importamos nuestra nueva Molécula
import { PaymentMethodCard } from '../MetodoPago_Tarjeta/MetodoPago_Tarjeta';

// 1. NUEVO IMPORT: Traemos el ícono Plus de Lucide
import { Plus } from 'lucide-react';

export function PaymentMethodsSection() {
  return (
    <VStack className="mb-8">
      <Heading size="lg" className="text-slate-800 mb-4">Métodos de Pago</Heading>
      <PaymentMethodCard // mock de tarjeta de credito 
        brand="visa" 
        last4="4242" 
        expiry="08/27" 
        onEdit={() => console.log("Editar tarjeta")}
        onDelete={() => console.log("Eliminar tarjeta")}
      />

      {/* Botón Añadir Nuevo */}
      <Button variant="outline" className="border-dashed border-2 border-slate-300 rounded-xl h-14 bg-slate-50 mt-2 hover:bg-slate-100 transition-colors">
        
        {/* 2. REEMPLAZO DEL ÍCONO */}
        <Plus size={16} color="#64748b" style={{ marginRight: 8 }} />
        
        <ButtonText className="text-slate-600 font-medium">Añadir nuevo método de pago</ButtonText>
      </Button>
    </VStack>
  );
}