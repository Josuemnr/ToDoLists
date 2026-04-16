import { RecuperarPasswordForm } from '../../components/Recuperar_Password_Form/Recuperar_Password_Form';
import React from 'react';


export default function ForgotPasswordScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 relative overflow-hidden">
      
      <div className="absolute inset-0 z-0">
      </div>
      
      <div className="flex-1 flex justify-center items-center p-6 z-10 pointer-events-none">
        
        <div className="pointer-events-auto w-full max-w-md flex justify-center">
          <RecuperarPasswordForm />
        </div>
        
      </div>

    </div>
  );
}