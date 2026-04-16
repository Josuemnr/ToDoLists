import React, { useState } from 'react';
// 1. NUEVO IMPORT: Navegación de Web
import { useNavigate, Link as RouterLink } from 'react-router-dom';

import { CustomInput } from '../../components/CustomImput/CustomImput';
import { Box } from '../../components/ui/box';
import { Button, ButtonText } from '../../components/ui/button';
import { Heading } from '../../components/ui/heading';
import { Text } from '../../components/ui/text';
import { VStack } from '../../components/ui/vstack';
import { PantallaCarga } from '../../components/Estado_Carga/Estado_Carga';

// 2. Eliminamos por completo los imports de 'react-native' y 'expo-router'

export default function LoginScreen() {
  // 3. Instanciamos el navegador web
  const navigate = useNavigate();

  // Estados para el registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Estado para la carga
  const [isLoading, setIsLoading] = useState(false);

  // ¡MAGIA WEB! Eliminamos todo el useEffect y useRef de la animación.
  // La web maneja las animaciones de rotación nativamente por CSS.

  const handleLogin = () => {
    setErrorMessage('');
    
    if (!email || !password) {
      setErrorMessage('Por favor, llena todos los campos.');
      return;
    }

    setIsLoading(true); 

    setTimeout(() => {
      const mockUsers = [
        { email: 'femina@sanitek.com', password: 'bonita', role: 'Administrador' }
      ];
      
      const user = mockUsers.find(
        (u) => u.email === email.toLowerCase().trim() && u.password === password
      );
      
      if (user) {
        // 4. Cambiamos router.replace por navigate(ruta, { replace: true })
        navigate('/Gestion_Usuarios', { replace: true }); 
      } else {
        setIsLoading(false); 
        setErrorMessage('Correo o contraseña incorrectos.');
      }
    }, 1500); 
  };

  return (
    // 5. Reemplazamos <View> por <div> con 'min-h-screen'
    <div className="min-h-screen flex flex-col bg-slate-950 overflow-hidden relative">
      
      {/* IMAGEN DE FONDO ANIMADA (PLANETA ROTANDO) */}
      {/* 6. Reemplazamos <Animated.Image> por <img> estándar de HTML con rotación CSS */}
      <img
        src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop"
        alt="Planeta girando"
        className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] opacity-40 object-cover"
        style={{ animation: 'spin 120s linear infinite' }}
      />
      
      <div className="flex-1 flex justify-end items-end p-12 lg:p-24 z-10" >
        
        <Box className="w-full max-w-md bg-slate-900/80 p-10 rounded-3xl border border-slate-700 shadow-2xl backdrop-blur-sm">
          <VStack space="md" className="items-start mb-10">
            <Heading size="2xl" className="text-white font-bold">Inicia Sesión</Heading>
            <Text className="text-slate-400 text-base">Plataforma de Riesgo Sanitario</Text>
          </VStack>

          <VStack space="xl">
            <CustomInput
              label="Email" 
              placeholder="usuario@sanitek.com" 
              value={email}
              onChangeText={setEmail}
            />
            <CustomInput
              label="Contraseña" 
              placeholder="********" 
              type="password" 
              value={password}
              onChangeText={setPassword}
            />

            {errorMessage ? (
              <Text className="text-red-400 text-sm font-medium text-center mt-2">
                {errorMessage}
              </Text>
            ) : null}
            
            <Button 
              className="bg-blue-600 rounded-xl h-14 shadow-lg hover:bg-blue-500 active:bg-blue-700 mt-4 transition-colors"
              onPress={handleLogin}
              disabled={isLoading} 
            >
              <ButtonText className="font-semibold italic text-white text-lg">Ingresar al Sistema</ButtonText>
            </Button>

            {/* 7. Reemplazamos el Link de Expo por el RouterLink de React Router Dom */}
            <RouterLink to="/forgot" className="mt-4 self-center text-slate-400 text-sm no-underline hover:text-white transition-colors">
              ¿Olvidaste tu contraseña?
            </RouterLink>
          </VStack>
        </Box>

      </div>

      <PantallaCarga isVisible={isLoading} mensaje="Iniciando sesión..." />

    </div>
  );
}