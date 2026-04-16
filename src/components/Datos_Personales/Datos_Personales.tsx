import { Box } from '../ui/box';
import { Heading } from '../ui/heading';
import { HStack } from '../ui/hstack';
import { Input, InputField } from '../ui/input';
import { Text } from '../ui/text';
import { VStack } from '../ui/vstack';
import { Search } from 'lucide-react';


export function Datos_Personales() {
  return (
    <Box className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-6">
      <HStack className="items-center mb-6">
        <Search size={20} color="#64748b" />
        <Heading size="md" className="text-slate-800">Datos Personales</Heading>
      </HStack>

      <VStack space="lg">
        <Box>
          <Text className="text-slate-700 text-sm font-semibold mb-2">Nombre Completo</Text>
          <Input variant="outline" className="h-12 border-transparent bg-blue-50 rounded-xl px-4">
            <InputField placeholder="Josué Monroy Larios" className="text-slate-800" />
          </Input>
        </Box>

        <Box>
          <Text className="text-slate-700 text-sm font-semibold mb-2">Correo Electrónico</Text>
          <Input variant="outline" className="h-12 border-transparent bg-blue-50 rounded-xl px-4">
            <InputField placeholder="josue.monroy@sanitek.com" className="text-slate-800" />
          </Input>
        </Box>
      </VStack>
    </Box>
  );
}