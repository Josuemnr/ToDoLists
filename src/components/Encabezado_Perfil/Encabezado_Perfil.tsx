import { Box } from '../ui/box';
import { Button, ButtonText } from '../ui/button';
import { Heading } from '../ui/heading';
import { Text } from '../ui/text';
import { VStack } from '../ui/vstack';
import { Search } from 'lucide-react';

export function Encabezado_Perfil() {
  return (
    <Box className="bg-blue-50/80 rounded-2xl p-6 border border-blue-100 mb-6 flex-row items-center">
      {/* Avatar con botón de cámara */}
      <Box className="relative mr-6">
        <Box className="w-24 h-24 rounded-full bg-slate-300 border-4 border-white shadow-sm overflow-hidden items-center justify-center">
          <Search size={20} color="#64748b" />
        </Box>
        <Box className="absolute bottom-0 right-0 bg-blue-600 w-8 h-8 rounded-full items-center justify-center border-2 border-white shadow-sm">
          <Search size={20} color="#64748b" />
        </Box>
      </Box>

      <VStack space="xs" className="flex-1">
        <Heading size="xl" className="text-slate-800">Josué Monroy Larios</Heading>
        <Text className="text-slate-500 text-sm mb-2">josue.monroy@sanitek.com</Text>
        <Button variant="solid" className="bg-white border border-slate-200 h-9 px-4 self-start rounded-lg shadow-sm hover:bg-slate-50">
          <ButtonText className="text-blue-600 text-xs font-semibold">Cambiar imagen</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}