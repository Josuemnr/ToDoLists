import { CustomInput } from '../CustomImput/CustomImput';
import { Box } from '../ui/box';
import { Button, ButtonText } from '../ui/button';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';
import { VStack } from '../ui/vstack';
import React, { useState } from 'react';

// 1. NUEVOS IMPORTS: Íconos y Navegación Web
import { Check, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function RecuperarPasswordForm() {
  // 2. Instanciamos el navegador de web
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleRecover = () => {
    setError('');
    if (!email) {
      setError('Por favor ingresa tu correo electrónico.');
      return;
    }
    setIsSubmitted(true); // solo es simulado 
  };

  return (
    <Box className="w-full max-w-md bg-slate-900/90 p-10 rounded-3xl border border-slate-700 shadow-2xl backdrop-blur-md">
      
      {!isSubmitted ? (
        <VStack space="xl">
          <VStack space="sm" className="items-start mb-4">
            <Heading size="2xl" className="text-white font-bold">Recuperar Contraseña</Heading>
            <Text className="text-slate-400 text-sm">
              Ingresa el correo electrónico y te enviaremos las instrucciones para restablecer tu contraseña.
            </Text>
          </VStack>

          <CustomInput
            label="Email"
            placeholder="usuario@sanitek.com"
            value={email}
            onChangeText={setEmail}
          />

          {error ? <Text className="text-red-400 text-sm font-medium">{error}</Text> : null}

          <Button
            className="bg-blue-600 rounded-xl h-14 shadow-lg hover:bg-blue-500 active:bg-blue-700 mt-2 transition-colors"
            onPress={handleRecover}
          >
            <ButtonText className="font-semibold text-white text-lg">Enviar Instrucciones</ButtonText>
          </Button>
        </VStack>
      ) : (
        <VStack space="lg" className="items-center py-6">
          <Box className="w-16 h-16 bg-green-500/20 rounded-full items-center justify-center mb-2 border border-green-500/30">
            {/* 3. Reemplazo del ícono Check */}
            <Check size={32} color="#22c55e" />
          </Box>
          <Heading size="xl" className="text-white font-bold text-center">¡Enlace Enviado!</Heading>
          <Text className="text-slate-400 text-sm text-center">
            Hemos enviado un correo a <Text className="text-white font-bold">{email}</Text> con las instrucciones para restablecer tu contraseña.
          </Text>
        </VStack>
      )}

      {/* 4. Cambiamos router.push por navigate y actualizamos el ícono */}
      <Button variant="link" className="mt-8 self-center" onPress={() => navigate('/login')}>
        <ArrowLeft size={16} color="#94a3b8" style={{ marginRight: 8 }} />
        <ButtonText className="text-slate-400 text-sm no-underline hover:text-white transition-colors">
          Volver al inicio de sesión
        </ButtonText>
      </Button>
    </Box>
  );
}