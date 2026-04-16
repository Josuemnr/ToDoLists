import { Box } from '../ui/box';
import { Input, InputField, InputIcon, InputSlot } from '../ui/input';
import { Text } from '../ui/text';
// 1. Importamos los dos íconos explícitamente
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';

interface Props {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export function PasswordInput({ label, placeholder, value, onChangeText }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <Text className="text-slate-700 text-sm font-semibold mb-2">{label}</Text>
      <Input variant="outline" className="h-12 border-transparent bg-blue-50 rounded-xl"> 
        <InputField 
          placeholder={placeholder} 
          type={showPassword ? "text" : "password"} 
          value={value}
          onChangeText={onChangeText}
          className="px-4 text-slate-800" 
        />
        {/* En la web usamos onClick en lugar de onPress */}
        <InputSlot className="pr-4" onClick={() => setShowPassword(!showPassword)}>
          <InputIcon>
            {/* 2. Renderizado Condicional: Evaluamos qué componente pintar */}
            {showPassword ? (
              <Eye size={18} color="#64748b" />
            ) : (
              <EyeOff size={18} color="#64748b" />
            )}
          </InputIcon>
        </InputSlot>
      </Input>
    </Box>
  );
}